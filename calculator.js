document.addEventListener('DOMContentLoaded', () => {
	let buttons = document.querySelectorAll('button');
	let nums = document.querySelectorAll('a')
	for (let a = 0; a < buttons.length; a++) {
		let button = buttons[a];
		let clickedBtn;

		for (let b = 0; b < nums.length; b++) {
			let num = nums[b]
			button.addEventListener('click', () => {
				console.log(this.innerHTML)

			})
		}
		
		console.log(button)
	}
})