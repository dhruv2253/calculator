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
const delButton = document.querySelector('.del');
const periodButton = document.querySelector('.period');
let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false;
function clear() {
    currentDisplay.textContent = "0";
    previousDisplay.innerHTML = '&nbsp;';
    firstOperand = ''
    secondOperand = ''
    currentOperation = null;
}

//Clear Button function
clearButton.addEventListener('click', clear);
delButton.addEventListener('click', del);
periodButton.addEventListener('click', appendPeriod);
function appendNumber(num) {
    if (currentDisplay.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentDisplay.textContent += num;
}

//Number buttons
numButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent) 
        )
);

function resetScreen() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
  }


function del() {
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1);
}

function appendPeriod(){
    if (shouldResetScreen) resetScreen()
    if (currentDisplay.textContent.includes('.'))
        return;
    currentDisplay.textContent += '.';
}

operationButtons.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));

equalButton.addEventListener('click', eval);
 
function eval() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '/' && currentDisplay.textContent === '0'){
        alert("Cannot divide by 0")
        return
    }
    secondOperand = currentDisplay.textContent;
    currentDisplay.textContent = roundR(operate(currentOperation, parseFloat(firstOperand), parseFloat(secondOperand)));
    previousDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;

}

function roundR(num) {
    return Math.round(num * 1000) / 1000;
}

function setOperation(operator) {
    if (currentOperation !== null)
         eval()
    firstOperand = currentDisplay.textContent;
    currentOperation = operator;
    previousDisplay.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
}