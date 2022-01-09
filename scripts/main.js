
//removed alerts as I went along. 

const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const posNegButton = document.querySelector('.plus-minus');
const percentButton = document.querySelector('.percent');
const decimalButton = document.querySelector('.decimal')
const squareRootButton  = document.querySelector('.square');

var display = document.querySelector('.calculator-screen');
var calculation = [];
var displayArr = [];
const operators = "+-*/"; 

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
decimalButton.addEventListener('click', this.addDecimal);
percentButton.addEventListener('click', changeToPercent);
squareRootButton.addEventListener('click', this.square)

//CHANGE DISPLAY FUNCTION

function changeDisplay(event) {
    display.value = displayArr.join('');
};

//BUTTON FUNCTIONS

function pushNumber (event) { 
    if (operators.includes(displayArr[0])) {
        calculation.push(displayArr[0]);
        displayArr = [this.value];
    } else {
    displayArr.push(this.value);
    };
    changeDisplay();
console.log(displayArr);
console.log(calculation);
};

function pushOperator (event) {
    if (calculation.includes("-") || calculation.includes("+") || calculation.includes("*") || calculation.includes("/")) {
        calculate();
        calculation = [displayArr];
        displayArr = [this.value];
    } else {
    for (let x = 0; x < displayArr.length; x++) {
        calculation.push(displayArr[x]);
    };
        displayArr = [this.value];
        changeDisplay();
        console.log(displayArr);
        console.log(calculation);
    };
};
function clearDisplay(event) {
    calculation = [];
    displayArr = [];
    display.value = "0";
}

function togglePosNeg (event) {
    let num = displayArr[0];
    num = num.toString();
    // console.log(num);
    switch (num) {
        case '-':
        case '+':
        case '*':
        case '/':
            break;
        default: 
        if (num.includes('-')) {
            displayArr[0]=num.slice(1);
        } else {
        displayArr[0]=`-${displayArr[0]}`;
        };
        changeDisplay();
        // console.log (num);
        break;
    };
};

//DECIMAL

function addDecimal (event) {
    displayArr.push(".");
    changeDisplay();
};

//CHANGE TO PERCENT
function changeToPercent () {
    let num = displayArr.join('');
     num = parseFloat(num);
    if (Number.isNaN(num)=== false) {
    displayArr[0] = displayArr[0]*0.01;
    changeDisplay();
};
};

//EQUAL SIGN 

function calculate (arr) {
    for (let x = 0; x < displayArr.length; x++) {
        calculation.push(displayArr[x]);
    };
    console.log(calculation);
    var arr = calculation;
    var digit1 = [];
    var op = '';
    var digit2 = [];
    var result = '0';

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

console.log(digit2);
console.log(digit1);

digit2 = parseFloat(digit2);
digit1 = parseFloat(digit1);

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
console.log(result);
console.log(calculation);

calculation = [];
displayArr = [];
displayArr.push(result);

// console.log(calculation);

digit1 = [];
op = '';
digit2 = [];
changeDisplay();
};

//SQUARE ROOT

function square (arr) {
    for (let x = 0; x < displayArr.length; x++) {
        calculation.push(displayArr[x]);
    };

calculation = calculation.join('');
calculation = parseFloat(calculation);
let result = Math.sqrt(calculation);

calculation = [];
displayArr = [];
displayArr.push(result);

changeDisplay();
};

//

