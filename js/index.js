const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.main-menu');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    mainMenu.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
    });

    document.querySelectorAll('.nav').forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    logo.classList.remove('active');
    overlay.classList.remove('active');

});
});