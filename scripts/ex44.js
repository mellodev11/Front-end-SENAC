let n1 = document.getElementById('num1');
        let n2 = document.getElementById('num2');
        let btn = document.getElementById('btn');
        let resultado = document.getElementById('demo');
       


        btn.addEventListener("click",(e)=>{
           e.preventDefault();
    
           let valor = parseFloat(n1.value);
           let valor2 = parseFloat(n2.value);
          
           let som = valor - valor2 

           resultado.innerHTML = `A Subtração de ${valor} - ${valor2}  o resultado é : ${som}`;

        }
        )