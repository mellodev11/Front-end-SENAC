let n1 = document.getElementById('num1');
        
        let btn = document.getElementById('btn');
        let resultado = document.getElementById('demo');
       


        btn.addEventListener("click",(e)=>{
           e.preventDefault();
    
           let valor = parseFloat(n1.value);
           
          
           if(valor === 0){
               resultado.innerHTML = `Número é 0`
               
            }else if(valor >0 ){
                resultado.innerHTML = `Número é positivo`
                
            }else{
                resultado.innerHTML = `Número negativo`
                
           }


        }
        )