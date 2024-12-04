document.addEventListener('DOMContentLoaded', () => {

    const button = document.createElement('button');
    button.textContent = "Conóce más sobre nuestros servicios";
    button.classList.add('service-info-btn'); 
    document.querySelector('.presentacion').appendChild(button);
    
    const titulo = document.querySelector('.titulo');
    titulo.addEventListener('click', () => {
        alert('Bienvenido a Visión Empresarial');
        window.location.href = '../HTML/nosotros.html';
    });

    const btnLogin = document.getElementById('btnLogin');

    btnLogin.addEventListener('click', () => {
        window.location.href = 'login.html'; // Redirige a la página login.html
    });

});
