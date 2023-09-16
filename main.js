const dots = document.querySelectorAll('.dots div')
const main = document.querySelector('main')
const section = document.querySelector('section')

const colors = ['red', 'blue', 'green', 'black']

for(let i=0; i<dots.length; i++){
    dots[i].addEventListener('click', () => {
        dots.forEach(dot => dot.classList.remove('active'))
        dots[i].classList.add('active')
        main.style.marginLeft = `${-450*i}px`

        colors.forEach(dot => section.classList.remove(dot))
        section.classList.add(colors[i])
    })
}