
//removed alerts as I went along. 

const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
var display = document.querySelector('.calculator-screen');
var calculation = [];

//CHANGE DISPLAY TO CALULATIONS

function changeDisplay(value) {
    display.value = calculation.join('');
}

//NUMBER BUTTONS

function pushNumber (event) {
        calculation.push(this.value);
        changeDisplay();
};

numButtons.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});

//OPERATOR BUTTONS

function pushOperator (event) {
            calculation.push(this.value);
            changeDisplay();
};

opButtons.forEach(function (operator) {
    operator.addEventListener('click', this.pushOperator);
})

//CLEAR FUNCTION

function clearDisplay(event) {
    calculation = [];
    changeDisplay();
}

clear.addEventListener('click', this.clearDisplay);

//CALCULATIONS

function calculate (arr) {
    var arr = calculation;
    let operators = "+-*/"; 
    let numbers = '0123456789'
    var digit1 = [];
    var op = '';
    var digit2 = [];
    var result = '0';

for (let i = 0; i < arr.length; i++) {
    if (numbers.includes(arr[i])) {
        digit1.push(arr[i]);
    } else {
            op = arr[i];
            var digit2 = digit1;
            var digit1 = [];
    };
};

console.log(digit2);
console.log(digit1);
console.log(op);

digit2 = digit2.join('');
digit1 = digit1.join('');

digit2 = parseInt(digit2);
digit1 = parseInt(digit1);

console.log(digit2);
console.log(digit1);
console.log(op);

if (op === '+'){
    result = digit2 + digit1;
    changeDisplay();
} else if (op === '-') {
    result = digit2 - digit1;
} else if (op === '*') {
    result = digit2 * digit1;
}else if (op === '/') {
    result = digit2 / digit1;
}
display.value = result;
console.log(result);
digit1 = [];
op = '';
digit2 = [];

};

equalButton.addEventListener('click', this.calculate);

// SHOW RESULTS

