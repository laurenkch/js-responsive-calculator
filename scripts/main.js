const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

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