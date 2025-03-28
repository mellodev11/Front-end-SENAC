const form = document.getElementById('myForm');
const btn = document.getElementById('btn');
const demo = document.querySelector('#demo');


btn.addEventListener('click', (e) => {
    e.preventDefault();

   

    demo.style.fontSize = demo.style.fontSize ===  "70px" ?  "30px" : "70px" ;
       
       
    
});
