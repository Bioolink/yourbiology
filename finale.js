const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function(){
    nav.classList.toggle('opas')
})

const bulat = document.querySelector('.bulat');
const dark = document.body;
bulat.addEventListener('click', function(){
    bulat.classList.toggle('move')
    dark.classList.toggle('dark')
})

// mini gallery

const container = document.querySelector('.container1');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e){

    if(e.target.className == 'thum'){

        jumbo.src = e.target.src;

    }



})


// flipcard

const flip = document.querySelectorAll('.card2 .inner')

    for(let i = 0; i < flip.length; i++){

        flip[i].addEventListener('click', function(){
        flip[i].classList.toggle('flip');

    })
      
}


// random Color

const randomcolor = document.querySelector('.page1 button');

randomcolor.addEventListener('click', function(){

    const r = Math.round(Math.random() * 255 + 0);
    const g = Math.round(Math.random() * 255 + 0);
    const b = Math.round(Math.random() * 255 + 0);
    console.log(r);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

})