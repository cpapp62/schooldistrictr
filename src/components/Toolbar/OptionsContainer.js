import {
    html
}
from "lit-html";

export default function OptionsContainer(activeTool) {
    return html `
    <section
        class="tool-options ${activeTool.options !== undefined ? "active" : ""}"
    >
        ${activeTool.options !== undefined ? activeTool.options.render() : ""}
    </section>
	`;
}
