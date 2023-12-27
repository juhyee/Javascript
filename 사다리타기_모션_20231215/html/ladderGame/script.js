const char = document.querySelectorAll('.user')
const delay = 1 //transition === delay
const popup = document.querySelector('.popupWrap')
const popupCloseBtn = document.querySelector('.popupClose')
let endDelay = 1

char.forEach((item, _) => {
	item.children[0].addEventListener('click', function () {
		item.children[1].classList.add('on')
		const charLine = item.children[1].querySelectorAll('.line')
		charLine.forEach((item, idx) => {
			item.style.transitionDelay = delay * idx + "s"
		})
		endDelay = delay * charLine.length * 1000
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
