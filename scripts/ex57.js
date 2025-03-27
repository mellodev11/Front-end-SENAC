const form = document.getElementById('myForm');
const btn = document.getElementById('btn');
let demo = document.querySelector('#demo');


btn.addEventListener('click', (e) => {
    e.preventDefault();

   

    demo.style.color = (demo.style.color === 'red') ? 'blue' : 'red';
       
    
});
