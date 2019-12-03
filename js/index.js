// Your code goes here
let links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault
        e.stopPropagation
    })
})

let images = document.querySelectorAll('img')
images.forEach(image => {
    // ONE
    image.addEventListener('mouseover', e => {
        image.style.border = '1px dashed grey'
    })
    // TWO
    image.addEventListener('drag', e => {
        image.src = ''
        image.alt = ''
        e.stopPropagation()
    })
})

let subHeadings = document.querySelectorAll('h2')
subHeadings.forEach(subHeading => {
    // THREE
    subHeading.addEventListener('mouseover', e => {
        subHeading.style.fontSize = '2rem'
    })
    // FOUR
    subHeading.addEventListener('click', e => {
        subHeading.style.fontSize = '3.5rem'
        e.stopPropagation()
    })
})

let subSections = document.querySelectorAll('h4')
subSections.forEach(sub => {
    // FIVE
    sub.addEventListener('mouseover', e => {
        sub.style.textTransform = 'uppercase'
    })
})

let sections = document.querySelectorAll('section')
sections.forEach(section => {
    // SIX
    section.addEventListener('click', e => {
        section.style.border = '1px solid aqua'
    })
})

let stopCopy = document.querySelectorAll('p')
stopCopy.forEach(area => {
    // SEVEN
    area.addEventListener('click', e => {
        alert('This stuff is coopyrighted man!')
        e.stopPropagation()
    })
})

let heading = document.querySelector('h1')
let body = document.querySelector('body')
// EIGHT
body.addEventListener('click', e => {
    heading.style.color = 'blue'
})

let nav = document.querySelector('nav')
// NINE
nav.addEventListener('mouseover', e => {
    nav.style.border = '2px solid black'
})

let footer = document.querySelector('footer')
// TEN
footer.addEventListener('click', e => {
    alert('Thanks for visiting!')
    e.stopPropagation()
})