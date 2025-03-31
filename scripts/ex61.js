const form = document.getElementById('myForm');
const btn = document.getElementById('btn');


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const password = document.getElementById('password').value;
    const login = document.getElementById('login').value;
   if(password === '0000' && login === 'senac'){
    window.location.href = 'ex61-2.html';
   }else{
    alert('Credenciais inválidas. Tente novamente.');
   }


});