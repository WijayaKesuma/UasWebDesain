const navbar = document.getElementById("nav-bar");
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu-hamburger');

// Scroll Navbar Background Change
function scrollChangeNavbar(scrollPosition) {
    if (scrollPosition > 60) {
        navbar.style.background = "#000000";
    } else {
        navbar.style.background = "transparent";
    }
}

window.addEventListener('scroll', () => {
    scrollChangeNavbar(window.scrollY);
});

// Menu Responsive
function openMenu() {
    openBtn.style.display = "none";
    menu.style.right = "0";
}

function closeMenu() {
    menu.style.right = "-500px"
    openBtn.style.display = "block"
}