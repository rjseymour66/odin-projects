const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let firstOperand = 0;
let secondOperand = 0;
let operator = "";
let displayValue = "";

// basic functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (numerator, denominator) => {
    if (denominator === 0) return "Error";
    return numerator / denominator;
};

let operate = (first, second, op) => {
    let result = 0;
    // switch for operators
    switch (op) {
        case "÷":
            result = divide(first, second);
            break;
        case "×":
            result = multiply(first, second);
            break;
        case "–":
            result = subtract(first, second);
            break;
        case "+":
            result = add(first, second);
            break;
        default:
            display.textContent = "Error";
    }
    return result;
};

numberButtons.forEach(button => {
    button.addEventListener('click', e => {


        if ((firstOperand.toString() === displayValue ||
            secondOperand.toString() === displayValue) && operator !== "") {
            displayValue = "";
        }

        // add button value to display
        displayValue += button.textContent;

        // update UI
        updateDisplay(displayValue);

        e.stopPropagation();
    });
});


let updateDisplay = (dVal) => {

    display.textContent = dVal;
};

operatorButtons.forEach(button => {
    button.addEventListener('click', e => {

        assignDisplayToOperands();

        operator = button.textContent;

        e.stopPropagation();
    });
});

let assignDisplayToOperands = () => {

    if (firstOperand === 0) {
        firstOperand = parseFloat(display.textContent);
    } else if (secondOperand === 0) {
        secondOperand = parseFloat(display.textContent);
    }

    if (firstOperand !== 0 && secondOperand !== 0) {
        firstOperand = operate(firstOperand, secondOperand, operator);
        secondOperand = 0;
        display.textContent = firstOperand.toString();
    }
};


equalsButton.addEventListener('click', e => {
    console.log('**** In equals ****');
    assignDisplayToOperands();

    if (secondOperand === 0) display.textContent = firstOperand;
    else display.textContent = operate(firstOperand, secondOperand, operator);

    e.preventDefault();
});

clearButton.addEventListener('click', e => {
    firstOperand = 0;
    secondOperand = 0;
    operator = "";
    displayValue = "";
    display.textContent = "";
});