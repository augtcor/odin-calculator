let displayValue = 0;

let numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener('click', function () {
        displayValue = this.id;
        let display = document.getElementById('display');
        let displayNumber = document.createTextNode(displayValue);
        display.appendChild(displayNumber);
    })
});



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {
    let operation;
    if (operation === "+") {
        add();
    } else if (operation === "-") {
        subtract();
    } else if (operation === "*") {
        multiply();
    } else if (operation === "/") {
        divide();
    }
}