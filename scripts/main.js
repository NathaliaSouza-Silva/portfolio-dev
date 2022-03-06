const nav = document.querySelector(".n-container");
const toggle = document.querySelectorAll(".toggle");

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
    
}

const links = document.querySelectorAll(".menu ul li a");

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    })
}

// Scroll Reveal JS

const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 1000,
    reset: true
})

scrollReveal.reveal(`.projeto`, { interval: 100 })