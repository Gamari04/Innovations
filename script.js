const menuHamburger = document.querySelector(".menu_burger")
const navLinks = document.querySelector(".links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle("mobile-menu")
})