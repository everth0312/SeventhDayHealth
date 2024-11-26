document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        if (usuario === '' || password === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Aquí podrías conectar con tu backend para autenticar
        console.log('Intentando iniciar sesión con:', { usuario, password });

        // Simulación de autenticación
        if (usuario === 'admin' && password === '123456') {
            alert('Inicio de sesión exitoso.');
            window.location.href = 'dashboard.html'; // Redirige a otra página
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });
});
