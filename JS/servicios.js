
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`Si estás interesado en ${card.querySelector('h3').textContent}. Debes inicia sesión y si no estas registrado, registrarte, para poder agendar servicios.`);
        });
    });
});
