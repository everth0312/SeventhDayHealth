document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');

    formulario.addEventListener('submit', (e) => { 
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const correo = document.getElementById('correo');
        const mensaje = document.getElementById('mensaje');
        
        let hayError = false;


        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'Error: El nombre es obligatorio');
            hayError = true;
        } else {
            ocultarError(nombre);
        }

        if (correo.value.trim() === '' || !validarEmail(correo.value)) {
            mostrarError(correo, 'Error: El correo es obligatorio y debe ser válido');
            hayError = true;
        } else {
            ocultarError(correo);
        }

        if (mensaje.value.trim() === '') {
            mostrarError(mensaje, 'Error: El mensaje es obligatorio');
            hayError = true;
        } else {
            ocultarError(mensaje);
        }


        if (!hayError) {
            const mensajeExito = document.getElementById('mensajeExito');
            mensajeExito.style.visibility = 'visible'; 
            setTimeout(() => {
                mensajeExito.style.visibility = 'hidden'; 
            }, 3000);
            formulario.reset();
        }
    });

    
    function mostrarError(input, mensaje) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = mensaje;
        small.style.visibility = 'visible';
        input.style.borderColor = 'red';
    }

    function ocultarError(input) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.style.visibility = 'hidden';
        input.style.borderColor = '#ccc';
    }


    function validarEmail(correo) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }
});
