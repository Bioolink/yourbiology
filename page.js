const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function(){
    nav.classList.toggle('opas');
})

const mana = document.querySelector('.menu input');
const mene = document.querySelector('nav ul');

mana.addEventListener('click', function(){
    mene.classList.toggle('opas1');
})