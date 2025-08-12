let displayValue = '';
let firstNumber = 0;
let operator = '';


function addToDisplay(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}


function setOperator(op) {
    firstNumber = parseFloat(displayValue);
    operator = op;
    displayValue = '';
}


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


function clearDisplay() {
    displayValue = '';
    firstNumber = 0;
    operator = '';
    document.getElementById('display').value = '0';

}
