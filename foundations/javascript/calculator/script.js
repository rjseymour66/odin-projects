const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const percentButton = document.querySelector("#percent");
const signButton = document.querySelector("#swap-sign");

let firstOperand = "";
let secondOperand = "";
let operator = "";

let displayText = "";
let displayValue = 0;

let resetDisplay = false;

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

let updateDisplayText = (text) => {
    display.textContent = text;
};

let getDisplayValue = (text) => {
    let result = parseFloat(text);
    displayText = "";
    return result;
};

percentButton.addEventListener("click", (e) => {
    displayValue = getDisplayValue(display.textContent);
    let percent = displayValue / 100;
    updateDisplayText(percent.toString());
});

signButton.addEventListener("click", (e) => {
    let swapped = parseFloat(display.textContent) * -1;
    displayText = swapped;
    updateDisplayText(swapped.toString());
});

numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // reset display
        if (resetDisplay === true) {
            updateDisplayText("");
            resetDisplay = false;
        }

        if (button.textContent === "." && displayText.includes(".")) return;

        // text sizes

        displayText += button.textContent;
        updateDisplayText(displayText);

        e.stopPropagation();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        displayValue = getDisplayValue(displayText);

        if (isNaN(displayValue)) return;

        if (firstOperand === "") {
            firstOperand = displayValue;
            operator = button.textContent;
        } else {
            secondOperand = displayValue;
            firstOperand = operate(firstOperand, secondOperand, operator);
            updateDisplayText(firstOperand.toString());
            operator = button.textContent;
        }

        resetDisplay = true;
        e.stopPropagation();
    });
});

equalsButton.addEventListener("click", (e) => {
    if (firstOperand === "") return;

    displayValue = getDisplayValue(displayText);
    secondOperand = displayValue;
    let result = operate(firstOperand, secondOperand, operator);
    updateDisplayText(result.toString());

    e.stopPropagation();
});

clearButton.addEventListener("click", (e) => {
    firstOperand = "";
    secondOperand = "";
    operator = "";

    displayText = "";
    displayValue = 0;

    resetDisplay = false;

    display.textContent = "";
});