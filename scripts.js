
function initiateCalculator() {

			//CREATE DOM NODES

			const display = document.querySelector('.display');
			const audioBeep = new Audio('sounds/beep.mp3');
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
			const buttonNumLock = document.querySelector('.key_NMLK');

			const buttonSFX = document.querySelector('.function_sfx');
			const buttonLights = document.querySelector('.function_lights');
			const buttonPower = document.querySelector('.function_power');


	
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
		};


		//BUTTON FUNCTIONS

		function button0Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(0);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				} else {
					return display.textContent = displayValue.join('');
				};
		};

		function button1Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(1);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};
  
		function button2Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(2);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button3Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(3);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button4Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(4);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button5Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(5);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button6Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(6);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button7Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(7);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button8Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(8);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function button9Functionality() {
			if (displayValue.length < 15) {
				displayValue.push(9);
				console.log(displayValue);
				return display.textContent = displayValue.join('');
				}
		};

		function buttonAdditionFunctionality() {
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
			};
		};
		};

		function buttonSubtractionFunctionality() {
			if (displayValue.join('').split(' ')[1] !== undefined) {
				operate();
				displayValue.splice(0,displayValue.length,calculationValue, ' - ');
			return display.textContent = displayValue.join('');
			} else {
			displayValue.push(' - ');
			return display.textContent = displayValue.join('');
			};
		};

		function buttonMultiplicationFunctionality() {
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
		};

		function buttonDivisionFunctionality() {
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
		};

		function buttonFloatingFunctionality() {
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
		};

		function buttonBackspaceFunctionality() {
			displayValue.pop();
			return display.textContent = displayValue.join('');
		};

		function buttonClearFunctionality() {
			displayValue.splice(0,displayValue.length);
			return display.textContent = displayValue.join('');
		};

		function buttonEqualsFunctionality() {
			if (displayValue.join('').split(' ')[2] == '') {
				return display.textContent = displayValue.join('');
			} else if (displayValue.join('').split(' ').length == 1) {
				return display.textContent = displayValue.join('');
			}
			 else {
				operate();
			};
		};

		function buttonNumLockFunctionality() {
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


	// SHOW DISPLAY

	function showOnDisplay() {
		button0.addEventListener('click', button0Functionality);
		button1.addEventListener('click', button1Functionality);
		button2.addEventListener('click', button2Functionality);
		button3.addEventListener('click', button3Functionality);
		button4.addEventListener('click', button4Functionality);
		button5.addEventListener('click', button5Functionality);
		button6.addEventListener('click', button6Functionality);
		button7.addEventListener('click', button7Functionality);
		button8.addEventListener('click', button8Functionality);
		button9.addEventListener('click', button9Functionality);
		buttonAddition.addEventListener('click', buttonAdditionFunctionality);
		buttonSubtraction.addEventListener('click', buttonSubtractionFunctionality);
		buttonMultiplication.addEventListener('click', buttonMultiplicationFunctionality);
		buttonDivision.addEventListener('click', buttonDivisionFunctionality);
		buttonFloating.addEventListener('click', buttonFloatingFunctionality);
		buttonBackspace.addEventListener('click', buttonBackspaceFunctionality);
		buttonClear.addEventListener('click', buttonClearFunctionality);
		buttonEquals.addEventListener('click', buttonEqualsFunctionality);
		buttonNumLock.addEventListener('click', buttonNumLockFunctionality);
  };

	//HIDE DISPLAY

	function hideOnDisplay() {
		button0.removeEventListener('click', button0Functionality);
		button1.removeEventListener('click', button1Functionality);
		button2.removeEventListener('click', button2Functionality);
		button3.removeEventListener('click', button3Functionality);
		button4.removeEventListener('click', button4Functionality);
		button5.removeEventListener('click', button5Functionality);
		button6.removeEventListener('click', button6Functionality);
		button7.removeEventListener('click', button7Functionality);
		button8.removeEventListener('click', button8Functionality);
		button9.removeEventListener('click', button9Functionality);
		buttonAddition.removeEventListener('click', buttonAdditionFunctionality);
		buttonSubtraction.removeEventListener('click', buttonSubtractionFunctionality);
		buttonMultiplication.removeEventListener('click', buttonMultiplicationFunctionality);
		buttonDivision.removeEventListener('click', buttonDivisionFunctionality);
		buttonFloating.removeEventListener('click', buttonFloatingFunctionality);
		buttonBackspace.removeEventListener('click', buttonBackspaceFunctionality);
		buttonClear.removeEventListener('click', buttonClearFunctionality);
		buttonEquals.removeEventListener('click', buttonEqualsFunctionality);
		buttonNumLock.removeEventListener('click', buttonNumLockFunctionality);
	};

	//CONTROL AUDIO ON CLICK

	function playBeep() {
		audioBeep.currentTime = 0;
		audioBeep.volume = 0.1;
		audioBeep.playbackRate = 2;
		audioBeep.play();
	};

	function playAudioOnClick() {
		button0.addEventListener('click', playBeep);
		button1.addEventListener('click', playBeep);
		button2.addEventListener('click', playBeep);
		button3.addEventListener('click', playBeep);
		button4.addEventListener('click', playBeep);
		button5.addEventListener('click', playBeep);
		button6.addEventListener('click', playBeep);
		button7.addEventListener('click', playBeep);
		button8.addEventListener('click', playBeep);
		button9.addEventListener('click', playBeep);
		buttonAddition.addEventListener('click', playBeep);
		buttonSubtraction.addEventListener('click', playBeep);
		buttonMultiplication.addEventListener('click', playBeep);
		buttonDivision.addEventListener('click', playBeep);
		buttonFloating.addEventListener('click', playBeep);
		buttonBackspace.addEventListener('click', playBeep);
		buttonClear.addEventListener('click', playBeep);
		buttonEquals.addEventListener('click', playBeep);
		buttonNumLock.addEventListener('click', playBeep);
	};

	function disablePlayAudioOnClick() {
		button0.removeEventListener('click', playBeep);
		button1.removeEventListener('click', playBeep);
		button2.removeEventListener('click', playBeep);
		button3.removeEventListener('click', playBeep);
		button4.removeEventListener('click', playBeep);
		button5.removeEventListener('click', playBeep);
		button6.removeEventListener('click', playBeep);
		button7.removeEventListener('click', playBeep);
		button8.removeEventListener('click', playBeep);
		button9.removeEventListener('click', playBeep);
		buttonAddition.removeEventListener('click', playBeep);
		buttonSubtraction.removeEventListener('click', playBeep);
		buttonMultiplication.removeEventListener('click', playBeep);
		buttonDivision.removeEventListener('click', playBeep);
		buttonFloating.removeEventListener('click', playBeep);
		buttonBackspace.removeEventListener('click', playBeep);
		buttonClear.removeEventListener('click', playBeep);
		buttonEquals.removeEventListener('click', playBeep);
		buttonNumLock.removeEventListener('click', playBeep);
	};


	// KEYBOARD SUPPORT VALUES 

	function keydownChecker (e) {
		switch (e.code) {
			case 'Numpad0':
				button0Functionality();
				break;
			case 'Numpad1':
				button1Functionality();
				break;
			case 'Numpad2':
				button2Functionality();
				break;
			case 'Numpad3':
				button3Functionality();
				break;
			case 'Numpad4':
				button4Functionality();
				break;
			case 'Numpad5':
				button5Functionality();
				break;
			case 'Numpad6':
				button6Functionality();
				break;
			case 'Numpad7':
				button7Functionality();
				break;
			case 'Numpad8':
				button8Functionality();
				break;
			case 'Numpad9':
				button9Functionality();
				break;
			case 'NumpadAdd':
				buttonAdditionFunctionality();
				break;
			case 'NumpadSubtract':
				buttonSubtractionFunctionality();
				break;
			case 'NumpadMultiply':
				buttonMultiplicationFunctionality();
				break;
			case 'NumpadDivide':
				buttonDivisionFunctionality();
				break;
			case 'NumpadDecimal':
				buttonFloatingFunctionality();
				break;
			case 'NumpadEnter':
				buttonEqualsFunctionality();
				break;
		};
	};

	// ENABLE OR DISABLE KEYBOARD SUPPORT

	function keyboardSupport(n) {
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
		};
	};

