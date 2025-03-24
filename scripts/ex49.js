let n1 = document.getElementById('num1');
        
        let btn = document.getElementById('btn');
        let resultado = document.getElementById('demo');
       


        btn.addEventListener("click",(e)=>{
           e.preventDefault();
    
           let valor = parseFloat(n1.value);
           
          
           if(valor < 4.9){
               resultado.innerHTML = `Reprovado`
               
            }else if(valor < 7 ){
                resultado.innerHTML = `recuperação`
                
            }else{
                resultado.innerHTML = `Aprovado`
                
           }


        }
        )