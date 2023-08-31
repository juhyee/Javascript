// document.title = "Hello, from javascript"
const title = document.getElementById('title');

title.innerText = 'Got you!'

console.dir(title)
console.log(title.className)

function handelTitleClick(){
    const currentColor = title.style.color
    let newColor = 'tomato'
    if(currentColor == 'blue'){
        newColor = 'tomato'
    }else {
        newColor = 'blue'
    }
    title.style.color = newColor
}

function handelTitleMouseEnter(){
    title.innerText = "Mouse is here!"
}

function handelTitleMouseLeave(){
    title.innerText = "Mouse is gone!"
}

title.addEventListener('click', handelTitleClick)
title.addEventListener('mouseenter', handelTitleMouseEnter)
title.addEventListener('mouseleave', handelTitleMouseLeave)


//////////////////////////////////////////////////////////////


function handelWindowResize(){
    document.body.style.backgroundColor = "yellow"
}

function handelWindowCopy(){
    alert('copier!')
}


window.addEventListener('resize', handelWindowResize)
window.addEventListener('copy', handelWindowCopy)


//////////////////////////////////////////////////////////////

