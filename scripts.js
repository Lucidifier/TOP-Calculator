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

		button2.addEventListener('click', () => {
			const button2Value = '2';
			displayValue += button2Value;
			return display.textContent = displayValue;
		});

		button3.addEventListener('click', () => {
			const button3Value = '3';
			displayValue += button3Value;
			return display.textContent = displayValue;
		});

		button4.addEventListener('click', () => {
			const button4Value = '4';
			displayValue += button4Value;
			return display.textContent = displayValue;
		});

		button5.addEventListener('click', () => {
			const button5Value = '5';
			displayValue += button5Value;
			return display.textContent = displayValue;
		});

		button6.addEventListener('click', () => {
			const button6Value = '6';
			displayValue += button6Value;
			return display.textContent = displayValue;
		});

		button7.addEventListener('click', () => {
			const button7Value = '7';
			displayValue += button7Value;
			return display.textContent = displayValue;
		});

		button8.addEventListener('click', () => {
			const button8Value = '8';
			displayValue += button8Value;
			return display.textContent = displayValue;
		});

		button9.addEventListener('click', () => {
			const button9Value = '9';
			displayValue += button9Value;
			return display.textContent = displayValue;
		});

  }
	showOnDisplay();
}

initiateCalculator();