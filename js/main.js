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

function scrollHeader() {
    const header = document.querySelector("#header")
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiper = new Swiper(".popular_container" , {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets:true
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        }, 
        1024: {
            spaceBetween: 50
        }
    }
})

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixer = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    }, 
    animation: {
        duration: 300
    }
})

/* Link active featured */ 
const linkFeatured = document.querySelectorAll(".featured_item")

function activeFeatured() {
    linkFeatured.forEach(link => link.classList.remove('active_featured'))
    this.classList.add('active_featured')
}

linkFeatured.forEach(link=>link.addEventListener('click',activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
