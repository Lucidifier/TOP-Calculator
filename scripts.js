function initiateCalculator() {
  
	function showOnDisplay() {
		//CREATE DOM NODES
		const display = document.querySelector('.display');
		let displayValue = '';
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
		
		button0.addEventListener('click', () => {
			const button0Value = '0';
			displayValue += button0Value;
			return display.textContent = displayValue;
		});

		button1.addEventListener('click', () => {
			const button1Value = '1';
			displayValue += button1Value;
			return display.textContent = displayValue;
		});

  }
	showOnDisplay();
}

initiateCalculator();