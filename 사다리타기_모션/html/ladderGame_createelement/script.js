const char = document.querySelectorAll('.user')
const delay = 1 //transition === delay
const popup = document.querySelector('.popupWrap')
const popupCloseBtn = document.querySelector('.popupClose')
const lineCount = 7 // 가로/세로 라인 수
let endDelay

char.forEach((item, _) => {
    item.children[0].addEventListener('click', function () {
        for(let i = lineCount - 1; i >= 0; i--){
            item.children[1].insertAdjacentHTML('afterbegin', 
            `<span class="line line0${i + 1} ${i % 2 === 0 ? 'col' : 'row'}"></span>`)
        }
        const charLine = item.children[1].querySelectorAll('.line')
        charLine.forEach((item, idx) => {
            item.style.transitionDelay = delay * idx + "s"
        })      
        setTimeout(() => {item.children[1].classList.add('on')}, 0)
        endDelay = (delay * lineCount * 1000) + 1000 
        setTimeout(popupE, endDelay)
    }, {once: true})
})


function popupE(){ 
    if (!popup.classList.contains('on')) {
        popup.classList.add('on')
    }
    popupCloseBtn.addEventListener('click', function () {
        popup.classList.remove('on')
    })
}
