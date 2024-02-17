import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

createHome();

let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    createHome();
});

menu.addEventListener('click', () => {
    createMenu();
});

contact.addEventListener('click', () => {
    createContact();
});