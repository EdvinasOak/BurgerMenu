class AppNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.querySelector('template');
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('app-navbar', AppNavbar);
