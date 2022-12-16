/**
 * Global Districtr color map for districts.
 *
 * We might consider using fewer colors and just allowing repetitions,
 * since a human being can only hold so many colors in their head at
 * one time.
 */
import {
    loadModules
}
from 'esri-loader';
export var colorScheme;
export var districtColors;
export var totalPop;
//import Query from "@arcgis/core/rest/support/Query";
//import query from "@arcgis/core/rest/query";
loadModules(["esri/rest/support/Query", "esri/rest/query"]).then(([Query, query]) => {
    let file = "https://gis.pwcs.edu/server/rest/services/Hosted/School_Capacity_2022/FeatureServer/0";
    let params = new Query();
    params.returnGeometry = false;
    params.outFields = ["school_name_3", "cap"];
    params.where = 'school_type_name IS NOT NULL';
    query.executeQueryJSON(file, params).then(function (results) {
        let schools = {};
        for (let i = 0; i < results.features.length; i++) {
            schools[`${results.features[i].attributes.school_name_3}`] = results.features[i].attributes.cap;
        }
        let _colorScheme = [{
                color: "#0099cd",
                name: "Alvey",
                capacity: {
                    "2022": schools["Alvey"]
                },
                id: "el1"
            }, {
                color: "#ffca5d",
                name: "Antietam",
                capacity: {
                    "2022": schools["Antietam"]
                },
                id: "el2"
            }, {
                color: "#00cd99",
                name: "Ashland",
                capacity: {
                    "2022": schools["Ashland"]
                },
                id: "el3"
            }, {
                color: "#99cd00",
                name: "Bel Air",
                capacity: {
                    "2022": schools["Bel Air"]
                },
                id: "el4"
            }, {
                color: "#cd0099",
                name: "Belmont",
                capacity: {
                    "2022": schools["Belmont"]
                },
                id: "el5"
            }, {
                color: "#9900cd",
                name: "Bennett",
                capacity: {
                    "2022": schools["Bennett"]
                },
                id: "el6"
            }, {
                color: "#8dd3c7",
                name: "Bristow Run",
                capacity: {
                    "2022": schools["Bristow Run"]
                },
                id: "el7"
            }, {
                color: "#bebada",
                name: "Buckland Mills",
                capacity: {
                    "2022": schools["Buckland Mills"]
                },
                id: "el8"
            }, {
                color: "#fb8072",
                name: "Cedar Point",
                capacity: {
                    "2022": schools["Cedar Point"]
                },
                id: "el9"
            }, {
                color: "#80b1d3",
                name: "Coles",
                capacity: {
                    "2022": schools["Coles"]
                },
                id: "el10"
            }, {
                color: "#fdb462",
                name: "Covington-Harper",
                capacity: {
                    "2022": schools["Covington-Harper"]
                },
                id: "el11"
            }, {
                color: "#b3de69",
                name: "Dale City",
                capacity: {
                    "2022": schools["Dale City"]
                },
                id: "el12"
            }, {
                color: "#fccde5",
                name: "Dumfries",
                capacity: {
                    "2022": schools["Dumfries"]
                },
                id: "el13"
            }, {
                color: "#d9d9d9",
                name: "Ellis",
                capacity: {
                    "2022": schools["Ellis"]
                },
                id: "el14"
            }, {
                color: "#bc80bd",
                name: "Enterprise",
                capacity: {
                    "2022": schools["Enterprise"]
                },
                id: "el15"
            }, {
                color: "#ccebc5",
                name: "Featherstone",
                capacity: {
                    "2022": schools["Featherstone"]
                },
                id: "el16"
            }, {
                color: "#ffed6f",
                name: "Fitzgerald",
                capacity: {
                    "2022": schools["Fitzgerald"]
                },
                id: "el17"
            }, {
                color: "#ffffb3",
                name: "Glenkirk",
                capacity: {
                    "2022": schools["Glenkirk"]
                },
                id: "el18"
            }, {
                color: "#a6cee3",
                name: "Gravely",
                capacity: {
                    "2022": schools["Gravely"]
                },
                id: "el19"
            }, {
                color: "#1f78b4",
                name: "Haymarket",
                capacity: {
                    "2022": schools["Haymarket"]
                },
                id: "el20"
            }, {
                color: "#b2df8a",
                name: "Henderson",
                capacity: {
                    "2022": schools["Henderson"]
                },
                id: "el21"
            }, {
                color: "#33a02c",
                name: "Jenkins",
                capacity: {
                    "2022": schools["Jenkins"]
                },
                id: "el22"
            }, {
                color: "#fb9a99",
                name: "Kerrydale",
                capacity: {
                    "2022": schools["Kerrydale"]
                },
                id: "el23"
            }, {
                color: "#e31a1c",
                name: "Kilby",
                capacity: {
                    "2022": schools["Kilby"]
                },
                id: "el24"
            }, {
                color: "#fdbf6f",
                name: "King",
                capacity: {
                    "2022": schools["King"]
                },
                id: "el25"
            }, {
                color: "#ff7f00",
                name: "Lake Ridge",
                capacity: {
                    "2022": schools["Lake Ridge"]
                },
                id: "el26"
            }, {
                color: "#cab2d6",
                name: "Leesylvania",
                capacity: {
                    "2022": schools["Leesylvania"]
                },
                id: "el27"
            }, {
                color: "#6a3d9a",
                name: "Loch Lomond",
                capacity: {
                    "2022": schools["Loch Lomond"]
                },
                id: "el28"
            }, {
                color: "#b15928",
                name: "Marshall",
                capacity: {
                    "2022": schools["Marshall"]
                },
                id: "el29"
            }, {
                color: "#64ffda",
                name: "Marumsco Hills",
                capacity: {
                    "2022": schools["Marumsco Hills"]
                },
                id: "el30"
            }, {
                color: "#00B8D4",
                name: "McAuliffe",
                capacity: {
                    "2022": schools["McAuliffe"]
                },
                id: "el31"
            }, {
                color: "#A1887F",
                name: "Minnieville",
                capacity: {
                    "2022": schools["Minnieville"]
                },
                id: "el32"
            }, {
                color: "#76FF03",
                name: "Montclair",
                capacity: {
                    "2022": schools["Montclair"]
                },
                id: "el33"
            }, {
                color: "#DCE775",
                name: "Mountain View",
                capacity: {
                    "2022": schools["Mountain View"]
                },
                id: "el34"
            }, {
                color: "#B388FF",
                name: "Mullen",
                capacity: {
                    "2022": schools["Mullen"]
                },
                id: "el35"
            }, {
                color: "#FF80AB",
                name: "Neabsco",
                capacity: {
                    "2022": schools["Neabsco"]
                },
                id: "el36"
            }, {
                color: "#D81B60",
                name: "Nokesville School, The",
                capacity: {
                    "2022": schools["Nokesville School, The"]
                },
                id: "el37"
            }, {
                color: "#26A69A",
                name: "Occoquan",
                capacity: {
                    "2022": schools["Occoquan"]
                },
                id: "el38"
            }, {
                color: "#FFEA00",
                name: "Old Bridge",
                capacity: {
                    "2022": schools["Old Bridge"]
                },
                id: "el39"
            }, {
                color: "#ffff99",
                name: "Rosa Parks",
                capacity: {
                    "2022": schools["Rosa Parks"]
                },
                id: "el40"
            }, {
                color: "#6200EA",
                name: "Pattie",
                capacity: {
                    "2022": schools["Pattie"]
                },
                id: "el41"
            }, {
                color: "#62EA00",
                name: "Penn",
                capacity: {
                    "2022": schools["Penn"]
                },
                id: "el42"
            }, {
                color: "#EA6200",
                name: "Piney Branch",
                capacity: {
                    "2022": schools["Piney Branch"]
                },
                id: "el43"
            }, {
                color: "#EA0062",
                name: "Potomac View",
                capacity: {
                    "2022": schools["Potomac View"]
                },
                id: "el44"
            }, {
                color: "#88B3FF",
                name: "River Oaks",
                capacity: {
                    "2022": schools["River Oaks"]
                },
                id: "el45"
            }, {
                color: "#FF88B3",
                name: "Rockledge",
                capacity: {
                    "2022": schools["Rockledge"]
                },
                id: "el46"
            }, {
                color: "#99ffff",
                name: "Signal Hill",
                capacity: {
                    "2022": schools["Signal Hill"]
                },
                id: "el47"
            }, {
                color: "#ff99ff",
                name: "Sinclair",
                capacity: {
                    "2022": schools["Sinclair"]
                },
                id: "el48"
            }, {
                color: "#123456",
                name: "Springwoods",
                capacity: {
                    "2022": schools["Springwoods"]
                },
                id: "el49"
            }, {
                color: "#abcdef",
                name: "Sudley",
                capacity: {
                    "2022": schools["Sudley"]
                },
                id: "el50"
            }, {
                color: "#123abc",
                name: "Swans Creek",
                capacity: {
                    "2022": schools["Swans Creek"]
                },
                id: "el51"
            }, {
                color: "#abc123",
                name: "Triangle",
                capacity: {
                    "2022": schools["Triangle"]
                },
                id: "el52"
            }, {
                color: "#B800D4",
                name: "Tyler",
                capacity: {
                    "2022": schools["Tyler"]
                },
                id: "el53"
            }, {
                color: "#D4B800",
                name: "Vaughan",
                capacity: {
                    "2022": schools["Vaughan"]
                },
                id: "el54"
            }, {
                color: "#D400B8",
                name: "Victory",
                capacity: {
                    "2022": schools["Victory"]
                },
                id: "el55"
            }, {
                color: "#887F1A",
                name: "West Gate",
                capacity: {
                    "2022": schools["West Gate"]
                },
                id: "el56"
            }, {
                color: "#a1ce31",
                name: "Westridge",
                capacity: {
                    "2022": schools["Westridge"]
                },
                id: "el57"
            }, {
                color: "#0f0f0f",
                name: "Mary Williams",
                capacity: {
                    "2022": schools["Mary Williams"]
                },
                id: "el58"
            }, {
                color: "#f0f0f0",
                name: "Kyle Wilson",
                capacity: {
                    "2022": schools["Kyle Wilson"]
                },
                id: "el59"
            }, {
                color: "#987654",
                name: "T. Clay Wood",
                capacity: {
                    "2022": schools["T. Clay Wood"]
                },
                id: "el60"
            }, {
                color: "#456789",
                name: "Yorkshire",
                capacity: {
                    "2022": schools["Yorkshire"]
                },
                id: "el61"
            }, {
                color: "#cd1a2b",
                name: "Chris Yung",
                capacity: {
                    "2022": schools["Chris Yung"]
                },
                id: "el62"
            }, {
                color: "#f8c5a2",
                name: "Rosemount Lewis",
                capacity: {
                    "2022": schools["Rosemount Lewis"]
                },
                id: "el63"
            }, {
                color: "#0099cd",
                name: "Benton",
                capacity: {
                    "2022": schools["Benton"]
                },
                id: "mi1"
            }, {
                color: "#ffca5d",
                name: "Beville",
                capacity: {
                    "2022": schools["Beville"]
                },
                id: "mi2"
            }, {
                color: "#00cd99",
                name: "Bull Run",
                capacity: {
                    "2022": schools["Bull Run"]
                },
                id: "mi3"
            }, {
                color: "#99cd00",
                name: "Gainesville",
                capacity: {
                    "2022": schools["Gainesville"]
                },
                id: "mi4"
            }, {
                color: "#cd0099",
                name: "Graham Park",
                capacity: {
                    "2022": schools["Graham Park"]
                },
                id: "mi5"
            }, {
                color: "#9900cd",
                name: "Hampton",
                capacity: {
                    "2022": schools["Hampton"]
                },
                id: "mi6"
            }, {
                color: "#8dd3c7",
                name: "Lake Ridge",
                capacity: {
                    "2022": schools["Lake Ridge"]
                },
                id: "mi7"
            }, {
                color: "#bebada",
                name: "Lynn",
                capacity: {
                    "2022": schools["Lynn"]
                },
                id: "mi8"
            }, {
                color: "#fb8072",
                name: "Marsteller",
                capacity: {
                    "2022": schools["Marsteller"]
                },
                id: "mi9"
            }, {
                color: "#80b1d3",
                name: "The Nokesville School",
                capacity: {
                    "2022": schools["The Nokesville School"]
                },
                id: "mi10"
            }, {
                color: "#fdb462",
                name: "Parkside",
                capacity: {
                    "2022": schools["Parkside"]
                },
                id: "mi11"
            }, {
                color: "#b3de69",
                name: "Potomac",
                capacity: {
                    "2022": schools["Potomac"]
                },
                id: "mi12"
            }, {
                color: "#fccde5",
                name: "Potomac Shores",
                capacity: {
                    "2022": schools["Potomac Shores"]
                },
                id: "mi13"
            }, {
                color: "#d9d9d9",
                name: "Reagan",
                capacity: {
                    "2022": schools["Reagan"]
                },
                id: "mi14"
            }, {
                color: "#bc80bd",
                name: "Rippon",
                capacity: {
                    "2022": schools["Rippon"]
                },
                id: "mi15"
            }, {
                color: "#ccebc5",
                name: "Saunders",
                capacity: {
                    "2022": schools["Saunders"]
                },
                id: "mi16"
            }, {
                color: "#ffed6f",
                name: "Unity Braxton",
                capacity: {
                    "2022": schools["Unity Braxton"]
                },
                id: "mi17"
            }, {
                color: "#ffffb3",
                name: "Woodbridge",
                capacity: {
                    "2022": schools["Woodbridge"]
                },
                id: "mi18"
            }, {
                color: "#0099cd",
                name: "Battlefield",
                capacity: {
                    "2022": schools["Battlefield"]
                },
                id: "hi1"
            }, {
                color: "#ffca5d",
                name: "Brentsville",
                capacity: {
                    "2022": schools["Brentsville"]
                },
                id: "hi2"
            }, {
                color: "#00cd99",
                name: "Colgan",
                capacity: {
                    "2022": schools["Colgan"]
                },
                id: "hi3"
            }, {
                color: "#99cd00",
                name: "Forest Park",
                capacity: {
                    "2022": schools["Forest Park"]
                },
                id: "hi4"
            }, {
                color: "#cd0099",
                name: "Freedom",
                capacity: {
                    "2022": schools["Freedom"]
                },
                id: "hi5"
            }, {
                color: "#9900cd",
                name: "Gainesville",
                capacity: {
                    "2022": schools["Gainesville"]
                },
                id: "hi6"
            }, {
                color: "#8dd3c7",
                name: "Gar-Field",
                capacity: {
                    "2022": schools["Gar-Field"]
                },
                id: "hi7"
            }, {
                color: "#bebada",
                name: "Hylton",
                capacity: {
                    "2022": schools["Hylton"]
                },
                id: "hi8"
            }, {
                color: "#fb8072",
                name: "Osbourn Park",
                capacity: {
                    "2022": schools["Osbourn Park"]
                },
                id: "hi9"
            }, {
                color: "#80b1d3",
                name: "Patriot",
                capacity: {
                    "2022": schools["Patriot"]
                },
                id: "hi10"
            }, {
                color: "#fdb462",
                name: "Potomac",
                capacity: {
                    "2022": schools["Potomac"]
                },
                id: "hi11"
            }, {
                color: "#b3de69",
                name: "Unity Reed",
                capacity: {
                    "2022": schools["Unity Reed"]
                },
                id: "hi12"
            }, {
                color: "#fccde5",
                name: "Woodbridge",
                capacity: {
                    "2022": schools["Woodbridge"]
                },
                id: "hi13"
            }

        ];

        _colorScheme.push(..._colorScheme.map(hex => changeColorLuminance(hex, -0.3)));

        /**
         * District color scheme.
         */
        colorScheme = _colorScheme;

        /**
         * Darker colors for when the user hovers over assigned units.
         */
        const hoverColorScheme = colorScheme.map(hex =>
                changeColorLuminance(hex, -0.3));

        /**
         * Global district color scheme, with both the normal hex and the hoverHex
         * variations included.
         */
        districtColors = colorScheme.map((hex, i) => ({
            id: i,
            name: hex,
            hex: hex,
            hoverHex: hoverColorScheme[i]
        }));
    });
})
.catch(err => {
    // handle any errors
    console.error(err);
});

