const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal-sign');
var calculation = [];


//alerts commented out. 

function pushNumber (event) {
        alert(this.value);
        calculation.push(this.value);
};

nums.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});

function pushOperator (event) {
        alert(this.value);
            calculation.push(this.value);
};

operators.forEach(function (operator) {
    operator.addEventListener('click', this.pushOperator);
})

// function adds() {
    
// }
function calculate (arr) {
    let operators = "+-*/c"; 
    let numbers = '123456789'
    var empty = [];
    var op = '';
    var full = [];

for (let i = 0; i < arr.length; i++) {
    if (operators.includes(arr[i])) {
        op = arr[i];
        var full = empty;
        var empty = [];
    } else {
            empty.push(arr[i]);
    };
if (op = "+"){
    result = full.join + empty.join;
    alert(result);
} else if (op = "-") {
    result = full.join - empty.join;
    alert(result);
} else if (op = "*") {
    result = full.join * empty.join;
    alert(result);
}else if (op = "/") {
    result = full.join/empty.join;
    alert(result);
}else if (op = "C") {
    result = 0;
    alert(result);
}
empty = [];
op = '';
full = [];

}


// console.log(arr);
};





//     let result = 0;
//     if (calculation[i] === "+") {
//      result = calculation[0] + calculation[2]; 
//     } if (calculation[i] === "-") {
//         result = calculation[0] - calculation[3];
//     } if (calculation[i] === "*") {
//         result = calculation[0] * calculation[3];
//     } if (calculation[i] === "/") {
//         result = calculation[0]/calculation[3];
//     } if (calculation[i] === "C") {
//         result = 0;
//     }
//     alert(result);
// }
// }
equal.addEventListener('click', this.calculate);

// console.log(calculation);