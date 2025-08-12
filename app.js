let displayValue = '';
let firstNumber = 0;
let operator = '';

// Add numbers to display
function addToDisplay(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}

// Set operator (+, -, *, /)
function setOperator(op) {
    firstNumber = parseFloat(displayValue);
    operator = op;
    displayValue = '';
}

// Calculate result
function calculate() {
    const secondNumber = parseFloat(displayValue);
    let result = 0;
    
    if (operator === '+') result = firstNumber + secondNumber;
    if (operator === '-') result = firstNumber - secondNumber;
    if (operator === '*') result = firstNumber * secondNumber;
    if (operator === '/') result = firstNumber / secondNumber;
    
    document.getElementById('display').value = result;
    displayValue = result.toString();
}

// Clear display
function clearDisplay() {
    displayValue = '';
    firstNumber = 0;
    operator = '';
    document.getElementById('display').value = '0';
}