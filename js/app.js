const header = document.querySelector('header')
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',this.window.scrollY> 0)
})

let menuBar = document.querySelector('#menu-bar')
let navMenu = document.querySelector('.header-nav')
menuBar.addEventListener('click',(event)=>{
    event.preventDefault()
    navMenu.classList.toggle('active')
})

