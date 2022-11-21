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
    else if (operator === 'x')
        return multiply(a,b);
    else if (operator === '/')
        return divide(a,b);
    else
        return null;
}

const numButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.operation');
let currentDisplay = document.querySelector('.currentOperations');
let previousDisplay = document.querySelector('.previousOperations');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
let firstOperand;
let secondOperand;
let currentOperation;
function clear() {
    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
    firstOperand = ''
    secondOperand = ''
    currentOperation = ''
}

//Clear Button function
clearButton.addEventListener('click', clear);


//Number buttons
numButtons.forEach(button => button.addEventListener('click', () => {
    currentDisplay = document.querySelector('.currentOperations')
    console.log(button.textContent)
    currentDisplay.textContent += button.textContent

}));



operationButtons.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));

equalButton.addEventListener('click', eval);
 
function eval() {
    if (currentOperation === null) return
    secondOperand = currentDisplay.textContent;
    currentDisplay.textContent = operate(currentOperation, parseInt(firstOperand), parseInt(secondOperand));
    previousDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}

function setOperation(operator) {
    if (currentOperation === null) return
    firstOperand = currentDisplay.textContent;
    currentOperation = operator;
    previousDisplay.textContent = `${firstOperand} ${currentOperation}`;
    currentDisplay.textContent = "";
}