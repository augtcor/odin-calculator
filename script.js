let displayValue = 0;
let values;
let value1 = 0;
let value2 = 0;
let result;
let dValues;

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
        value1 += displayValue;
        dValues = display.innerText;
    } else {
        displayValue = this.id;
        displayNumber = document.createTextNode(displayValue);
        display.appendChild(displayNumber);
        value1 += displayValue;
        dValues = display.innerText;
    }    
}

let clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.innerText = '';
    displayNumber.nodeValue = 0;
    displayValue = 0;
    value1 = 0;
    value2 = 0;
    display.appendChild(displayNumber);
}

let operations = document.querySelectorAll('.operations');
operations.forEach(operation => {
    operation.addEventListener('click', showOperator);
});

function showOperator() {
    if (this.id === 'add') {
        display.appendChild(document.createTextNode('+'));
    } else if (this.id === 'subtract') {
        display.appendChild(document.createTextNode('-'));
    } else if (this.id === 'multiply') {
        display.appendChild(document.createTextNode('*'));
    } else if (this.id === 'divide') {
        display.appendChild(document.createTextNode('/'));
    }
}

let equal = document.getElementById('equal');
equal.addEventListener('click', operate);

function operate(operation, value1, value2) {
    if (dValues.includes('+')) {
        operation = 'add';
    } else if (dValues.includes('-')) {
        operation = 'subtract';
    } else if (dValues.includes('*')) {
        operation = 'multiply';
    } else if (dValues.includes('/')) {
        operation = 'divide';
    }

    switch (operation) {
        case 'add':
            values = dValues.split('+');
            value1 = values[0];
            value2 = values[1];
            result = add(+value1, +value2);
            display.innerText = '';
            display.appendChild(document.createTextNode(result));
            break;
        case 'subtract':
            values = dValues.split('-');
            value1 = values[0];
            value2 = values[1];
            result = subtract(+value1, +value2);
            display.innerText = '';
            display.appendChild(document.createTextNode(result));
            break;
        case 'multiply':
            values = dValues.split('*');
            value1 = values[0];
            value2 = values[1];
            result = multiply(+value1, +value2);
            display.innerText = '';
            display.appendChild(document.createTextNode(result));
            break;
        case 'divide':
            values = dValues.split('/');
            value1 = values[0];
            value2 = values[1];
            if (+value2 === 0) {
                display.innerText = '';
                display.appendChild(document.createTextNode('nope'));
            } else {
                result = divide(+value1, +value2);
                display.innerText = '';
                display.appendChild(document.createTextNode(result));
            }    
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