
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`Estás interesado en ${card.querySelector('h3').textContent}. Contáctanos para más información.`);
            window.location.href = '../HTML/contactenos.html'
        });
    });
});
