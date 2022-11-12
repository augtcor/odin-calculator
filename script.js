let displayValue = 0;
let value = 0;

let display = document.getElementById('display');
let displayNumber = document.createTextNode(displayValue);
display.appendChild(displayNumber);

let numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener('click', function() {
        if (displayValue === 0) {
            display.removeChild(displayNumber);
            displayValue = this.id;
            displayNumber = document.createTextNode(displayValue);
            display.appendChild(displayNumber);
            value += displayValue;
        } else {
            displayValue = this.id;
            displayNumber = document.createTextNode(displayValue);
            display.appendChild(displayNumber);
            console.log(displayNumber.nodeValue);
            value += displayValue;
        }    
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