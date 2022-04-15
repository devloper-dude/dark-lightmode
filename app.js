let head = document.querySelector('.head');
const body = document.querySelector('.body');
const btn = document.querySelector('.button');
const sun = document.querySelector('.fa-sun');
const circle = document.querySelector('.circle');

btn.addEventListener('click',()=>{
  circle.classList.toggle('active');
  body.classList.toggle('active');
  btn.classList.toggle('active');
})

document.querySelector('.subbtn').addEventListener('click', () => {
    subbtn.classList.toggle('stop');
})
