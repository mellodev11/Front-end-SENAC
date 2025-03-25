let n1 = document.getElementById('num1');
        
        let btn = document.getElementById('btn');
        let resultado = document.getElementById('demo');
        


        btn.addEventListener("click",(e)=>{
           e.preventDefault();
    
           let valor = parseFloat(n1.value);
           
          
           if(valor < 4.99 ){
               resultado.innerHTML = `Reprovado`
               
            }else if(valor < 7 ){
                resultado.innerHTML = `Recuperação`
                
            }else if(valor>10){
                resultado.innerHTML = `Valor invalido`
                
            }else{
               resultado.innerHTML = `Aprovado`

           }
        

        }
        )