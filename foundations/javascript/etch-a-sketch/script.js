const container = document.querySelector('.grid-container');
const button = document.querySelector('button');

// setup grid size
let gridSideLength = 960;

container.style.width = `${gridSideLength}px`;
container.style.height = `${gridSideLength}px`;


let getRandomRGB = () => {
    return Math.floor(Math.random() * 255) + 1;
};

button.addEventListener('click', e => {

    resetBoard();
    let cellsPerRow = getCellsPerRow();
    createBoard(cellsPerRow);
    addHoverEffectToCells();
    e.preventDefault();
});


let resetBoard = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

let getCellsPerRow = () => {
    let cellsPerRow = prompt("How many cells should be in each row?");

    while ((parseInt(cellsPerRow) > 100) || (parseInt(cellsPerRow) < 1)) {
        cellsPerRow = prompt("Invalid number of cells! Pick a number between 1 and 100");
    }

    parseInt(cellsPerRow);

    return cellsPerRow;
};

let createDivs = num => {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
};


let createBoard = num => {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;


    let numDivs = num ** 2;
    createDivs(numDivs);
};

let addHoverEffectToCells = () => {
    const divs = document.querySelectorAll('.cell');
    divs.forEach(div => {
        div.addEventListener('mouseover', e => {
            div.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
            e.stopPropagation();
        });
    });
};