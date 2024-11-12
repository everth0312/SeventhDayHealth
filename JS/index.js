document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.querySelector('.titulo');
    titulo.addEventListener('click', () => {
        alert('Bienvenido a Visión Empresarial');
        window.location.href = '../HTML/nosotros.html';
    });

});
