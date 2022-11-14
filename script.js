let displayValue = 0;
let value = 0;
let operation;

let display = document.getElementById('display');
let displayNumber = document.createTextNode(displayValue);
display.appendChild(displayNumber);

let numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener('click', showNumbers);
});

function showNumbers() {
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
        value += displayValue;
    }    
}

let clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.innerText = '';
    displayNumber.nodeValue = 0;
    displayValue = 0;
    value = 0;
    display.appendChild(displayNumber);
}

function operate() {
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