/**
 * Adjusts the color luminance. Use it for shading colors.
 *
 * I got this from stack overflow to find shaded versions of the
 * ColorBrewer colors.
 *
 * @param {string} hex
 * @param {number} lum
 */
export function changeColorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    let rgb = "#",
    c,
    i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }

    return rgb;
}

// Right now I'm assuming colors are numbered, and that -1 or null means
// a block hasn't been colored. I don't think this is a good system.

export function getUnitColorProperty(parts) {
    const unitColorStyle = [
        "match",
        ["feature-state", "color"],
        ...parts
        .map(part => [part.id, part.color.color])
        .reduce((list, pair) => [...list, ...pair]),
        "rgba(0, 0, 0, 0)"
    ];

    const hoveredUnitColorStyle = [
        "match",
        ["feature-state", "color"],
        ...parts
        .map(part => [part.id, part.hoverColor])
        .reduce((list, pair) => [...list, ...pair]),
        "#aaaaaa"
    ];

    const standardColor = [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        hoveredUnitColorStyle,
        unitColorStyle
    ];

    const blendWithHoverOption = [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        ["feature-state", "blendHoverColor"],
        ["feature-state", "blendColor"]
    ];

    const unitColorProperty = [
        "case",
        ["==", ["feature-state", "useBlendColor"], true],
        blendWithHoverOption,
        standardColor,
    ];

    return unitColorProperty;
}

