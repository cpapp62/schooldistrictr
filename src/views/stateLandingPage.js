import { html, render, directive } from "lit-html";
import { listPlacesForState, getUnits, getAllUnits } from "../components/PlacesList";
import { startNewPlan } from "../routes";
import { until } from "lit-html/directives/until";


export default () => {
    var curState = document.head.id;
	console.log(curState);
    const onlyElemMode = curState === "VRA - Dashboard";
    // document.title = curState.concat(" | Districtr");
    //comment to trigger a build, remove if you see this
    fetch("/assets/data/landing_pages.json?v=2")
        .then(response => response.json()).then(data => {
            var stateData = data.filter(st => st.state === curState)[0];
			console.log(stateData.modules[0]);
            document.title = curState.concat(" | Districtr");
            var def = stateData.modules.filter(m => m.default)[0];

            // navi-bar
            render(navLinks(stateData.sections, stateData.modules.map(m => m.ids)),
                   document.getElementById("nav-links"));



            const vraFutures = onlyElemMode ? stateData.states.map(st => listPlacesForState(st, true)) : null
            const statePlaces = onlyElemMode ? Promise.all(vraFutures) : listPlacesForState(stateData.state, true);


            statePlaces.then(ps => {
                let places = onlyElemMode ? ps.flat(1) : ps;
                let districtingPlaces = places.filter(p => !p.limit && p.units.some(u => !u.limit));
                let onlyHighMode = districtingPlaces.length == 0;
				let onlyMiddleMode = districtingPlaces.length == 0;
                // render page
				console.log("test 1");
                render(drawPage(stateData, onlyHighMode, onlyElemMode), document.getElementsByClassName("place__content")[0]);

                // build a plan options
                if (!onlyMiddleMode && !onlyHighMode) {
                     const target = document.getElementById("elementary-options");
                     render(districtingOptions(districtingPlaces), target);
                }
				
                $(".places-list__item").hide();
                def.ids.map(id => $("." + id).show());
				console.log("test");
                onlyHighMode ? $(".high").show() : $(".high").hide();
				onlyMiddleMode ? $(".middle").show() : $(".middle").hide();
				$(".higcurr_1").hide();
				$(".higlast1_1").hide();
				$(".midcurr_1").hide();
				$(".midlast1_1").hide();
				

                // select default place
                var btn = document.getElementById(def.id);
                if (btn) {
                    btn.checked = true;
                }

                var selected = def;

                let toggleViz = id => {
                    $(".text-toggle").not(id).hide();
                    $(".nav").not(id).hide();;
                    $(id).show();
                }

                if (onlyElemMode) {
                    toggleViz($("." + def.id));
                    selected.ids.map(id => $("." + id).show());
                }

                // config toggle buttons
                $('input[name="place-selection"]:radio').click(function() {
                    var inputValue = $(this).attr("value");
                    var targetBox = $("." + inputValue);
					console.log(inputValue);
                    selected = stateData.modules.filter(m => m.id === inputValue)[0];

                    $(".places-list__item").hide();
                    if (onlyElemMode) {
                        toggleViz(targetBox);
                    }
                    selected.ids.map(id => $("." + id).show());

                    document.getElementById("custom").checked = false;
                });

                $('input[name="draw-selection"]:radio').click(function(){
                    var inputValue = $(this).attr("value");
                    var cls = $(this).attr("class");
                    var targetBox = $("." + inputValue);
					var optionsTargetBox = $("." + inputValue + "-options");
					console.log(inputValue);
                    if (selected.mode) {
                        btn.click();
                    }

                    var l = $('input[name="place-selection"]:radio').length;
                    var i;
                    for (i = 0; i < l; i++) {
                        $('input[name="place-selection"]:radio')[i].className = cls;
                    }
                    $(".elementary").hide();
                    $(".middle").hide();
					$(".high").hide();
					$(".elem").hide();
					$(".places-list__item").hide();
					$(".higcurr_1").hide();
					$(".higlast1_1").hide();
					$(".midcurr_1").hide();
					$(".midlast1_1").hide();
					$(".elemcurr_1").hide();
					$(".elempast1_1").hide();
					if(inputValue == "elementary"){
						$(".elemcurr_1").show();
						document.getElementById("elemcurr_1").checked = true;
						document.getElementById("elempast1_1").checked = false;
						$(".elempast1_1").show();
						$(".places-list__item--small").hide();
						$(".elemcurr_1").show();
					} else if(inputValue == "middle"){
						$(".midcurr_1").show();
						document.getElementById("midcurr_1").checked = true;
						document.getElementById("midlast1_1").checked = false;
						$(".midlast1_1").show();
						$(".places-list__item--small").hide();
						$(".midcurr_1").show();
					}else{
						$(".higcurr_1").show();
						document.getElementById("higcurr_1").checked = true;
						document.getElementById("higlast1_1").checked = false;
						$(".higlast1_1").show();
						$(".places-list__item--small").hide();
						$(".higcurr_1").show();
					}
					document.getElementById("place-elementary").style = "";
                    $(targetBox).show();
					$(optionsTargetBox).show();
                });

                if (window.location.search.includes("mode=coi")) {
                  $('input[value="communities"]').trigger('click');
                }

                $('input[name="custom-selection", id="elementary-options"]:checkbox').click(function(){
					console.log("elementary");
                    var target = document.getElementById("elementary-options");
                    $(".place-middle").hide();
					$(".place-high").hide();
					$(".place-elementary").show();
					$(".middle-options").hide();
					$(".high-options").hide();
					$(".elementary-options").show();
                    render(districtingOptions(districtingPlaces), target);
                    $('input[name="place-selection"]:checked').click();
                });
            });
            return stateData;
        });
};


