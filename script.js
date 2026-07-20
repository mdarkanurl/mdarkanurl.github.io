const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const navLinks = document.querySelector('.nav-links');

function openMenu() {
    navLinks.classList.add('nav-links--open');
    btnOpen.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
}

function closeMenu() {
    navLinks.classList.remove('nav-links--open');
    btnOpen.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
}

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);

// Close when clicking a nav link (useful on mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});
