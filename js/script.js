
const menuHamburgur = document.querySelector('.menu-hamburguer')
menuHamburgur.addEventListener('click', () =>{
    toggleMenu()
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive')
    menuHamburgur.classList.toggle('change');

    if(menuHamburgur.classList.toggle('change')){
        nav.computedStyleMap.display="block"
    }else{
        nav.style = 'none'
    }
}