document.addEventListener('DOMContentLoaded', () => {

    const button = document.createElement('button');
    button.textContent = "Conóce más sobre nuestros servicios";
    button.classList.add('service-info-btn'); 
    document.querySelector('.presentacion').appendChild(button);


    button.addEventListener('click', () => {
        const mensaje = `En Seventh Day Health ofrecemos los siguientes servicios:
        - Revisión médica general
        - Odontología
        - Medicina interna
        - Psicología
        - Nutrición
        - Charlas de interés
        Haz clic en "Aceptar" para ver más detalles sobre cada servicio.`;

        if (confirm(mensaje)) {
            window.location.href = "../HTML/servicios.html";
        }
    });
});
