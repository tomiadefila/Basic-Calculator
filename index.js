let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    currentOperation = operation;
    currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}
function updateDisplay() {
    display.textContent = currentInput || '0';
}