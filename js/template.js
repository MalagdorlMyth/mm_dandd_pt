class TemplateNav extends HTMLElement {
    connectedCallback() {
        fetch('components/template-nav.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
class TemplateCity extends HTMLElement {
    connectedCallback() {
        fetch('components/template-city.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
class TemplateCountry extends HTMLElement {
    connectedCallback() {
        fetch('components/template-country.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
class TemplateNPS extends HTMLElement {
    connectedCallback() {
        fetch('components/template-nps.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
class TemplatePlayer extends HTMLElement {
    connectedCallback() {
        fetch('components/template-player.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}

customElements.define('template-nav', TemplateNav);
customElements.define('template-city', TemplateCity);
customElements.define('template-country', TemplateCountry);
customElements.define('template-nps', TemplateNPS);
customElements.define('template-player', TemplatePlayer);