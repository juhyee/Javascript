document.addEventListener("DOMContentLoaded", function(){
	
	(function () {
		const items = [];

		let arrItem = document.querySelectorAll('.box > img')
		arrItem.forEach((item, _) => {
			items.push(`<img src=${item.src} >`)
		})
		
		const button = document.querySelector('.button')
		// button.addEventListener('click', spin, {once: true});
		button.addEventListener('click', function(e){
			e.preventDefault()
			spin()
		});
		
		const screenItems = document.querySelectorAll('.screenItem');
		function init() {

			screenItems.forEach((item, idx) => {
				const boxes = item.querySelector('.boxes');
				const boxesClone = boxes.cloneNode(false);
				const pool = [''];
				
				pool.push(...shuffle(items));

				function createFirstEle(){
					const box = document.createElement('div');
					box.classList.add('box');
					box.innerHTML = items[idx];
					boxesClone.appendChild(box);
					
					return box;
				}
				createFirstEle();  // 결과 값이 처음과 같을때  createFirstEle(); 사용 

				let totalNum = 10 //룰렛 한 화면 내 이미지 개수
				for (let i = totalNum; i > 0; i--) {
					const box = document.createElement('div');
					box.classList.add('box');
					if(i > pool.length - 1){
						box.innerHTML = pool[Math.floor(4 % i)];
					}else {
						box.innerHTML = pool[i];
					}
					boxesClone.appendChild(box);
				}
			
				boxesClone.style.transform = `translateY(-${item.clientHeight * (totalNum)}px)`;
				item.replaceChild(boxesClone, boxes);
			}) 

		}
		

		function shuffle([...arr]) {
			let num = arr.length;
			while (num) {
				const i = Math.floor(Math.random() * num--);
				[arr[num], arr[i]] = [arr[i], arr[num]];
			}
			return arr;
		}


		async function spin() {
			init();
			button.classList.add('on')
			document.querySelector('.slotHandle').classList.add('on')
			
			for (const item of screenItems) {
				const boxes = item.querySelector('.boxes');
				boxes.style.transform = 'translateY(0)';
				await new Promise((resolve) => setTimeout(resolve, 60)); // 60 => 결과 시간차
			}
		}


	})();
	init();
})