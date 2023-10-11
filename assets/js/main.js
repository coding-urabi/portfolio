/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-menu')


/*=================== MENU SHOW ========================*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}      


/*========== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navLink.forEach(n => n.addEventListener('click', linkAction))
}

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the  shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the tag with scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp) 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id'),
             sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


       if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
       } else {
        sectionsClass.classList.remove('active-link')
       }      
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 

    
 
  
/*=============== SCROLL REVEAL ANIMATION ===============*/
