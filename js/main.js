// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = mainNav.contains(event.target) || menuToggle.contains(event.target);
            
            if (!isClickInside && mainNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    // Authentication Check (for non-login pages)
    if (!window.location.pathname.endsWith('index.html')) {
        if (!localStorage.getItem('arvindFestAuth')) {
            const redirectPath = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
            window.location.href = redirectPath;
        }
    }
});