const form = document.getElementById('myForm');
const btn = document.getElementById('btn');
let body = document.querySelector('body');


btn.addEventListener('click', (e) => {
    e.preventDefault();

   

        body.style.backgroundColor = (body.style.backgroundColor === 'black') ? 'blue' : 'black';
        i++;
    
});
