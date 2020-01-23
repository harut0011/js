document.addEventListener('DOMContentLoaded', () => {
	let buttons = document.querySelectorAll('button');
	let currentNum = document.querySelector('.current-num');
	let span = document.querySelector('span')

	for (let a = 0; a < buttons.length; a++) {
		let button = buttons[a];
		button.addEventListener('click', () => {
			
			if (button.innerHTML > 0) {
				if (currentNum.innerHTML == '0') {
					currentNum.innerHTML = button.innerHTML;


				} else {
					currentNum.innerHTML += button.innerHTML;
				}
			}
		})
	}
})