export function blendColors(colors) {
    if (!colors || !Array.isArray(colors)) {
        return colors;
    }
    colors = colors.filter(c => c !== null);
    if (!colors.length) {
        return null;
    } else if (colors.length <= 1) {
        return colors[0] * 1;
    } else {
        let r = 0,
        g = 0,
        b = 0;
        colors.forEach((color) => {
            if (typeof color === 'number') {
                color = districtColors[color].hex;
            }

            r += parseInt("0x" + color.substring(1, 3));
            g += parseInt("0x" + color.substring(3, 5));
            b += parseInt("0x" + color.substring(5));
        });
        r = Math.round(r / colors.length).toString(16);
        g = Math.round(g / colors.length).toString(16);
        b = Math.round(b / colors.length).toString(16);
        if (r.length === 1) {
            r = '0' + r;
        }
        if (g.length === 1) {
            g = '0' + g;
        }
        if (b.length === 1) {
            b = '0' + b;
        }
        return '#' + [r, g, b].join('');
    }
}

/**
 * Mapbox color rule for the units layer.
 */

export const unitBordersPaintProperty = {
    "line-color": "#777777",
    "line-width": ["interpolate", ["linear"], ["zoom"], 0, 0, 7, 1],
    "line-opacity": 0.3
};

export const highlightUnassignedUnitBordersPaintProperty = {
    ...unitBordersPaintProperty,
    "line-color": [
        "case",
        ["==", ["feature-state", "color"], null],
        "#ff4f49",
        unitBordersPaintProperty["line-color"]
    ],
    "line-width": ["case", ["==", ["feature-state", "color"], null], 4, 1],
    "line-opacity": ["case", ["==", ["feature-state", "color"], null], 0.8, 0.3]
};
