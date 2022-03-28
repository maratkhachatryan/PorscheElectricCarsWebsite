/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav_menu")
const navToggle = document.querySelector("#nav_toggle")
const navClose = document.querySelector("#nav_close")

if(navToggle) {
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show_menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show_menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link")

function linkAction() {
    const navMenu = document.querySelector("#nav_menu")
    navMenu.classList.remove("show_menu")
}

navLink.forEach(link => link.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
