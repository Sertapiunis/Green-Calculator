const clearBtn = document.getElementById('clear_btn');
const backspaсeBtn = document.getElementById('backspace_btn');
const percentBtn = document.getElementById('percent_btn');
const divideBtn = document.getElementById('divide_btn');
const sevenBtn = document.getElementById('seven_btn');
const eightBtn = document.getElementById('eight_btn');
const nineBtn = document.getElementById('nine_btn');
const minusBtn = document.getElementById('minus_btn');
const fourBtn = document.getElementById('four_btn');
const fiveBtn = document.getElementById('five_btn');
const sixBtn = document.getElementById('six_btn');
const multBtn = document.getElementById('mult_btn');
const oneBtn = document.getElementById('one_btn');
const twoBtn = document.getElementById('two_btn');
const threeBtn = document.getElementById('three_btn');
const plusBtn = document.getElementById('plus_btn');
const plusMinusBtn = document.getElementById('plus_minus_btn');
const zeroBtn = document.getElementById('zero_btn');
const pointBtn = document.getElementById('point_btn');
const resultBtn = document.getElementById('result_btn');
const userInput = document.getElementById('input-num');
const outputDiv = document.getElementById('output_div');

let mathAction = 'nothing';
let commonNum = 0;

const mathBlock = {
	plus: () => {
		commonNum += Number(userInput.value);
		outputDiv.innerHTML = commonNum;
		userInput.value = ''
	},
	minus: () => {
		commonNum -= Number(userInput.value);
		outputDiv.innerHTML = commonNum;
		userInput.value = ''
	},
	mult: () => {
		commonNum = commonNum * Number(userInput.value);
		outputDiv.innerHTML = commonNum;
		userInput.value = ''
	},
	divide: () => {
		if (Number(userInput.value) !== 0) {
			commonNum = Number((commonNum / (userInput.value)).toFixed(3));
			outputDiv.innerHTML = commonNum;
			userInput.value = ''
		} else {
			outputDiv.innerHTML = 'impossible to divide on 0!';
			userInput.value = '';
			mathAction = 'nothing';
			commonNum = 0;

		}
	},
	percent: () => {
		commonNum = commonNum * Number(userInput.value) / 100;
		outputDiv.innerHTML = commonNum;
		userInput.value = ''
	},
	nothing: () => {
		commonNum = Number(userInput.value);
		outputDiv.innerHTML = commonNum;
		userInput.value = ''
	},
}

oneBtn.addEventListener('click', () => {
	userInput.value += 1
})
twoBtn.addEventListener('click', () => {
	userInput.value += 2
})
threeBtn.addEventListener('click', () => {
	userInput.value += 3
})
fourBtn.addEventListener('click', () => {
	userInput.value += 4
})
fiveBtn.addEventListener('click', () => {
	userInput.value += 5
})
sixBtn.addEventListener('click', () => {
	userInput.value += 6
})
sevenBtn.addEventListener('click', () => {
	userInput.value += 7
})
eightBtn.addEventListener('click', () => {
	userInput.value += 8
})
nineBtn.addEventListener('click', () => {
	userInput.value += 9
})
zeroBtn.addEventListener('click', () => {
	userInput.value += 0
})
pointBtn.addEventListener('click', () => {
	userInput.value += '.'
})
plusMinusBtn.addEventListener('click', () => {
	if (userInput.value === '') { userInput.value += '-' }
})

clearBtn.addEventListener('click', () => {
	userInput.value = '';
	outputDiv.innerHTML = 'Green Calculator ';
	mathAction = 'nothing';
	commonNum = 0;
})

backspaсeBtn.addEventListener('click', () => {
	userInput.value = userInput.value.slice(0, -1);
})

plusBtn.addEventListener('click', () => {
	if (userInput.value !== '') {
		mathBlock[mathAction]()
		mathAction = 'plus'
	}
})

minusBtn.addEventListener('click', () => {
	if (userInput.value !== '') {
		mathBlock[mathAction]()
		mathAction = 'minus'
	}
})

multBtn.addEventListener('click', () => {
	if (userInput.value !== '') {
		mathBlock[mathAction]()
		mathAction = 'mult'
	}
})

divideBtn.addEventListener('click', () => {
	if (userInput.value !== '') {
		mathBlock[mathAction]()
		mathAction = 'divide'
	}
})

percentBtn.addEventListener('click', () => {
	if (userInput.value !== '') {
		mathBlock[mathAction]();
		mathAction = 'percent'
	}
})

resultBtn.addEventListener('click', () => {
	mathBlock[mathAction]();
	mathAction = 'nothing';
	userInput.value = commonNum
})

