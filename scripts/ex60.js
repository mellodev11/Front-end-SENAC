const form = document.getElementById('myForm');
const btn = document.getElementById('btn');
let body = document.querySelector('body');


btn.addEventListener('click', (e) => {
    e.preventDefault();

        

        btn.innerText = btn.innerText === "Modo Dark"? "Modo Light" : "Modo Dark";
        
        body.style.backgroundColor = (body.style.backgroundColor === 'black') ? 'white' : 'black';
        
    
});
