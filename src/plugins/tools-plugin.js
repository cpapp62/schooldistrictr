import hotkeys from 'hotkeys-js';

import BrushTool from "../components/Toolbar/BrushTool";
import EraserTool from "../components/Toolbar/EraserTool";
import InspectTool from "../components/Toolbar/InspectTool";
import PanTool from "../components/Toolbar/PanTool";
import LandmarkTool from "../components/Toolbar/LandmarkTool";
import Brush from "../map/Brush";
import CommunityBrush from "../map/CommunityBrush";
import {
    HoverWithRadius
}
from "../map/Hover";
import NumberMarkers from "../map/NumberMarkers";
import ContiguityChecker from "../map/contiguity";
import VRAEffectiveness from "../map/vra_effectiveness"
import {
    renderVRAAboutModal,
    renderAboutModal,
    renderSaveModal,
    renderModal
}
from "../components/Modal";
import {
    navigateTo,
    savePlanToStorage,
    savePlanToDB
}
from "../routes";
import {
    download,
    spatial_abilities
}
from "../utils";
import {
    html,
    render
}
from "lit-html";
import {
    loadModules
}
from 'esri-loader';
import {
    districtColors
}
from "../colors";

export default function ToolsPlugin(editor) {
    const {
        state,
        toolbar
    } = editor;
    //state.place.id.substr(0,2) + "1"
    const showVRA = (state.plan.problem.type !== "community") && (spatial_abilities(state.place.id).vra_effectiveness);
    const brush = new Brush(state.units, 20, 0);
    brush.on("colorfeature", state.update);
    brush.on("colorend", state.render);
    brush.on("colorend", toolbar.unsave);
    state.brush = brush;

    if (state.plan.problem.type !== "community") {
        // show drop-in geojson and built-in landmarks
        new LandmarkTool(state);
    }

    let alt_counties = {
        alaska: 'boroughs',
        alaska_blocks: 'boroughs',
        louisiana: 'parishes',
    }
    [state.place.id];
    let brushOptions = {
        community: (state.problem.type === "community"),
        county_brush: ((spatial_abilities(state.place.id).county_brush)
             ? new HoverWithRadius(state.counties, 20)
             : null),
        alt_counties: alt_counties,
    };

    let vraEffectiveness = showVRA ? VRAEffectiveness(state, brush, toolbar) : null;

    window.planNumbers = NumberMarkers(state, brush);

    const contiguity_on = (spatial_abilities(state.place.id).contiguity
         || state.unitsRecord.id === "blockgroups"
         || state.unitsRecord.id === "blockgroups20"
         || state.unitsRecord.id === "vtds20");
    const c_checker = (contiguity_on && state.problem.type !== "community")
     ? ContiguityChecker(state, brush, false)
     : null;

    if (state.place.id.indexOf("nyc") > -1) {
        window.nycmode = true;
    }
    brush.on("colorop", (isUndoRedo, colorsAffected, nycPlusMinus) => {
        savePlanToStorage(state.serialize());

        if (window.nycmode) {
            function sumChanges(plusAndMinus) {
                let added = JSON.parse(plusAndMinus['+']),
                subtracted = JSON.parse(plusAndMinus['-']);
                Object.keys(subtracted).forEach(skey => added[skey] -= subtracted[skey] || 0);
                return added;
            }
            fetch("//mggg.pythonanywhere.com/nyc-assist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    colors: nycPlusMinus
                }),
            }).then(res => res.json()).then(tallies => {
                Object.keys(tallies).forEach((part) => {
                    // add numbers to evaluation table
                    state.columnSets.forEach(columnSet => columnSet.update({
                            properties: sumChanges(tallies[part])
                        }, part));
                    // remove transparency on evaluation table
                    document.body.className = '';
                    // render table
                    state.render();
                });
            });
        }

        if (c_checker) {
            c_checker(state, colorsAffected);
        }

        if (vraEffectiveness) {
            vraEffectiveness(state, colorsAffected);
        }

        if (window.planNumbers && document.querySelector("#toggle-district-numbers")
             && document.querySelector("#toggle-district-numbers").checked) {
            window.planNumbers.update(state, colorsAffected);
        }
    });
    let tools = [
        new PanTool(),
        new BrushTool(state, brush, state.parts, brushOptions),
        new EraserTool(brush),
        new InspectTool(
            state.layers,
            state.columnSets,
            state.nameColumn,
            state.unitsRecord,
            state.parts,
            spatial_abilities(state.place.id).divisor, )
    ];

    for (let tool of tools) {
        if (tool) {
            toolbar.addTool(tool);
        }
    }
    toolbar.selectTool("pan");
    toolbar.setMenuItems(getMenuItems(editor.state));
    if (!window.location.href.includes("embed")) {
        toolbar.setState(state);
    }

    hotkeys.filter = ({
        target
    }) => {
        return (
            !["INPUT", "TEXTAREA"].includes(target.tagName) ||
            (target.tagName === "INPUT" && target.type.toLowerCase() !== "text" && target.type.toLowerCase() !== "search"));
    };
    hotkeys("h", (evt, handler) => {
        evt.preventDefault();
        toolbar.selectTool("pan");
    });
    hotkeys("p", (evt, handler) => {
        evt.preventDefault();
        toolbar.selectTool("brush");
    });
    hotkeys("e", (evt, handler) => {
        evt.preventDefault();
        toolbar.selectTool("eraser");
    });
    hotkeys("i", (evt, handler) => {
        evt.preventDefault();
        toolbar.selectTool("inspect");
    });

    loadModules(["esri/rest/support/Query", "esri/rest/query"]).then(([Query, query]) => {
        let file = "https://gis.pwcs.edu/server/rest/services/Hosted/Schools_FeaturesToJSON/FeatureServer/0";
        let params = new Query();
        params.returnGeometry = false;
        params.outFields = ["schltype", "point_x", "point_y", "school_id"];
        params.where = 'schltype = 1';
        const getFeatures = async() => {
            while (!brush.layer.map.isSourceLoaded(brush.layer.sourceId)) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log(brush.layer.sourceId);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        };
        getFeatures().then(features => {
            query.executeQueryJSON(file, params).then((results2) => {
                let lockedPZS = [];
                let bound;
                for (let i = 0; i < results2.features.length; i++) {
                    bound = brush.initialColor(results2.features[i]);
                    bound[0].color = results2.features[i].attributes["school_id"];
                    lockedPZS.push(bound[0]);
                }
				let theFeatures = [121, 153, 196];
				for(let j = 0; j < theFeatures.length; j++){
					bound = brush.layer.map.querySourceFeatures(brush.layer.sourceLayer, {
						sourceLayer: brush.layer.sourceLayer,
						filter: ["==", "OmniGDB.SDE.PZ22a_QAT_Simplify_NAD1983.PZ_num", theFeatures[j]]
					})
					console.log(bound);
					bound[0].color = 63;
					bound[0].state = {};
					bound[0].state.color = 63;
					lockedPZS.push(bound[0]);
				}
                brush.lockedPZS = lockedPZS;
                brush.firstColor(brush.lockedPZS);
                toolbar.selectTool("brush");
                toolbar.selectTool("pan");
            })
        });

        // show about modal on startup by default

        // exceptions if you last were on this map, or set 'dev' in URL
        // try {
        //     if ((window.location.href.indexOf("dev") === -1) &&
        //         (!localStorage || localStorage.getItem("lastVisit") !== state.place.id)
        //     ) {
        //         renderAboutModal(editor.state);
        //         localStorage.setItem("lastVisit", state.place.id);
        //     }
        // } catch(e) {
        //     // likely no About page exists - silently fail to console
        //     console.error(e);
        // }
    })
}

