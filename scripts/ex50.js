let n1 = document.getElementById('num1');
let n2 = document.getElementById('num2');
        
        let btn = document.getElementById('btn');
        let resultado = document.getElementById('demo');
       


        btn.addEventListener("click",(e)=>{
           e.preventDefault();
    
           let valor1 = parseFloat(n1.value);
           let valor2 = parseFloat(n2.value);
           
           
          
           if(valor1 > valor2){
               resultado.innerHTML = `Valor 1 maior`
               
            }else if(valor1 === valor2){
                resultado.innerHTML = `Iguais`
                
            }else{
                resultado.innerHTML = `2 menor`
                
           }


        }
        )