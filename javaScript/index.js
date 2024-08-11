const imgs = document.querySelectorAll('#partnersContainer>div')

// ARROW LEFT FUNCTION  (PARTNERS SLIDER)
const arrowLeft = document.getElementById('arrowLeft')

const firstImage = document.querySelectorAll('#partners>div>div>div:first-child>img')
const firstImageObserver = new IntersectionObserver(firstImage => {
    firstImage.forEach(img => {
        if (img.isIntersecting) {
            arrowLeft.style.display='none'
        }
        else {
            arrowLeft.style.display='block'
        }
    })
}, { threshold: 1 })
firstImage.forEach(element => firstImageObserver.observe(element));


arrowLeft.addEventListener('click', () => {
    imgs.forEach(img => {
        img.style.transition += 'all .5s'
        img.style.transform += 'translateX(150px)'
    })
})

// ARROW RIGHT FUNCTION  (PARTNERS SLIDER)
const arrowRight = document.getElementById('arrowRight')

const lastImage = document.querySelectorAll('#partners>div>div>div:last-child>img')
const lastImageObserver = new IntersectionObserver(lastImage => {
    lastImage.forEach(img => {
        if (img.isIntersecting) {
            arrowRight.style.display='none'
        }
        else {
            arrowRight.style.display='block'
        }
    })
}, { threshold: 1 })
lastImage.forEach(element => lastImageObserver.observe(element));


arrowRight.addEventListener('click', () => {
    imgs.forEach(img => {
        img.style.transition += 'all .5s'
        img.style.transform += 'translateX(-150px)'
    })
})





// Add animation
const intros = document.querySelectorAll('.intro>div');
const observerBox = new IntersectionObserver(intros => {
    intros.forEach(intro => {
        if (intro.isIntersecting) intro.target.classList.add('simpleTranslateX');
    })
})
intros.forEach(element => observerBox.observe(element));


const ourTeamTitle= document.querySelectorAll('#ourTeamTitle');
const observerTitle = new IntersectionObserver(titles => {
    titles.forEach(title => {
        if (title.isIntersecting) title.target.classList.add('simpleTranslateX');
    })
})
ourTeamTitle.forEach(element => observerTitle.observe(element));