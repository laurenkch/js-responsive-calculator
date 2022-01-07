
//removed alerts as I went along. 

const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const posNegButton = document.querySelector('.plus-minus');
var display = document.querySelector('.calculator-screen');
var calculation = [];

//EVENT LISTENERS
numButtons.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});
opButtons.forEach(function (operator) {
    operator.addEventListener('click', this.pushOperator);
})
clear.addEventListener('click', this.clearDisplay);
equalButton.addEventListener('click', this.calculate);
posNegButton.addEventListener('click', togglePosNeg);

//BUTTON FUNCTIONS

function pushNumber (event) {
        calculation.push(this.value);
        changeDisplay();
};
function pushOperator (event) {
            calculation.push(this.value);
            changeDisplay();
};
function clearDisplay(event) {
    calculation = [];
    display.value = "0";
}
function changeDisplay(event) {
    display.value = calculation.join('');
};

function togglePosNeg (event) {
    console.log(calculation[0]);
    let num = calculation[0];
    if (num.includes('-')) {
        calculation[0]=num.slice(1);
    } else {
    calculation[0]=`-${calculation[0]}`;
    };
    console.log(calculation[0]);
    changeDisplay();
};
// = BUTTON FUNCTION

function calculate (arr) {
    var arr = calculation;
    let operators = "+-*/"; 
    var digit1 = [];
    var op = '';
    var digit2 = [];
    var result = '0';

// console.log(calculation);

for (let i = 0; i < arr.length; i++) {
    if (operators.includes(arr[i])) {
        op = arr[i];
        var digit2 = digit1;
        var digit1 = [];
    } else {
                digit1.push(arr[i]);
    };
};

digit2 = digit2.join('');
digit1 = digit1.join('');

digit2 = parseInt(digit2);
digit1 = parseInt(digit1);

// console.log(digit2);
// console.log(digit1);
// console.log(op);

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
// console.log(result);
// console.log(calculation);

calculation = [];
calculation.push(result);

// console.log(calculation);

digit1 = [];
op = '';
digit2 = [];
changeDisplay();
};



