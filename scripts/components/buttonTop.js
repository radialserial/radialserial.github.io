const template = document.createElement("template");
template.innerHTML = `
<style>
@import url(/style/style.css)
</style>
<div class="retorno">
<a href="/pages/menu/" name="topo"><button class="dracula btn">
<slot name="content"></slot>
</button></a>
</div>
`;

export class ButtonTop extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}