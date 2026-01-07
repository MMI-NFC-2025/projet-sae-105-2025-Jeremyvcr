// Menu Hamburger
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments
    const menuToggle = document.querySelector('.header__menu-toggle');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu__close');
    
    // Ouvrir le menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.add('menu--active');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
    }
    
    // Fermer le menu
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            menu.classList.remove('menu--active');
            document.body.style.overflow = ''; // Restaurer le scroll
        });
    }
    
    // Fermer le menu en cliquant sur un lien
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('menu--active');
            document.body.style.overflow = '';
        });
    });
});
