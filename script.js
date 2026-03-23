// Função para filtrar seções
function filterSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    const navBtns = document.querySelectorAll('.nav-btn');

    // Remover classe active de todos os botões
    navBtns.forEach(btn => btn.classList.remove('active'));

    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');

    // Mostrar/ocultar seções
    sections.forEach(section => {
        if (section.dataset.section === sectionName) {
            section.classList.remove('hidden');
        } else if (section.dataset.section) {
            section.classList.add('hidden');
        }
    });
}

// Copiar código ao clicar no bloco de código
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'CODE') {
        const code = event.target.innerText;
        navigator.clipboard.writeText(code).then(() => {
            const originalText = event.target.innerText;
            event.target.innerText = '✓ Copiado!';
            event.target.style.color = '#10b981';
            
            setTimeout(() => {
                event.target.innerText = originalText;
                event.target.style.color = '';
            }, 1500);
        });
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle (para futuras melhorias)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.className);
}

// Carregar tema salvo
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
});

// Adicionar scroll indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const scrollBar = document.querySelector('.scroll-indicator');
    
    if (scrollBar) {
        scrollBar.style.width = (scrollPercent * 100) + '%';
    }
});
