function initiateCalculator() {

			//CREATE DOM NODES
			const display = document.querySelector('.display');
			let displayValue = [];
			let calculationValue = [];
			let separatedDisplayValue = [];
			let numLockCounter = 2;
		
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
			const buttonFloating = document.querySelector('.key_floating');
	
			const buttonAddition = document.querySelector('.key_addition');
			const buttonSubtraction = document.querySelector('.key_substraction');
			const buttonMultiplication = document.querySelector('.key_multiplication');
			const buttonDivision = document.querySelector('.key_division');
			const buttonEquals = document.querySelector('.key_equals');


	
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


		function operate() {
			separatedDisplayValue = displayValue.join('').split(' ');
			switch (separatedDisplayValue[1]) {
				case '+':
					calculationValue = +separatedDisplayValue[0] + +separatedDisplayValue[2];
					display.textContent = calculationValue;
					break;
				case '-':
					calculationValue = +separatedDisplayValue[0] - +separatedDisplayValue[2];
					display.textContent = calculationValue;
					break;
				case '*':
					if ((separatedDisplayValue[0] === '' || separatedDisplayValue[2] === '') || (isNaN(separatedDisplayValue[0]) || isNaN(separatedDisplayValue[2]))) {
						calculationValue = separatedDisplayValue[0];
						displayValue.splice(0,displayValue.length);
						display.textContent = displayValue.join('');
						break;
					} else {
					calculationValue = +separatedDisplayValue[0] * +separatedDisplayValue[2];
					display.textContent = calculationValue;
					break;
					};
				case '/':
					if (separatedDisplayValue[0] === '' || separatedDisplayValue[2] === '') {
						calculationValue = separatedDisplayValue[0];
						displayValue.splice(0,displayValue.length);
						console.log(displayValue);
						display.textContent = displayValue.join('');
						break;
					} else {
						if (+separatedDisplayValue[2] == 0) {
							displayValue.splice(0,displayValue.length);
							console.log(displayValue);
							display.textContent = displayValue.join('');
							break;
						} else {
						calculationValue = +separatedDisplayValue[0] / +separatedDisplayValue[2];
						console.log(calculationValue);
						display.textContent = calculationValue;
						break;
						}};
				default:
					console.log('error');
			};
			// if (separatedDisplayValue[1] == '+') {
			// 	return display.textContent = +separatedDisplayValue[0] + +separatedDisplayValue[2];
			// }
		};
  
	function showOnDisplay() {

		button0.addEventListener('click', () => {
			if (displayValue.length < 15) {
			displayValue.push(0);
			console.log(displayValue);
			return display.textContent = displayValue.join('');
			} else {
				return display.textContent = displayValue.join('');
			};
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

		buttonAddition.addEventListener('click', () => {
			if (displayValue.length == 0) {
				return display.textContent = displayValue;
			} else {
			if (displayValue.join('').split(' ')[1] !== undefined) {
				operate();
				displayValue.splice(0,displayValue.length,calculationValue, ' + ');
			return display.textContent = displayValue.join('');
			} else {
			displayValue.push(' + ');
			return display.textContent = displayValue.join('');
			}
		};
		});

		buttonSubtraction.addEventListener('click', () => {
			if (displayValue.join('').split(' ')[1] !== undefined) {
				operate();
				displayValue.splice(0,displayValue.length,calculationValue, ' - ');
			return display.textContent = displayValue.join('');
			
			} else {
			displayValue.push(' - ');
			return display.textContent = displayValue.join('');
			};
		});

		buttonMultiplication.addEventListener('click', () => {
			if (displayValue.length == 0) {
				return display.textContent = displayValue;
			} else {
				if (displayValue.join('').split(' ')[1] !== undefined) {
					operate();
					displayValue.splice(0,displayValue.length,calculationValue, ' * ');
					return display.textContent = displayValue.join('');
				} else {
					displayValue.push(' * ');
					return display.textContent = displayValue.join('');
				};
			};
		});

		buttonDivision.addEventListener('click', () => {
			if (displayValue.length == 0) {
				return display.textContent = displayValue;
			} else {
					if (displayValue.join('').split(' ')[1] !== undefined) {
						operate();
						displayValue.splice(0,displayValue.length,calculationValue, ' / ');
						return display.textContent = displayValue.join('');
					} else {
						displayValue.push(' / ');
						return display.textContent = displayValue.join('');
					}
			};
		});

		buttonFloating.addEventListener('click', () => {
			console.log(displayValue.join('').split(' '));
			if (displayValue.length == 0) {
				return display.textContent = displayValue;
			} else if (displayValue.join('').split(' ')[2] == '') {
				console.log(1);
				return display.textContent = displayValue.join('');
			} else if (displayValue.join('').split(' ').length == 1) {
				if (displayValue.join('').includes('.')) {
					console.log(2);
					return display.textContent = displayValue.join('');
				} else {
					displayValue.push('.');
					console.log(3);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				};
			} else {
				let slicedDisplayValue = displayValue.slice(2);
				if (slicedDisplayValue.join('').includes('.')) {
						console.log(4);
						return display.textContent = displayValue.join('');
				} else {
					displayValue.push('.');
					console.log(5);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				};
			};
		}
		);
	
		buttonBackspace.addEventListener('click', ()=> {
			displayValue.pop();
			return display.textContent = displayValue.join('');
		});

		buttonClear.addEventListener('click', ()=> {
			displayValue.splice(0,displayValue.length);
			return display.textContent = displayValue.join('');
		});

		buttonEquals.addEventListener('click', () => {
			if (displayValue.join('').split(' ')[2] == '') {
				return display.textContent = displayValue.join('');
			} else if (displayValue.join('').split(' ').length == 1) {
				return display.textContent = displayValue.join('');
			}
			 else {
				operate();
			}
		});
  }


	// KEYBOARD SUPPORT VALUES 

	function keydownChecker (e) {
		switch (e.code) {
			case 'Numpad0':
				if (displayValue.length < 20) {
					displayValue.push(0);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad1':
				if (displayValue.length < 20) {
					displayValue.push(1);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad2':
				if (displayValue.length < 20) {
					displayValue.push(2);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad3':
				if (displayValue.length < 20) {
					displayValue.push(3);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad4':
				if (displayValue.length < 20) {
					displayValue.push(4);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad5':
				if (displayValue.length < 20) {
					displayValue.push(5);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad6':
				if (displayValue.length < 20) {
					displayValue.push(6);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad7':
				if (displayValue.length < 20) {
					displayValue.push(7);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad8':
				if (displayValue.length < 20) {
					displayValue.push(8);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'Numpad9':
				if (displayValue.length < 20) {
					displayValue.push(9);
					console.log(displayValue);
					return display.textContent = displayValue.join('');
				} else {
						return display.textContent = displayValue.join('');
				};
			case 'NumpadAdd':
				if (displayValue.length == 0) {
					return display.textContent = displayValue;
				} else {
				if (displayValue.join('').split(' ')[1] !== undefined) {
					operate();
					displayValue.splice(0,displayValue.length,calculationValue, ' + ');
				return display.textContent = displayValue.join('');
				} else {
				displayValue.push(' + ');
				return display.textContent = displayValue.join('');
				}
			};
			case 'NumpadSubtract':
				if (displayValue.join('').split(' ')[1] !== undefined) {
					operate();
					displayValue.splice(0,displayValue.length,calculationValue, ' - ');
				return display.textContent = displayValue.join('');
				} else {
				displayValue.push(' - ');
				return display.textContent = displayValue.join('');
				};
			case 'NumpadMultiply':
				if (displayValue.length == 0) {
					return display.textContent = displayValue;
				} else {
					if (displayValue.join('').split(' ')[1] !== undefined) {
						operate();
						displayValue.splice(0,displayValue.length,calculationValue, ' * ');
						return display.textContent = displayValue.join('');
					} else {
						displayValue.push(' * ');
						return display.textContent = displayValue.join('');
					};
				};
			case 'NumpadDivide':
				if (displayValue.length == 0) {
					return display.textContent = displayValue;
				} else {
						if (displayValue.join('').split(' ')[1] !== undefined) {
							operate();
							displayValue.splice(0,displayValue.length,calculationValue, ' / ');
							return display.textContent = displayValue.join('');
						} else {
							displayValue.push(' / ');
							return display.textContent = displayValue.join('');
						}
				};
			case 'NumpadDecimal':
				if (displayValue.length == 0) {
					return display.textContent = displayValue;
				} else if (displayValue.join('').split(' ')[2] == '') {
					console.log(1);
					return display.textContent = displayValue.join('');
				} else if (displayValue.join('').split(' ').length == 1) {
					if (displayValue.join('').includes('.')) {
						console.log(2);
						return display.textContent = displayValue.join('');
					} else {
						displayValue.push('.');
						console.log(3);
						console.log(displayValue);
						return display.textContent = displayValue.join('');
					};
				} else {
					let slicedDisplayValue = displayValue.slice(2);
					if (slicedDisplayValue.join('').includes('.')) {
							console.log(4);
							return display.textContent = displayValue.join('');
					} else {
						displayValue.push('.');
						console.log(5);
						console.log(displayValue);
						return display.textContent = displayValue.join('');
					};
				};
			case 'NumpadEnter':
				if (displayValue.join('').split(' ')[2] == '') {
					return display.textContent = displayValue.join('');
				} else if (displayValue.join('').split(' ').length == 1) {
					return display.textContent = displayValue.join('');
				}
				 else {
					operate();
				};
		};
	}

	// ENABLE/ DISABLE KEYBOARD SUPPORT
	document.addEventListener('keydown', (n) => {
		if (n.code === 'NumLock') {
			
			numLockCounter ++;
			console.log(numLockCounter);
			if (numLockCounter % 2 == 0) {
				document. removeEventListener ('keydown', keydownChecker);
				console.log(1);
			} else {
				document.addEventListener('keydown', keydownChecker);
				console.log(2);
			};
		}
	});
	showOnDisplay();
};

initiateCalculator();