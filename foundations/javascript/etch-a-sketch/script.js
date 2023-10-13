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

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let cellsPerRow = prompt("How many cells should be in each row?");

    while ((parseInt(cellsPerRow) > 100) || (parseInt(cellsPerRow) < 1)) {
        cellsPerRow = prompt("Invalid number of cells! Pick a number between 1 and 100");
    }

    parseInt(cellsPerRow);

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



    const divs = document.querySelectorAll('.cell');
    divs.forEach(div => {
        div.addEventListener('mouseover', e => {
            div.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
            e.stopPropagation();
        });
    });

    e.preventDefault();
});








