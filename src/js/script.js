// Menu hamburger
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');
    
    // Ouvrir le menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Fermer le menu
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Fermer le menu en cliquant en dehors
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                menuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});