//SOUND FX ON/OFF

function enableDisableSFX() {
	console.log('sound');
	
	let soundCounter = 1;
	buttonSFX.addEventListener('click', ()=> {
		soundCounter++;
		if (soundCounter % 2 == 0) {
			playAudioOnClick();
		}else {
			disablePlayAudioOnClick();
		};
	});
};

//LIGHTS CONTROL

function lightsOn() {
	display.classList.add('display_lights');
	button0.classList.add('keys_lights');
	button1.classList.add('keys_lights');
	button2.classList.add('keys_lights');
	button3.classList.add('keys_lights');
	button4.classList.add('keys_lights');
	button5.classList.add('keys_lights');
	button6.classList.add('keys_lights');
	button7.classList.add('keys_lights');
	button8.classList.add('keys_lights');
	button9.classList.add('keys_lights');
	buttonAddition.classList.add('keys_lights');
	buttonSubtraction.classList.add('keys_lights');
	buttonMultiplication.classList.add('keys_lights');
	buttonDivision.classList.add('keys_lights');
	buttonFloating.classList.add('keys_lights');
	buttonBackspace.classList.add('keys_lights');
	buttonClear.classList.add('keys_lights');
	buttonEquals.classList.add('keys_lights');
	buttonNumLock.classList.add('keys_lights');
	buttonSFX.classList.add('keys_lights');
	buttonLights.classList.add('keys_lights');
	buttonPower.classList.add('keys_lights');
	console.log('let there be light');
};

