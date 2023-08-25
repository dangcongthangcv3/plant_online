let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
var header = document.querySelector('.header-3')

menu.addEventListener('click', () => {
    // debugger
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
window.onscroll = () => {
    // debugger
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    if (window.scrollY > 250) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}