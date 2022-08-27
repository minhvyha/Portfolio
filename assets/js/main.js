/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 40) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== EXPERIENCE MODAL ===============*/
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('experience__active')
        })
        target.classList.add('experience__active')

        tabs.forEach(tab =>{
            tab.classList.remove('experience__active')
        })
        tab.classList.add('experience__active')
    })
})

/*=============== EXPERIENCE MODAL ===============*/
const expBtns = document.querySelectorAll('.experience__button'),
      expViews = document.querySelectorAll('.experience__modal'),
      expClose = document.querySelectorAll('.experience__modal-close')

let expModal = function(modalIndex) {
    modalViews[modalIndex].classList.add('active-modal')
}



/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click',()=>{
        modal(i)
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})
/*=============== WORL MODAL ===============*/
const workViews = document.querySelectorAll('.work__modal'),
      workBtns = document.querySelectorAll('.work__button'),
      workClose = document.querySelectorAll('.work__modal-close')
let work = function(workClick) {
    workViews[workClick].classList.add('work__active')
}

workBtns.forEach((mw, i) =>{
    mw.addEventListener('click',()=>{
        work(i)
    })
})
workClose.forEach((mc) => {
    mc.addEventListener('click', () =>{
        workViews.forEach((mv) =>{
            mv.classList.remove('work__active')
        })
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    load: {
        filter: '.web'
    },
    animation: {
        duration: 350
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu li[id*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu li[id*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 700
    //reset: True,
})
sr.reveal(`.home__data`)
sr.reveal(`.home__handle` , {delay: 700})
sr.reveal(`.home__socials, .home__scrolls` , {delay: 700, origin:'bottom', duration: 2000})







