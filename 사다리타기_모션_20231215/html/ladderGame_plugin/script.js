gsap.registerPlugin(MotionPathPlugin);
const char = document.querySelectorAll('.user')
const popup = document.querySelector('.popupWrap')
const popupCloseBtn = document.querySelector('.popupClose')

char.forEach((item, _) => {
    item.children[0].addEventListener('click', function () {
        let path = item.children[1].children[0].children[0]
        let length = path.getTotalLength();

        item.children[1].style.display = "inline-block"

        gsap.set(path, {
            strokeDashoffset: length,
            strokeDasharray: length
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 7,
          });
          
        gsap.to(item.children[0], {
        duration: 7,
        ease: "esar",
        motionPath:{
            path: path,
            align: path,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
        },
        onComplete: popupE,
    });
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



