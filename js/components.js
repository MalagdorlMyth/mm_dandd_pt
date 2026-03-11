class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch('components/header.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
        console.log('2??');
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch('components/footer.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
        console.log('3??');
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);