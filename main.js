const h1 = document.getElementById('h1');
const btnFR = document.getElementById('btnFR');
const btnEN = document.getElementById('btnEN');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const pHome = document.getElementById('p');
const Home = document.getElementById('home');
const og = document.getElementById('');
const team = document.getElementById('');
const contacts = document.getElementById('');
const projects = document.getElementById('');

// Menu burger
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Changement de langue
btnFR.addEventListener('click', () => {
    h1.textContent = "Bienvenue sur Nova Interactive";
});

btnEN.addEventListener('click', () => {
    h1.textContent = "Welcome to Nova Interactive";
});
btnFR.addEventListener('click', () => {
    p.textContent = "Nova Interactive est un studio de jeux-vidéos indépendant"
})
btnEN.addEventListener('click', () => {
    p.textContent = "Nova Interactive is an independent video game studio";
});