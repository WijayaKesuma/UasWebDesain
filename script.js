const navbar = document.getElementById("nav-bar");

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