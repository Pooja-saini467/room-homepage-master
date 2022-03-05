const nav = document.querySelector('nav')
const menuCheck = document.getElementById('mobile-menu')
const menuBTN = document.querySelector('.mobile-menu')
const menuBG = document.querySelector('.menu-bg')
menuBTN.addEventListener('click', ()=>{
    if(menuCheck.checked == false){
        nav.classList.add('active')
        nav.classList.remove('inactive')
        menuBG.setAttribute('style', 'display: block')
    }else{
        nav.classList.add('inactive')
        nav.classList.remove('active')
        menuBG.setAttribute('style', 'display: none')
    }
})
const boxes = document.querySelectorAll('.boxes')
const heroes = document.querySelectorAll('.hero-container')
let i = 0

const right = document.querySelector('.right')
const left = document.querySelector('.left')

heroes.forEach((hero)=>{
    hero.setAttribute('style', 'display: none')
})
heroes[i].setAttribute('style', 'display: flex')

next = () =>{
    boxes.forEach((box)=>{
        box.classList.add('animate-box')
    })
    
    setTimeout(
        function(){
            heroes[i].setAttribute('style', 'display: none')
            
            i = i + 1
            i = i % heroes.length
            heroes[i].classList.add('animate-right')
            heroes[i].setAttribute('style', 'display: flex')

            boxes.forEach((box)=>{
                box.classList.remove('animate-box')
            })
        }, 1400
    )
}

prev = () =>{
    boxes.forEach((box)=>{
        box.classList.add('animate-box')
    })

    setTimeout(
        function(){
            heroes[i].setAttribute('style', 'display: none')
            
            if(i == 0){
                i = heroes.length
            }
            i = i - 1
            heroes[i].classList.add('animate-left')
            heroes[i].setAttribute('style', 'display: flex')

            boxes.forEach((box)=>{
                box.classList.remove('animate-box')
            })
        }, 1400
    )
}

right.addEventListener('click', ()=>{
    next()
})
left.addEventListener('click', ()=>{
    prev()
})
