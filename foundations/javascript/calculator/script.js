const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let firstNumber = "";
let operator = "";
let secondNumber = "";

let displayValue = "";

// basic functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (numerator, denominator) => {
    if (denominator === 0) return "ERROR";
    return numerator / denominator;
};

let operate = (first, second, op) => {
    let result = 0;
    console.log(`op: ${op} type: ${typeof op}`);
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
            display.textContent = "ERROR";
    }
    console.log(`result: ${result}`);
    return result;
};


let clearDisplay = () => {
    display.textContent = "";
};

numberButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (display.textContent.length === 7) return;
        if (button.textContent === '.' && display.textContent.includes('.')) return;
        if (operator.length !== 0) clearDisplay();

        display.textContent += button.textContent;
        e.stopPropagation();
    });
});

clearButton.addEventListener('click', e => {
    clearDisplay();
    e.stopPropagation();
});

operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        // if secondNumber.length !=== 0
        firstNumber = parseFloat(display.textContent);
        operator = button.innerText;

        e.stopPropagation();
    });
});

equalsButton.addEventListener('click', e => {
    secondNumber = parseFloat(display.textContent);
    let result = operate(firstNumber, secondNumber, operator);
    clearDisplay();
    display.textContent = result;

    e.stopPropagation();
});