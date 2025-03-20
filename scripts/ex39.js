let input = document.getElementById('name');

let btn = document.getElementById('btn')

btn.addEventListener("click", ()=>{


let nomeDig = input.value;
    if(nomeDig === ""){
    
    alert('nada digitado');
    
    }else{

        alert(`Olá ${nomeDig}`);
    }


});