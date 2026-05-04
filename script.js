const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        btnTop.classList.add('visible');
        document.querySelector('.cabecera_contenedor').classList.add('scrolled');
    } else {
        btnTop.classList.remove('visible');
        document.querySelector('.cabecera_contenedor').classList.remove('scrolled');
    }
});