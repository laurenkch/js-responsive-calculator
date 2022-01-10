(function() {
    'use strict';

//removed alerts as I went along. 

const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const posNegButton = document.querySelector('.plus-minus');
const percentButton = document.querySelector('.percent');
const decimalButton = document.querySelector('.decimal')
const oneDigitCalculationButtons  = document.querySelectorAll('.one-touch');
const display = document.querySelector('.calculator-screen');
const memoryFucntionButtons = document.querySelectorAll ('.memory');
var calculation = [];
var displayArr = [];
const operators = `+-*//^rt()`; 
var memory = [];

//
/*wanted to create a function to reduce to check if the calculation array 
had the operator values in it, instead of writing it all out each time. 
But couldn't get this to work the way. may come back to it.*/

function operatorTest () {
    if (calculation.includes("-") || calculation.includes("+") || calculation.includes("*") || calculation.includes("/"));
    return true;
};

//EVENT LISTENERS
numButtons.forEach(function (num) {
    num.addEventListener ('click', pushNumber);
});
opButtons.forEach(function (operator) {
    operator.addEventListener('click', pushOperator);
})
clear.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', calculate);
posNegButton.addEventListener('click', togglePosNeg);
decimalButton.addEventListener('click', addDecimal);
percentButton.addEventListener('click', changeToPercent);
oneDigitCalculationButtons.forEach(function (sym) {
    sym.addEventListener('click', oneDigitCalculations);
});
memoryFucntionButtons.forEach(function(mem){
    mem.addEventListener('click', memoryFunctions)
})

//UPDATE DISPLAY FUNCTION

function updateDisplay(event) {
    display.value = displayArr.join('');
};

//TEST FOR PI
function searchForPi () {
var index = displayArr.indexOf('pi');
if (index !== -1) {
displayArr[index] = Math.PI;
}; 
};

//TEST FOR e

function searchForE () {
    var index = displayArr.indexOf('e');
    if (index !== -1) {
    displayArr[index] = Math.E;
    }; 
    };

//PRESSING NUMBER BUTTONS

function pushNumber (event) { 
    if (operators.includes(displayArr[0])) {
        calculation.push(displayArr[0]);
        displayArr = [this.value];
    } else {
    displayArr.push(this.value);
    };
    searchForPi();
    searchForE();
    updateDisplay();
console.log(displayArr);
console.log(calculation);
};


// PRESSING FUNCTION BUTTONS

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
        updateDisplay();
        console.log(displayArr);
        console.log(calculation);
    };
};

// trying to get the operator test to work with this function. 

// function pushOperator (event) {
//     if (operatorTest() === 'true') {
//         calculate();
//         calculation = [displayArr];
//         displayArr = [this.value];
//     } else {
//     for (let x = 0; x < displayArr.length; x++) {
//         calculation.push(displayArr[x]);
//     };
//         displayArr = [this.value];
//         updateDisplay();
//         console.log(displayArr);
//         console.log(calculation);
//     };
// };

//CLEAR DISPLAY

function clearDisplay(event) {
    calculation = [];
    displayArr = [];
    display.value = "0";
};

function togglePosNeg (event) {
    let num = displayArr[0];
    num = num.toString();
    // console.log(num);
    switch (num) {
        case '-':
        case '+':
        case '*':
        case '/':
        case '^':
        case `rt()`:  
            break;
        default: 
        if (num.includes('-')) {
            displayArr[0]=num.slice(1);
        } else {
        displayArr[0]=`-${displayArr[0]}`;
        };
        updateDisplay();
        break;
    };
};

//DECIMAL

function addDecimal (event) {
    displayArr.push(".");
    updateDisplay();
};

//CHANGE TO PERCENT
function changeToPercent () {
    let num = displayArr.join('');
     num = parseFloat(num);
    if (Number.isNaN(num)=== false) {
    displayArr[0] = displayArr[0]*0.01;
    updateDisplay();
};
};

// EQUALS BUTTON

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
} else if (op === '-') {
    result = digit2 - digit1;
} else if (op === '*') {
    result = digit2 * digit1;
}else if (op === '/') {
    result = digit2 / digit1;
} else if (op === '^') {
    result = digit2 ** digit1;
} else if (op === `rt()`) { 
    /*this part was for caluclating roots of negative values, but for some reason it stops the continous caluclations so I am commenting it out for now. */

    // if (Math.sign(digit2)=== -1 && digit1 % 2 !== 0) {
    //     digit2 = digit2 * -1;
    //     result = digit2 ** (1/digit1);
    //     result = result * -1;
    // } else {
    result = digit2 ** (1/digit1);
    // } 
};

console.log(result);
console.log(calculation);

calculation = [];
displayArr = [];
displayArr.push(result);

// console.log(calculation);

digit1 = [];
op = '';
digit2 = [];
updateDisplay();
};

//ONE DIGIT FUNCTIONS

function oneDigitCalculations (event) {

    for (let x = 0; x < displayArr.length; x++) {
        calculation.push(displayArr[x]);
    };
    calculation = calculation.join('');
    calculation = parseFloat(calculation);
    var result = '0';

    switch (this.value) {
    case 'square':
    result = calculation**2;
    break;
    case 'cube':
    result = calculation**3;
    break;
    case 'square-root':
    result = Math.sqrt(calculation);
    break;
    case 'cube-root':
    result = Math.cbrt(calculation);
    break;
    case 'log':
    result = Math.log10(calculation);
    break;
    case 'sin':
    result = Math.sin(calculation);
    break;
    case 'cos':
    result = Math.cos(calculation);
    break;
    case 'tan':
    result = Math.tan(calculation);
    break;
    case 'sinh':
    result = Math.sinh(calculation);
    break;
    case 'cosh':
    result = Math.cosh(calculation);
    break;
    case 'tanh':
    result = Math.tanh(calculation);
    break;
    };
    calculation = [];
    displayArr = [];
    displayArr.push(result);

    updateDisplay();
    };

//Memory buttons
//gets a little funny with negatives, but will come back to that. 

function memoryFunctions (event) {
    let result = 0;

    switch (this.value) {
        case 'ms':
        for (let x = 0; x < displayArr.length; x++) {
                memory.push(displayArr[x]);
            };
        console.log(memory);
        break;

        case 'mc':
        memory = [];
        updateDisplay;
        break;

        case 'mr':
        if (operators.includes(displayArr[0])) {
            calculation.push(displayArr[0]);
            displayArr = [];
            displayArr = memory;
        } else {
        memory = memory.join('');
        memory = parseInt(memory);
        displayArr.push(memory);
        };
        display.value = displayArr
        break;

        case 'm+':
            for (let x = 0; x < displayArr.length; x++) {
                calculation.push(displayArr[x]);
            };
        memory = memory.join('');
        calculation = calculation.join('');
        memory = parseFloat(memory);
        calculation = parseFloat(calculation);

        result = calculation + memory;
        
        calculation = [];
        displayArr = [];
        memory = [memory];
        displayArr.push(result);

        updateDisplay();
        break;
    }; 
};

})();