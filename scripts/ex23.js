// Menu mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        document.querySelector('.nav-list').classList.remove('active');
    });
});

// Mudar header no scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        header.style.background = 'rgba(26, 62, 140, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'var(--primary)';
    }
});