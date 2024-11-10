
// Animação suave ao rolar para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato
document.getElementById('formulario-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Aqui você pode adicionar o código para enviar o email
    // Por enquanto, vamos apenas mostrar um alerta
    alert(`Mensagem recebida!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    
    // Limpar o formulário
    this.reset();
});

// Animação para os cards de projeto
document.querySelectorAll('.projeto-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Botões "Saiba Mais"
document.querySelectorAll('.btn-saiba-mais').forEach(button => {
    button.addEventListener('click', function() {
        const projetoTitulo = this.parentElement.querySelector('h3').textContent;
        alert(`Mais informações sobre ${projetoTitulo} em breve!`);
    });
});

// Detectar scroll para adicionar classe na navegação
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(52, 73, 94, 0.95)';
    } else {
        nav.style.backgroundColor = '#34495e';
    }
});