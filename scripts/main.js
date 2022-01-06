const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const e = document.querySelector('.equal-sign');
console.log('e');

function pushNumber (event) {
        alert(this.value);
};

nums.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});

function pushOperator (event) {
        alert(this.value);
};

operators.forEach(function (operator) {
    operator.addEventListener('click', this.pushOperator);
})

function calculate (event) {
    alert("=");
};

e.addEventListener('click', this.calculate);