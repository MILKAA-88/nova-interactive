// Sélection des éléments du DOM
const h1 = document.getElementById('h1');
const btnFR = document.getElementById('btnFR');
const btnEN = document.getElementById('btnEN');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Menu burger
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

