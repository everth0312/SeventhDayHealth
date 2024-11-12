document.addEventListener('DOMContentLoaded', () => {

    const button = document.createElement('button');
    button.textContent = "Conóce más sobre nuestros servicios";
    button.classList.add('service-info-btn'); 
    document.querySelector('.presentacion').appendChild(button);


    button.addEventListener('click', () => {
        const mensaje = `En Visión Empresarial ofrecemos los siguientes servicios:
        - Asesoría administrativa
        - Asesoría financiera
        - Asesoría contable
        - Constitución de empresas
        - Asesoría en seguridad social
        - Asesoría en impuestos
        Haz clic en "Aceptar" para ver más detalles sobre cada servicio.`;

        if (confirm(mensaje)) {
            window.location.href = "../HTML/servicios.html";
        }
    });
});
