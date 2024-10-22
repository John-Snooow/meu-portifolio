// Seleciona o elemento com a classe 'menu-hamburguer' e armazena na variável menuHamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');

// Adiciona um evento de clique ao elemento menuHamburguer
menuHamburguer.addEventListener('click', () => {
    // Quando clicado, chama a função toggleMenu
    toggleMenu();
});

// Função para alternar a exibição do menu
function toggleMenu() {
    // Seleciona o elemento com a classe 'nav-responsive'
    const nav = document.querySelector('.nav-responsive');
    
    // Alterna a classe 'change' no elemento menuHamburguer
    menuHamburguer.classList.toggle('change');

    // Verifica se o menuHamburguer tem a classe 'change'
    if (menuHamburguer.classList.contains('change')) {
        // Se tiver, exibe o menu de navegação
        nav.style.display = "block";
    } else {
        // Se não tiver, oculta o menu de navegação
        nav.style.display = 'none';
    }
}