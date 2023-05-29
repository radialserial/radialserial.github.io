
const template = document.createElement("template");
template.innerHTML = `
<style>
@import url(/style/style.css)
</style>
<a href="/pages/manual/"> <button class="dracula btn btn-indice"> Manual </button> </a>
<a href="/pages/form/"> <button class="dracula btn btn-indice"> Formulário </button> </a>
<a href="/pages/gasolina/"> <button class="dracula btn btn-indice"> Gasolina </button> </a>
<a href="/pages/placar/"> <button class="dracula btn btn-indice"> Placar </button> </a>
`;

export class ItemsMenu extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}