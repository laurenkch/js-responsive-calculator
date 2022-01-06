const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal-sign');
var calculation = [];


//alerts commented out. 

function pushNumber (event) {
        // alert(this.value);
        calculation.push(this.value);
};

nums.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});

function pushOperator (event) {
//         alert(this.value);
            calculation.push(this.value);
};

operators.forEach(function (operator) {
    operator.addEventListener('click', this.pushOperator);
})

function calculate (event) {
    alert("=");
};
equal.addEventListener('click', this.calculate);

console.log(calculation);

