document.addEventListener('DOMContentLoaded', () => {

    const button = document.createElement('button');
    button.textContent = "Conóce más sobre nuestros servicios";
    button.classList.add('service-info-btn'); 
    document.querySelector('.container').appendChild(button);


    button.addEventListener('click', () => {
        const mensaje = `En Seventh Day Health ofrecemos los siguientes servicios:
        - Ansiedad
        - Comer sano
        - Cuidados críticos en adultos mayores
        - Depresión
        - Infección urinaria
        - Osteoporosis
        - Neumonía
        - Trastorno de sueño
        Haz clic en "Aceptar" para ver más detalles sobre cada servicio.`;

        if (confirm(mensaje)) {
            window.location.href = "../HTML/servicios.html";
        }
    });
});
