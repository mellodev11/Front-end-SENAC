let n1 = document.getElementById('num1');
        let n2 = document.getElementById('num2');
        let btn = document.getElementById('btn');
        let resultado = document.getElementById('demo');
        let n3 = document.getElementById('num3')


        btn.addEventListener("click",(e)=>{
           e.preventDefault();
    
           let valor = parseFloat(n1.value);
           let valor2 = parseFloat(n2.value);
           let valor3 = parseFloat(n3.value);
           let som = (valor + valor2 +valor3)/3;

           resultado.innerHTML = `A média de ${valor} ${valor2} ${valor3} o resultado é : ${som}`;

        }
        )