function exportPlanAsJSON(state) {
    const serialized = state.serialize();
    const text = JSON.stringify(serialized);
    download(`districtr-plan-${serialized.id}.json`, text);
}
function exportPlanAsSHP(state, geojson) {
    const serialized = state.serialize();
    Object.keys(serialized.assignment).forEach((assign) => {
        if (typeof serialized.assignment[assign] === 'number') {
            serialized.assignment[assign] = [serialized.assignment[assign]];
        }
    });
    render(renderModal(`Starting your ${geojson ? "GeoJSON" : "SHP"} download `), document.getElementById("modal"));
    fetch("//mggg.pythonanywhere.com/" + (geojson ? "geojson" : "shp"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(serialized),
    })
    .then((res) => res.arrayBuffer())
    .catch((e) => console.error(e))
    .then((data) => {
        download(`districtr-plan-${serialized.id}.${geojson ? "geojsons.zip" : "shp.zip"}`, data, true);
    });
}

function exportPlanAsAssignmentFile(state, delimiter = ",", extension = "csv") {
	console.log(state);
    let srl = (assignment) => typeof assignment === "object" ? assignment.join("_") : assignment;
    let text = `"${state.units.id.substr(0,4)} `;
    text += `Feature ID"`;
    text += `${delimiter}school assignment\n`;
    text += Object.keys(state.plan.assignment)
		.map(unitId => `${unitId}${delimiter}${srl(state.plan.assignment[unitId])}`)
		.join("\n");
    download(`${state.place.elemProblems[0].name}_${state.units.id.substr(0,4)}.${extension}`, text);
}

