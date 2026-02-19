const menuIcon = document.querySelector('.menu-icon')
const ul = document.querySelector('.menu')

function showMenu(){
    ul.classList.toggle('abrir_menu')
    
}

menuIcon.addEventListener('click', showMenu)

