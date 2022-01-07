const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-sign');
var calculation = [];
const clear = document.querySelector('.clear');

//alerts are commented out. 
//NUMBER BUTTONS

function pushNumber (event) {
        alert(this.value);
        calculation.push(this.value);
};

numButtons.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});

//OPERATOR BUTTONS

function pushOperator (event) {
        alert(this.value);
            calculation.push(this.value);
};

opButtons.forEach(function (operator) {
    operator.addEventListener('click', this.pushOperator);
})

//CLEAR FUNCTION
function clearDisplay(event) {
    calculation = [];
    alert('clear');
}

clear.addEventListener('click', this.clearDisplay);

//ACTUAL CALCULATIONS

function calculate (arr) {
    var arr = calculation;
    let operators = "+-*/"; 
    let numbers = '123456789'
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
} else if (op === '-') {
    result = (digit2 - digit1);
} else if (op === '*') {
    result = (digit2 * digit1);
}else if (op === '/') {
    result = digit2 / digit1;
}
console.log(result);
alert(result);
digit1 = [];
op = '';
digit2 = [];

};

equalButton.addEventListener('click', this.calculate);

// console.log(calculation);