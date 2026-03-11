class PageTemplates extends HTMLElement {
    async connectedCallback() {
        try {
            const response = await fetch('/pages/templates.html');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const html = await response.text();
            if (this.isConnected) {
                this.innerHTML = html;
            }
        } catch (err) {
            console.error('Помилка завантаження шаблону:', err);
            if (this.isConnected) {
                this.innerHTML = '<p>Помилка завантаження</p>';
            }
        }
    }
}

customElements.define('page-templates', PageTemplates);