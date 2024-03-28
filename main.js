
let ground = document.querySelector('.all');
let tugma1 = document.querySelector('.btn1');
let tugma2 = document.querySelector('.btn2');
let rasm1  = document.querySelector('.image1');
let rasm2  = document.querySelector('.image2');
let h1   = document.querySelector('.h1');
let p   = document.querySelector('.p');


tugma2.addEventListener('click', () => {
    rasm1.classList.add('imagehidden');
    rasm2.classList.remove('imagehidden')
    ground.classList.add('ground');
    h1.classList.add('aqua');
    p.classList.add('aqua');
    p.textContent = 'Rainy day';
    tugma2.classList.add('lines');
    tugma1.classList.remove('lines')
});

tugma1.addEventListener('click', () => {
    rasm2.classList.add('imagehidden');
    rasm1.classList.remove('imagehidden')
    ground.classList.remove('ground');
    h1.classList.remove('aqua');
    p.classList.remove('aqua');
    p.textContent = 'Sunny day';
    tugma1.classList.add('lines');
    tugma2.classList.remove('lines')
});