const navLinks = (sections, placeIds) =>
    sections.map(section => section.nav ? html`
        <li class="nav">
            <a href="#${section.nav.replace(/\s+/g, '-').toLowerCase()}"
              class="nav-links__link nav-links__link--major">
                ${section.nav}
            </a>
        </li>`: html``

    ).concat([html`<li class="nav">
            <a href="/">
                <img
					style='padding-top:0rem; padding-bottom:0rem; height:100px;'                    
                    class="nav-links__link nav-links__link--major nav-links__link--img"
                    src="/assets/Virginia.png?v=2"
                    alt="Back to Map"
                  />
            </a>
        </li>
    `]);

const drawPage = (stateData, onlyCommunities, vra) => {
    return html`
	
		<br>
		<br>
		
        <h1 class="headline place__name"> ${stateData.state} </h1>

        ${onlyCommunities || vra ? html``
                          : html`<div class="place-options places-list">
                                     <input type="radio" value="elementary"  id="elementary" name="draw-selection" checked="checked" class="elem">
                                     <label for="elementary" class="mode-selection">Draw Elementary School Districts</label>
									 <input type="radio" value="middle"  id="middle" name="draw-selection" class="mid">
                                     <label for="middle" class="mode-selection">Draw Middle School Districts</label>
                                     <input type="radio" value="high"  id="high" name="draw-selection" class="hig">
                                     <label for="high" class="mode-selection">Draw High School Districts</label>
                                 </div>`}



        ${stateData.sections.map(s => drawSection(s, stateData, onlyCommunities))}

    `;
};

const drawTitles = (modules, st) =>
    modules.map(m => html`<h1 class="${m.id} headline place__name">
                            ${m.name === "Statewide" ? st : m.name}
                          </h1>`);

