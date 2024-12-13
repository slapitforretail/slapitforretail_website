const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

function removeHash() {
    // Let the default behavior occur first (e.g., navigation or scrolling)
    setTimeout(() => {
        history.replaceState(null, null, window.location.pathname);
    }, 10);
}