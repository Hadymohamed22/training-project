let menuIcon = document.querySelector("nav .container .navbar-toggler .menu");
let menuFirstLine = document.querySelector("nav .container .navbar-toggler .menu span:first-child");
let menuSecondLine = document.querySelector("nav .container .navbar-toggler .menu span:nth-child(2)");
let menuLastLine = document.querySelector("nav .container .navbar-toggler .menu span:last-child");
let openMenu = document.querySelector("nav .container .collapse .navbar-nav .nav-item div.nav-link")
let openMenuArrow = document.querySelector("nav .container .collapse .navbar-nav .nav-item div.nav-link i")
let upBtn = document.querySelector(".up-button")

menuIcon.onclick = function (){
    menuIcon.classList.toggle("menu-active")
    if (menuIcon.classList.contains("menu-active")){
        linksSmallScreen.style.cssText = "display: flex; flex-direction: column; align-items: start; justify-content: center;"
    }else {
        linksSmallScreen.style.cssText = "display: none"    
    }
}

openMenu.onclick = () => {
if (openMenu.getAttribute("aria-expanded") == "true"){
    openMenuArrow.style.cssText = "transform: rotateX(180deg);"
}else if(openMenu.getAttribute("aria-expanded") == "false"){
    openMenuArrow.style.cssText = "transform: rotateX(0deg);"
} 
}
upBtn.onclick = () => { 
window.scrollTo(0,0)
}
window.onscroll = () => {
    if(window.scrollY >= 600){
        upBtn.style.cssText = "display: flex !important;"
    }else{
        upBtn.style.cssText = "display: none !important;"
    }
}
