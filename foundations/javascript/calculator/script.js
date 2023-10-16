const firstNumber = 0;
const operator = "+";
const secondNumber = 0;

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => {

        let first = 0;
        let second = 0;

        if (button.classList.contains('operator')) {
            first = parseFloat(display.textContent);
            console.log(`first: ${first}`);
        }

        if (first != 0 && button.classList.contains('number')) {
            display.textContent = "";
            second = parseInt(display.textContent);
            console.log(`first: ${second}`);
        }

        if (button.classList.contains('equals')) {


        }

        if (button.classList.contains('clear')) clearDisplay();


        if (button.classList.contains('number'))
            display.textContent += button.textContent;

        e.stopPropagation();
    });
});


let operate = (operator, first, second, func) => {

};


let clearDisplay = () => {
    display.textContent = "";
};



// basic functions
let add = (a, b) => {
    return a + b;
};

let subtract = (a, b) => {
    return a - b;
};

let multiply = (a, b) => {
    return a * b;
};

let divide = (numerator, denominator) => {
    if (denominator === 0) return "ERROR";
    return numerator / denominator;
};