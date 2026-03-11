function showTemplate(id, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.querySelectorAll('.template').forEach(t => t.classList.remove('active'));
    document.getElementById('tpl-' + id).classList.add('active');
    btn.classList.add('active');
}