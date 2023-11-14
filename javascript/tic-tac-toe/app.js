let Gameboard = () => {
    let board = [];

    // add an empty cell into each array element
    for (let i = 0; i < 9; i++) {
        board[i] = Cell();
    }

    // get the current state of the game
    const getBoard = () => board;

    // a
};


// a cell is a 
let Cell = () => {
    let value = "";

    const addValue = (letter) => {
        value = letter;
    };

    const getValue = () => value;

    return { addValue, getValue };
};

let players = () => {

};



let gameController = () => {

    // 1 2 3
    // 4 5 6
    // 7 8 9

    // winning combinations


};