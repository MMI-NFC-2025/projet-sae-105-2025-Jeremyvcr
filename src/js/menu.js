// Menu Hamburger
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');
    
    // Ouvrir le menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
    }
    
    // Fermer le menu
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restaurer le scroll
        });
    }
    
    // Fermer le menu en cliquant sur un lien
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
