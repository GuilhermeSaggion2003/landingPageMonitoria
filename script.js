// Smooth scrolling para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeito de hover nos problemas
    const problemItems = document.querySelectorAll('.problem-list li');
    problemItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Adicionar animação de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.hero-content, .hero-visual');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Adicionar efeito de parallax sutil
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-section::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Função para adicionar mais seções dinamicamente
function addSection(sectionData) {
    const mainContainer = document.querySelector('body');
    const newSection = document.createElement('section');
    newSection.className = sectionData.className;
    newSection.innerHTML = sectionData.content;
    mainContainer.appendChild(newSection);
}

// Exemplo de como adicionar uma nova seção
// addSection({
//     className: 'benefits-section',
//     content: `
//         <div class="container">
//             <h2>Benefícios do Kit</h2>
//             <!-- Conteúdo da seção -->
//         </div>
//     `
// }); 