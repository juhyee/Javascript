const char = document.querySelectorAll('.user')
const delay = 1 //transition === delay
const popup = document.querySelector('.popupWrap')
const popupCloseBtn = document.querySelector('.popupClose')
const lineCount = 7 // 가로/세로 라인 수
let endDelay = (delay * lineCount * 1000) + 1000 


char.forEach((item, _) => {
    item.children[0].addEventListener('click', function (e) {
        e.preventDefault();
        // 클릭 영역 제외 한 영역 dim 처리
        

        // 클릭 영역만 dim 처리
        // item.classList.add('dim')

        // 모든 영역 dim 처리
        char.forEach((item) => item.classList.add("dim"));

        for(let i = lineCount - 1; i >= 0; i--){
            item.children[1].insertAdjacentHTML('afterbegin', 
            `<span class="line line0${i + 1} ${i % 2 === 0 ? 'col' : 'row'}"></span>`)
        }

        const charLine = item.children[1].querySelectorAll('.line')
        charLine.forEach((item, idx) => {
            item.style.transitionDelay = delay * idx + "s"
        }) 

        setTimeout(() => {item.children[1].classList.add('on')}, 0)
        setTimeout(popupE, endDelay)
    })
})


function popupE(){ 
    if (!popup.classList.contains('on')) {
        popup.classList.add('on')
    }
    popupCloseBtn.addEventListener('click', function () {
        popup.classList.remove('on')
    })
}
