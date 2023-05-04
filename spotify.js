let a1 = document.querySelector('.b3d1')
let a2 = document.querySelector('.b3d2')
let a3 = document.querySelector('.b3d3')
let a4 = document.querySelector('.b3d4')
let b1 = document.querySelector('.d1l')
let b2 = document.querySelector('.d2l')
let b3 = document.querySelector('.d3l')
let b4 = document.querySelector('.d4l')
let c1 = document.querySelector('.b3h1')
let h1 = document.querySelector('h1b3')
let c2 = document.querySelector('.b3h2')
let c3 = document.querySelector('.b3h3')
let c4 = document.querySelector('.b3h4')


a1.addEventListener(('mouseover'),()=>{
    a1.style.background = 'rgb(242,242,242)'
    b1.style.textDecoration = 'underline'
})
a1.addEventListener(('mouseout'),()=>{
    a1.style.background = 'initial'
    b1.style.textDecoration = 'initial'

})
a2.addEventListener(('mouseover'),()=>{
    a2.style.background = 'rgb(242,242,242)'
    b2.style.textDecoration = 'underline'
})

a2.addEventListener(('mouseout'),()=>{
    a2.style.background = 'initial'
    b2.style.textDecoration = 'initial'
})

a3.addEventListener(('mouseover'),()=>{
    a3.style.background = 'rgb(242,242,242)'
    b3.style.textDecoration = 'underline'
})

a3.addEventListener(('mouseout'),()=>{
    a3.style.background = 'initial'
    b3.style.textDecoration = 'initial'
})

a4.addEventListener(('mouseover'),()=>{
    a4.style.background = 'rgb(242,242,242)'
    b4.style.textDecoration = 'underline'
})

a4.addEventListener(('mouseout'),()=>{
    a4.style.background = 'initial'
    b4.style.textDecoration = 'initial'
})

a1.addEventListener('click',()=>{
    c1.style.display = 'block'
})
a1.addEventListener('dblclick',()=>{
    c1.style.display = 'none'
})
a2.addEventListener('click',()=>{
    c2.style.display = 'block'
})
a2.addEventListener('dblclick',()=>{
    c2.style.display = 'none'
})
a3.addEventListener('click',()=>{
    c3.style.display = 'block'
})
a3.addEventListener('dblclick',()=>{
    c3.style.display = 'none'
})
a4.addEventListener('click',()=>{
    c4.style.display = 'block'
})
a4.addEventListener('dblclick',()=>{
    c4.style.display = 'none'
})