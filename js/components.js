class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch('/components/header.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch('/components/footer.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);