const drawSection = (section, stateData, onlyCommunities) => {
    var section_body =  html`<div id="${section.nav.replace(/\s+/g, '-').toLowerCase()}" class="jump"></div>
                             <h2>${section.name}</h2>`;
	console.log(section.type);
    if (section.type === "draw") {
       section_body = html`

            <div id="${section.nav.replace(/\s+/g, '-').toLowerCase()}" class="jump"></div>

            ${!onlyCommunities ? html`<h2 class="elementary">Draw Elementary School Boundaries from scratch</h2>` : html``}
			
			<h2 style="display:none;" class="middle">Draw Middle School Boundaries from scratch</h2>
			<h2 style="display:none;" class="high">Draw High School Boundaries from scratch</h2>

            ${stateData.modules.length > 1 ? html`<div id="place-elementary" class="place-options places-list locals elementary">
                ${stateData.modules.map(m => html`<input type="radio" value="${m.id}"
                                                     id="${m.id}" name="place-selection">
                                                  <label for="${m.id}" value="${m.id}" id="${m.id}_1" class="${m.id}">${m.name}</label>`)}
            </div>` : ""}
			

             ${stateData.modules.length > 1 ? html`<div id="place-elementary2" class="place-options places-list">
				${stateData.modules.map(m => html`<div id="elementary-options" class="${m.id}_2"></div>`)}
			 </div>` : ""}

            <div style="display:none;" id="middle-options" class="middle"></div>
			
			<div style="display:none;" id="high-options" class="high"></div>
			
            <p style="text-align: right;"><a href="#data">What are the building blocks?</a>
            </br><a href="#data">What are the data layers?</a></p>
        `;
    } else if (section.type === "plans") {
		console.log("plans");
        section_body = html`
            <div id="${section.nav.replace(/\s+/g, '-').toLowerCase()}" class="jump"></div>
            ${section.name ? html`<h2>${section.name}</h2>` : html``}
            ${section.no_header ?  html``: html ``}
            <p>${section.disc}</p>
            <div id="plans">${plansSection(section.plans, section.ref)}</div>
            
        `;
    } else if (section.type === "text") {
        section_body = html`
            <div id="${section.nav.replace(/\s+/g, '-').toLowerCase()}" class="jump"></div>
            <h2>${section.name}</h2>
            ${section.content_source ? until(fetch(section.content_source).then((r) => {
                                                                                if (r.status === 200) {
                                                                                    return r.text();
                                                                                } else if (userRequested) {
                                                                                    return "Section content could not be found at " + section.content_source;
                                                                                } else {
                                                                                    throw new Error(r.statusText);
                                                                                }}).then(content => $.parseHTML(content))) : ""}
            ${section.content ? $.parseHTML(section.content) : ""}
            ${section.subsections ? section.subsections.map(s => html`<h3>${s.name}</h3>
                                                                      ${s.content_source ? until(fetch(s.content_source).then((r) => {
                                                                                if (r.status === 200) {
                                                                                    return r.text();
                                                                                } else if (userRequested) {
                                                                                    return "Section content could not be found at " + s.content_source;
                                                                                } else {
                                                                                    throw new Error(r.statusText);
                                                                                }}).then(content => $.parseHTML(content))) : ""}
                                                                       ${s.content ? $.parseHTML(s.content) : ""}`) : ""}
        `;
    };

    var placeIds = stateData.modules.map(m => m.id);
    return html`
        <div class="text-toggle">
                ${section_body}
        </div>
    `
};

const plansSection = (plans, place) =>
    plans.map(
        ({ title, plans }) => html`
            <section class="place__section">
                <h3>${title}</h3>
                ${loadablePlans(plans, place)}
            </section>
        `
    );

const loadablePlans = (plans, place) =>
    html`
        <ul class="plan-thumbs">
            ${plans.map(p => loadablePlan(p, place))}
        </ul>
    `;

const numberList = numbers => html`
    <dl class="number-list">
        ${numbers.map(
            ({ number, caption }) => html`
                <div class="number-list__row">
                    <dt class="number-list__number">${number}</dt>
                    <dd class="number-list__caption">${caption}</dd>
                </div>
            `
        )}
    </dl>
`;

const loadablePlan = (plan, place) => html`
    <a href="/${place}/${plan.id}">
        <li class="plan-thumbs__thumb">
            <figcaption class="thumb__caption">
                <h6 class="thumb__heading">${plan.name || plan.id}</h6>
                ${plan.description ? plan.description : ""}
                ${plan.numbers ? numberList(plan.numbers) : ""}
            </figcaption>
        </li>
    </a>
`;

const districtingOptions = places =>
    html`
        <ul class="places-list places-list--columns">
              ${placeItemsTemplate(places, startNewPlan)}
        </ul>
    `;

const communityOptions = places =>
    html`
        <ul class="places-list places-list--columns">
            ${placeItemsTemplateCommunities(places, startNewPlan)}
        </ul>
    `;

const placeItemsTemplateCommunities = (places, onClick) =>
    places.sort((a, b) => (a.name < b.name) ? -1 : 1).map(place => {
        var problem = { type: "community", numberOfParts: 50, pluralNoun: "Community" };
        return getUnits(place, problem, true).filter(u => !u.hideOnDefault).map(
            units => html`
            <li class="$virginia places-list__item places-list__item--small"
                @click="${() => onClick(place, problem, units)}">
                <div class="place-name">${place.name}</div>
                ${problemTypeInfo[problem.type] || ""}
                <div class="place-info">
                    Built out of ${units.name}
                </div>
            </li>
            `)
    }).reduce((items, item) => [...items, ...item], []);

const problemTypeInfo = {
    multimember: html`
        <div class="place-info">
            Multi-member districts of varying sizes
        </div>
    `
};

