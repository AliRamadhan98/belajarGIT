
//querySelectorAll digunakan saat Anda ingin mendapatkan beberapa element
//dan querySelector digunakan saat Anda ingin mendapatkan satu jenis element.

let prevNumber = ''
let currentnumber = '0'
let calculationOperator = ''

const inputNumber = (number)=> {
	if (currentnumber === '0'){
		currentnumber = number
	} else {
		currentnumber += number
	}
}

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
	calculatorScreen.value = number
}


const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=> {
	number.addEventListener("click",(event) => {
		inputNumber(event.target.value)
		updateScreen(currentnumber)
	})
})


const inputOperator = (operator)=> {
	if(calculationOperator === '') {
		prevNumber = currentnumber	
	}
	calculationOperator = operator
	currentnumber = ''
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=> {
	operator.addEventListener("click", (event)=> {
		inputOperator(event.target.value)
	})
})


const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', (event)=> {
	calculate()
	updateScreen(currentnumber)
})

const calculate = ()=> {
	let result = ''
	switch(calculationOperator) {
		case "+" :
			result = parseFloat(prevNumber) + parseFloat(currentnumber)
			break
		case "-" :
			result = parseFloat(prevNumber) - parseFloat(currentnumber)
			break
		case "/" :
			result = parseFloat(prevNumber) / parseFloat(currentnumber)
			break
		case "*" :
			result = parseFloat(prevNumber) * parseFloat(currentnumber)
			break
		default:
			break
	}
	currentnumber = result
	calculationOperator = ''
}


const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentnumber)
})

const clearAll = () => {
	prevNumber = ''
	currentnumber = '0'
	calculationOperator = ''
}


const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentnumber)
})

const inputDecimal = (dot) => {
	if(currentnumber.includes('.')){
		return
	}
	currentnumber += dot
}