function lightsOff() {
	display.classList.remove('display_lights');
	button0.classList.remove('keys_lights');
	button1.classList.remove('keys_lights');
	button2.classList.remove('keys_lights');
	button3.classList.remove('keys_lights');
	button4.classList.remove('keys_lights');
	button5.classList.remove('keys_lights');
	button6.classList.remove('keys_lights');
	button7.classList.remove('keys_lights');
	button8.classList.remove('keys_lights');
	button9.classList.remove('keys_lights');
	buttonAddition.classList.remove('keys_lights');
	buttonSubtraction.classList.remove('keys_lights');
	buttonMultiplication.classList.remove('keys_lights');
	buttonDivision.classList.remove('keys_lights');
	buttonFloating.classList.remove('keys_lights');
	buttonBackspace.classList.remove('keys_lights');
	buttonClear.classList.remove('keys_lights');
	buttonEquals.classList.remove('keys_lights');
	buttonNumLock.classList.remove('keys_lights');
	buttonSFX.classList.remove('keys_lights');
	buttonLights.classList.remove('keys_lights');
	buttonPower.classList.remove('keys_lights');
	console.log('let there be NO light');
};

function lightsControl() {
	console.log('light');
	let lightCounter = 1;
	buttonLights.addEventListener('click', ()=> {
		lightCounter++;
		if (lightCounter % 2 == 0) {
			lightsOn();
		}else {
			lightsOff();
		};
	});
};

// TURN ON/OFF
function powerOnOff() {
console.log('asd')
	
	let powerCounter = 1;
	buttonPower.addEventListener('click', () => {
		powerCounter++;
		if (powerCounter % 2 == 0) {
			console.log(1);
			showOnDisplay();
			document.addEventListener('keydown', keyboardSupport);
			enableDisableSFX();
			lightsControl();
		} else {
			console.log(2);
			hideOnDisplay();
			document.removeEventListener('keydown', keydownChecker);
			disablePlayAudioOnClick();
			lightsOff();
			displayValue.splice(0,displayValue.length);
			return display.textContent = displayValue.join('');
		};
	});
};

powerOnOff();

};

initiateCalculator();