function exportPlanAsBlockAssignment(state, delimiter = ",", extension = "csv") {
    const assign = Object.fromEntries(Object.entries(state.plan.assignment).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]));
    const units = state.unitsRecord.id;
    const stateName = state.place.state;
    render(renderModal(`Starting your block assignment file download `), document.getElementById("modal"));
    fetch("https://gvd4917837.execute-api.us-east-1.amazonaws.com/block_assignment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "state": stateName,
            "units": units,
            "assignment": assign
        })
    })
    .then((res) => res.json())
    .catch((e) => console.error(e))
    .then((data) => {
        const table_data = `Block${delimiter} District\n` + Object.entries(data).map(r => r.join(delimiter)).join("\n")
            download(`block-assignment-${state.plan.id}.csv`, table_data)
    })
}

function scrollToSection(state, section) {
    return () => {
        let url = "/" + state.place.state.replace(/,/g, "").replace(/\s+/g, '-'),
        adjacent = window.open(url);

        // Attach a listener to the adjacent Window so that, when the
        // page-load-complete event fires, it's caught and the page is
        // scrolled to the correct location.
        adjacent.addEventListener("page-load-complete", e => {
            let adjacent = e.target,
            anchorElement = adjacent.document.getElementById(section);

            // Scrolls the desired anchor element to the top of the page, should
            // it exist.
            if (anchorElement)
                anchorElement.scrollIntoView(true);
        });
    };
}

function getMenuItems(state) {
	console.log(state);
    const showVRA = (state.plan.problem.type !== "community") && (spatial_abilities(state.place.id).vra_effectiveness);
    const censusUnit = state.unitsRecord.id === "blockgroups"
         || state.unitsRecord.id === "blockgroups20"
         || state.unitsRecord.id === "vtds20";
    let items = [
        {
            name: "About redistricting",
            onClick: scrollToSection(state, "why?")
        },
        {
            name: "About the data",
            onClick: scrollToSection(state, "data")
        },
        {
            id: "mobile-upload",
            name: "Save plan",
            onClick: () => renderSaveModal(state, savePlanToDB)
        },
        {
            name: "Districtr homepage",
            onClick: () => {
                if (window.confirm("Would you like to return to the Districtr homepage?")) {
                    window.location.href = "/";
                }
            }
        },
        {
            name: "New plan",
            onClick: () => navigateTo("/new")
        },
        // {
        //     name: "Print / PDF",
        //     onClick: () => window.print()
        // },
        {
            name: `Export Districtr-JSON`,
            onClick: () => exportPlanAsJSON(state)
        },
        ((spatial_abilities(state.place.id).shapefile && !state.unitsRecord.id.includes("2020 VTD")) ?  {
            name: `Export${state.problem.type === "community" ? " COI " : " "}plan as SHP`,
            onClick: () => exportPlanAsSHP(state)
        } : null),
        ((spatial_abilities(state.place.id).shapefile && !state.unitsRecord.id.includes("2020 VTD")) ?  {
            name: `Export${state.problem.type === "community" ? " COI " : " "}plan as GeoJSON`,
            onClick: () => exportPlanAsSHP(state, true)
        } : null),
        {
            name: "Export assignment as CSV (these units)",
            onClick: () => exportPlanAsAssignmentFile(state)
        },
        (censusUnit || spatial_abilities(state.place.id).block_assign ? {
            name: "Export assignment file as CSV (blocks)",
            onClick: () => exportPlanAsBlockAssignment(state)
        }: null),
        {
            name: "About import/export options",
            onClick: () => window.open("/import-export", "_blank")
        }
    ];
    return items;
}
