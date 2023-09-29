function initiateCalculator() {
  
	function showOnDisplay() {
		//CREATE DOM NODES
		const display = document.querySelector('.display');
		let displayValue = [];
	
		const button0 = document.querySelector('.key_0');
		const button1 = document.querySelector('.key_1');
		const button2 = document.querySelector('.key_2');
		const button3 = document.querySelector('.key_3');
		const button4 = document.querySelector('.key_4');
		const button5 = document.querySelector('.key_5');
		const button6 = document.querySelector('.key_6');
		const button7 = document.querySelector('.key_7');
		const button8 = document.querySelector('.key_8');
		const button9 = document.querySelector('.key_9');

		const buttonBackspace = document.querySelector('.key_backspace');
		const buttonClear = document.querySelector('.key_clear');

	// 	let buttonVariedVariables = [
	// 		button0,
	// 		button1,
	// 		button2,
	// 		button3,
	// 		button4,
	// 		button5,
	// 		button6,
	// 		button7,
	// 		button8,
	// 		button9,
	// ];


	// 	let i = 0;
	// 	for (elem in buttonVariedVariables) {
	// 		buttonVariedVariables[elem].addEventListener('click', () => {
	// 			console.log(displayValue);
	// 			displayValue.push(buttonVariedVariables.indexOf());
	// 			console.log(displayValue);
	// 			return display.textContent = displayValue.join('');
	// 		});
	// 	}
		
	

		
		button0.addEventListener('click', () => {
			// const button0Value = '0';
			displayValue.push(0);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button1.addEventListener('click', () => {
			displayValue.push(1);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		// button2.addEventListener('click', () => {
		// 	const button2Value = '2';
		// 	displayValue += button2Value;
		// 	return display.textContent = displayValue;
		// });

		button2.addEventListener('click', () => {
			displayValue.push(2);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button3.addEventListener('click', () => {
			displayValue.push(3);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button4.addEventListener('click', () => {
			displayValue.push(4);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button5.addEventListener('click', () => {
			displayValue.push(5);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button6.addEventListener('click', () => {
			displayValue.push(6);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button7.addEventListener('click', () => {
			displayValue.push(7);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button8.addEventListener('click', () => {
			displayValue.push(8);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		button9.addEventListener('click', () => {
			displayValue.push(9);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		buttonBackspace.addEventListener('click', ()=> {
			displayValue.pop();
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

		buttonClear.addEventListener('click', ()=> {
			displayValue.splice(0,displayValue.length);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
		});

  }
	showOnDisplay();
}

initiateCalculator();