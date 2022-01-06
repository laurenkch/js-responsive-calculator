const nums = document.querySelectorAll('.number');

function pushNumber (event) {
        alert(this.value);
};

nums.forEach(function (num) {
    num.addEventListener('click', this.pushNumber);
});


