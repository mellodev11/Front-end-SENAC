let input = document.getElementById('name');

let btn = document.getElementById('btn')

btn.addEventListener("click", ()=>{
// e.preventDefault();

let nomeDig = input.value;
    if(nomeDig === ""){
    
    alert('nada digitado');
    
    }else{

        alert(`Olá ${nomeDig}`);
    }


});