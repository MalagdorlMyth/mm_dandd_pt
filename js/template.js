class TemplateNav extends HTMLElement {
    connectedCallback() {
        fetch('/components/template_nav.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
class TemplateCity extends HTMLElement {
    connectedCallback() {
        fetch('/components/template_city.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
class TemplateCountry extends HTMLElement {
    connectedCallback() {
        fetch('/components/template-country.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}

customElements.define('template-nav', TemplateNav);
customElements.define('template-city', TemplateCity);
customElements.define('template-country', TemplateCountry);