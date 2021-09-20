// ========== SHOW MENU ==========
const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')

// ========== MENU SHOWS ==========
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ========== MENU HIDES ==========
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ========== REMOVE NAV MOBILE ==========
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
}))

// ========== CHANGE BACKGROUND HEADER ==========
window.addEventListener('scroll', () => {
    const navHeader = document.getElementById("header")
    if (scrollY > 50) {
        navHeader.classList.add("scroll-header")
    } else { navHeader.classList.remove("scroll-header") }
})

// ========== SHOW SCROLL ==========
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up')
    if (scrollY > 200) {
        scrollUp.classList.add('show-scroll')
    } else { scrollUp.classList.remove('show-scroll') }
})

// ========== SCROLL SECTIONS ACTIVE LINK ==========
const sections = document.querySelectorAll("section[id]")
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll', scrollActive)

// ========== SCROLL REVEAL ==========
const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__header, .section__title,.case__data`, { delay: 600 })
sr.reveal(`.home__footer, .footer__container, .footer__copy`, { delay: 700 })
sr.reveal(`.home__img`, { delay: 900, origin: "top" })
sr.reveal(`.sponsor__img, .products__card`, { origin: "top", interval: 100 })
sr.reveal(`.specs__data, .discount__animate`, { origin: "left", interval: 100 })
sr.reveal(`.specs__img, .discount__img`, { origin: "right" })
sr.reveal(`.case__img`, { origin: "top" })







