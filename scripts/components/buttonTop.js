const template = document.createElement("template");
template.innerHTML = `
<style>
@import url(/style/style.css)
</style>
<div class="retorno">
<a href="/" name="topo"><button class="dracula btn">
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

// class DefaultHead extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//     <meta charset="UTF-8">
//     <meta name="description" content="Atividades de PPW1 do curso de SI do IF Goiano de Urutaí.">
//     <meta name="keywords" content="web,html,css,javascript,www,webdev,framework,manual,ensino">
//     <link rel="stylesheet" href="/style/style.css">
//     <link rel="icon" href="/Untitled.ico" type="image/x-icon"></link> 
//         `
//     }
//} 
// }