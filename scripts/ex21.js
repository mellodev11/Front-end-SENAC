document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginInput = document.getElementById('login').value;
    const senhaInput = document.getElementById('senha').value;
    
    // Validação das credenciais
    if (loginInput === 'carnatec' && senhaInput === '0000') {
      // Redireciona para a página de carnaval
      window.location.href = 'ex21-1.html';
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  });