const placeItemsTemplate = (places, onClick) => {
    const showAll = document.getElementById("custom") && document.getElementById("custom").checked;

    let num_hidden = places.map(place => place.elemProblems.filter(problem => problem.hideOnDefault)).reduce((items, item) => [...items, ...item], []).length ||
                        places.map(place => place.elemProblems.filter(problem => !problem.hideOnDefault)
                        .map(problem => getAllUnits(place, problem).filter(u => u.hideOnDefault)))
                        .reduce((items, item) => [...items, ...item], []) // have to flatten twice I guess
                        .reduce((items, item) => [...items, ...item], []).length;
	console.log(num_hidden);
    return places.sort((a, b) => (a.name < b.name) ? -1 : 1).map(place =>
        place.elemProblems
        .sort((a, b) => {
            // change so Reapportioned always comes first
            if (a.name === "2020 Reapportioned Congress" && b.name !== "2020 Reapportioned Congress") {
                return -1;
            }
            else if (b.name === "2020 Reapportioned Congress" && a.name !== "2020 Reapportioned Congress") {
                return 1;
            }
            else if (a.name === "Congress" && b.name !== "Congress") {
                return -1;
            } else if (b.name === "Congress" && a.name !== "Congress") {
                return 1;
            }
            return a.numberOfParts - b.numberOfParts;
        })
        .filter(problem => showAll || !problem.hideOnDefault)
        .map(problem =>
            getAllUnits(place, problem)
            .filter(unit => showAll || !unit.hideOnDefault)
            .map(
                units =>
                // this ternary can be removed if we don't want to deal with the new
                // district numbers separately
                problem.pluralNoun.includes("Reapportioned") ?
                html`
                <li
                class="${place.id} places-list__item places-list__item--small reapportioned ${(problem.hideOnDefault || units.hideOnDefault) && "old-card"}"
                @click="${() => onClick(place, problem, units)}"
                >
                    <div class="place-name">
                        ${place.name}
                    </div>
                    ${problemTypeInfo[problem.type] || ""}
                    <div class="place-info">
                        ${problem.numberOfParts} Congressional Districts
                    </div>
                    <div class="place-info">
                        Built out of ${units.unitType == 'VTDs' ? units.name : units.name.toLowerCase()}
                    </div>
                </li>
            `
                : html`
                    <li
                    class="${place.id} places-list__item places-list__item--small ${(problem.hideOnDefault || units.hideOnDefault) && "old-card"}"
                    @click="${() => onClick(place, problem, units)}"
                    >
                        <div class="place-name">
                            ${place.name}
                        </div>
                        ${problemTypeInfo[problem.type] || ""}
                        <div class="place-info">
                            ${problem.numberOfParts} ${problem.pluralNoun}
                        </div>
                        <div class="place-info">
                            Built out of ${units.unitType == 'VTDs' ? units.name : units.name.toLowerCase()}
                        </div>
                    </li>
                `
            )
        ))
        .reduce((items, item) => [...items, ...item], [])
        .concat([
            (!showAll && num_hidden) ? html`<li>
                <div style="padding-top:30px">
                    <input type="checkbox" id="custom" name="custom-selection">
                </div>
            </li>`
          : ""
        ]);
    };

const customPlaceItemsTemplate = (places, onClick) =>
    places.map(place =>
        place.elemProblems
        .map(problem =>
            getUnits(place, problem).map(
                units => html`
                    <li
                        class="${place.id} places-list__item places-list__item--small"
                        @click="${() => onClick(place, problem, units, "", document.getElementById(place.id+"_customNumber").value)}"
                    >
                        <div class="place-name">
                            ${place.name}
                        </div>
                        ${problemTypeInfo[problem.type] || ""}
                        <div class="place-info">
                            <input
                              type="number"
                              class="custom-input"
                              id="${place.id+"_customNumber"}"
                              @click="${e => e.stopPropagation()}"
                              value="${problem.numberOfParts}"
                              min="1" max="250"
                            >
                            ${problem.pluralNoun}
                        </div>
                        <div class="place-info">
                            Built out of ${units.name.toLowerCase()}
                        </div>
                    </li>
                `
            )
        ))
        .reduce((items, item) => [...items, ...item], []).concat([
            html`<li>
            <div style="padding-top:30px">
                <input type="checkbox" id="custom" name="custom-selection">
                <label for="custom">Customize</label>
            </div>
          </li>`
        ]);
