import { directive } from "lit-html";

/**
 * Creates an HTML entity which provides some supplementary information about
 * the dataset being used to balance population.
 * @param {State} state A State object.
 * @returns {String} The description for the dataset used.
 */
function datasetInfo(state) {
    // Dictionary of descriptions.
    let population = state.population,
        place = state.place,
        populations = {
            year2022: "Uses <strong>2022 Prince William County</strong> data"
        },
        acsLocations = [
            "wisco2019acs", "hall_ga", "grand_county_2", "mn2020acs", "nd_benson",
            "nd_dunn", "nd_mckenzie", "nd_mountrail", "nd_ramsey", "nd_rollette",
            "nd_sioux", "contracosta"
        ],
        units = state.unitsRecord.name,
        dataset = "";


    if (acsLocations.includes(place.id.toLowerCase()) || state.units.id.includes("2019") || population.name !== "Population") {
        dataset = `<p><span>&#9432;</span> ${populations.acs}`;
    } else {
        dataset = `<p><span>&#9432;</span> ${populations.year2022}`;
    }

    return dataset + ` on <strong>${units}</strong>.</p>`;
}

/**
 * Wrapper function which returns an immediately-callable directive which
 * populates the dataset-info sections in a nice way.
 * @param {State} state State object.
 * @returns {function(*): void}
 */
export default function populateDatasetInfo(state) {
    return directive(promise => () => {
        Promise.resolve(promise).then(() => {
            // Retrieve the proper HTML elements.
            let elements = document.getElementsByClassName("dataset-info"),
                infoBoxes = Array.from(elements);

            // For each of the info boxes, retrieve and add the correct
            // description.
            infoBoxes.forEach(box => {
                box.innerHTML = datasetInfo(state);
            });
        });
    })();
}
