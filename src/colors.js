/**
 * Global Districtr color map for districts.
 *
 * We might consider using fewer colors and just allowing repetitions,
 * since a human being can only hold so many colors in their head at
 * one time.
 */
let _colorScheme = [
	{color: "#0099cd", name: "Alvey", capacity: 807, id: "el1"},
	{color: "#ffca5d", name: "Antietam", capacity: 807, id: "el2"},
	{color: "#00cd99", name: "Ashland", capacity: 807, id: "el3"},
	{color: "#99cd00", name: "Bel Air", capacity: 807, id: "el4"},
	{color: "#cd0099", name: "Belmont", capacity: 807, id: "el5"},
	{color: "#9900cd", name: "Bennett", capacity: 807, id: "el6"},
	{color: "#8dd3c7", name: "Bristow Run", capacity: 807, id: "el7"},
	{color: "#bebada", name: "Buckland Mills", capacity: 807, id: "el8"},
	{color: "#fb8072", name: "Cedar Point", capacity: 807, id: "el9"},
	{color: "#80b1d3", name: "Coles", capacity: 807, id: "el10"},
	{color: "#fdb462", name: "Covington-Harper", capacity: 807, id: "el11"},
	{color: "#b3de69", name: "Dale City", capacity: 807, id: "el12"},
	{color: "#fccde5", name: "Dumfries", capacity: 807, id: "el13"},
	{color: "#d9d9d9", name: "Ellis", capacity: 807, id: "el14"},
	{color: "#bc80bd", name: "Enterprise", capacity: 807, id: "el15"},
	{color: "#ccebc5", name: "Featherstone", capacity: 807, id: "el16"},
	{color: "#ffed6f", name: "Fitzgerald", capacity: 807, id: "el17"},
	{color: "#ffffb3", name: "Glenkirk", capacity: 807, id: "el18"},
	{color: "#a6cee3", name: "Gravely", capacity: 807, id: "el19"},
	{color: "#1f78b4", name: "Haymarket", capacity: 807, id: "el20"},
	{color: "#b2df8a", name: "Henderson", capacity: 807, id: "el21"},
	{color: "#33a02c", name: "Jenkins", capacity: 807, id: "el22"},
	{color: "#fb9a99", name: "Kerrydale", capacity: 807, id: "el23"},
	{color: "#e31a1c", name: "Kilby", capacity: 807, id: "el24"},
	{color: "#fdbf6f", name: "King", capacity: 807, id: "el25"},
	{color: "#ff7f00", name: "Lake Ridge", capacity: 807, id: "el26"},
	{color: "#cab2d6", name: "Leesylvania", capacity: 807, id: "el27"},
	{color: "#6a3d9a", name: "Loch Lomond", capacity: 807, id: "el28"},
	{color: "#b15928", name: "Marshall", capacity: 807, id: "el29"},
	{color: "#64ffda", name: "Marumsco Hills", capacity: 807, id: "el30"},
	{color: "#00B8D4", name: "McAuliffe", capacity: 807, id: "el31"},
	{color: "#A1887F", name: "Minnieville", capacity: 807, id: "el32"},
	{color: "#76FF03", name: "Montclair", capacity: 807, id: "el33"},
	{color: "#DCE775", name: "Mountain View", capacity: 807, id: "el34"},
	{color: "#B388FF", name: "Mullen", capacity: 807, id: "el35"},
	{color: "#FF80AB", name: "Neabsco", capacity: 807, id: "el36"},
	{color: "#D81B60", name: "Nokesville School, The", capacity: 807, id: "el37"},
	{color: "#26A69A", name: "Occoquan", capacity: 807, id: "el38"},
	{color: "#FFEA00", name: "Old Bridge", capacity: 807, id: "el39"},
	{color: "#ffff99", name: "Rosa Parks", capacity: 807, id: "el40"},
	{color: "#6200EA", name: "Pattie", capacity: 807, id: "el41"},
	{color: "#62EA00", name: "Penn", capacity: 807, id: "el42"},
	{color: "#EA6200", name: "Piney Branch", capacity: 807, id: "el43"},
	{color: "#EA0062", name: "Potomac View", capacity: 807, id: "el44"},
	{color: "#88B3FF", name: "River Oaks", capacity: 807, id: "el45"},
	{color: "#FF88B3", name: "Rockledge", capacity: 807, id: "el46"},
	{color: "#99ffff", name: "Signal Hill", capacity: 807, id: "el47"},
	{color: "#ff99ff", name: "Sinclair", capacity: 807, id: "el48"},
	{color: "#123456", name: "Springwoods", capacity: 807, id: "el49"},
	{color: "#abcdef", name: "Sudley", capacity: 807, id: "el50"},
	{color: "#123abc", name: "Swans Creek", capacity: 807, id: "el51"},
	{color: "#abc123", name: "Triangle", capacity: 807, id: "el52"},
	{color: "#B800D4", name: "Tyler", capacity: 807, id: "el53"},
	{color: "#D4B800", name: "Vaughan", capacity: 807, id: "el54"},
	{color: "#D400B8", name: "Victory", capacity: 807, id: "el55"},
	{color: "#887F1A", name: "West Gate", capacity: 807, id: "el56"},
	{color: "#a1ce31", name: "Westridge", capacity: 807, id: "el57"},
	{color: "#0f0f0f", name: "Mary Williams", capacity: 807, id: "el58"},
	{color: "#f0f0f0", name: "Kyle Wilson", capacity: 807, id: "el59"},
	{color: "#987654", name: "T. Clay Wood", capacity: 807, id: "el60"},
	{color: "#456789", name: "Yorkshire", capacity: 807, id: "el61"},
	{color: "#cd1a2b", name: "Chris Yung", capacity: 807, id: "el62"},
	{color: "#f8c5a2", name: "Rosemount Lewis", capacity: 807, id: "el63"},
	{color: "#0099cd", name: "Benton", capacity: 807, id: "mi1"}, 
    {color: "#ffca5d", name: "Beville", capacity: 807, id: "mi2"}, 
    {color: "#00cd99", name: "Bull Run", capacity: 807, id: "mi3"}, 
    {color: "#99cd00", name: "Gainesville", capacity: 807, id: "mi4"}, 
    {color: "#cd0099", name: "Graham Park", capacity: 807, id: "mi5"}, 
    {color: "#9900cd", name: "Hampton", capacity: 807, id: "mi6"}, 
    {color: "#8dd3c7", name: "Lake Ridge", capacity: 807, id: "mi7"}, 
    {color: "#bebada", name: "Lynn", capacity: 807, id: "mi8"}, 
    {color: "#fb8072", name: "Marsteller", capacity: 807, id: "mi9"}, 
    {color: "#80b1d3", name: "The Nokesville School", capacity: 807, id: "mi10"}, 
    {color: "#fdb462", name: "Parkside", capacity: 807, id: "mi11"}, 
    {color: "#b3de69", name: "Potomac", capacity: 807, id: "mi12"}, 
    {color: "#fccde5", name: "Potomac Shores", capacity: 807, id: "mi13"}, 
    {color: "#d9d9d9", name: "Reagan", capacity: 807, id: "mi14"}, 
    {color: "#bc80bd", name: "Rippon", capacity: 807, id: "mi15"}, 
    {color: "#ccebc5", name: "Saunders", capacity: 807, id: "mi16"}, 
    {color: "#ffed6f", name: "Unity Braxton", capacity: 807, id: "mi17"}, 
    {color: "#ffffb3", name: "Woodbridge", capacity: 807, id: "mi18"}, 
    {color: "#0099cd", name: "Battlefield", capacity: 807, id: "hi1"}, 
    {color: "#ffca5d", name: "Brentsville", capacity: 807, id: "hi2"}, 
    {color: "#00cd99", name: "Colgan", capacity: 807, id: "hi3"}, 
    {color: "#99cd00", name: "Forest Park", capacity: 807, id: "hi4"}, 
    {color: "#cd0099", name: "Freedom", capacity: 807, id: "hi5"}, 
    {color: "#9900cd", name: "Gainesville", capacity: 807, id: "hi6"}, 
    {color: "#8dd3c7", name: "Gar-Field", capacity: 807, id: "hi7"}, 
    {color: "#bebada", name: "Hylton", capacity: 807, id: "hi8"}, 
    {color: "#fb8072", name: "Osbourn Park", capacity: 807, id: "hi9"}, 
    {color: "#80b1d3", name: "Patriot", capacity: 807, id: "hi10"}, 
    {color: "#fdb462", name: "Potomac", capacity: 807, id: "hi11"}, 
    {color: "#b3de69", name: "Unity Reed", capacity: 807, id: "hi12"}, 
    {color: "#fccde5", name: "Woodbridge", capacity: 807, id: "hi13"}
    
];

_colorScheme.push(..._colorScheme.map(hex => changeColorLuminance(hex, -0.3)));

/**
 * District color scheme.
 */
export const colorScheme = _colorScheme;

/**
 * Darker colors for when the user hovers over assigned units.
 */
const hoverColorScheme = colorScheme.map(hex =>
    changeColorLuminance(hex, -0.3)
);

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

/**
 * Global district color scheme, with both the normal hex and the hoverHex
 * variations included.
 */
export const districtColors = colorScheme.map((hex, i) => ({
    id: i,
    name: hex,
    hex: hex,
    hoverHex: hoverColorScheme[i]
}));

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

export function blendColors (colors) {
    if (!colors || !Array.isArray(colors)) {
        return colors;
    }
    colors = colors.filter(c => c !== null);
    if (!colors.length) {
        return null;
    } else if (colors.length <= 1) {
        return colors[0] * 1;
    } else {
        let r = 0, g = 0, b = 0;
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
        if (r.length === 1) { r = '0' + r; }
        if (g.length === 1) { g = '0' + g; }
        if (b.length === 1) { b = '0' + b; }
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
