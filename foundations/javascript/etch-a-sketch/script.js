const container = document.querySelector('.grid-container');

let sideLength = 800;
let cellsPerRow = 64;

container.style.width = `${sideLength}px`;
container.style.height = `${sideLength}px`;
container.style.gridTemplateColumns = `repeat(${cellsPerRow}, 1fr)`;
container.style.gridTemplateRows = `repeat(${cellsPerRow}, 1fr)`;

let createDivs = (num) => {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
};

let numDivs = cellsPerRow ** 2;

createDivs(numDivs);