// Operational functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b){
    if (operator === '+')
        return add(a,b);
    else if (operator === '-')
        return subtract(a,b);
    else if (operator === '*')
        return multiply(a,b);
    else if (operator === '/')
        return divide(a,b);
    else
        return null;
}

const numButtons = document.querySelectorAll('.num');
let currentDisplay = document.querySelector('.currentOperations');
let previousDisplay = document.querySelector('.previousOperations');
const clearButton = document.querySelector('.clear');
let inputtedOperation;

function clear() {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
}

//Clear Button function
clearButton.addEventListener('click', clear);


//Number buttons
numButtons.forEach(button => button.addEventListener('click', () => {
    currentDisplay = document.querySelector('.currentOperations')
    console.log(button.textContent)
    inputtedOperation = currentDisplay.textContent += button.textContent
}));



