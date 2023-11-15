let Square = () => {

    // default value for each Square
    let value = "";

    // change the value of the Square to a players marker
    const addPlayerMarker = (playerMarker) => {
        value = playerMarker;
    };

    // get the value of the Square
    const getValue = () => value;

    return { addPlayerMarker, getValue };
};

let Gameboard = () => {
    // create board array
    let board = [];

    // create array with 9 elements, each element stores a Square
    for (let i = 0; i < 9; i++) {
        board[i] = Square();
    }

    // get current state of board
    const getBoard = () => board;

    // make sure the Square is empty and then write the
    // players marker in the Square
    const acceptPlayerMarker = (selectedSquare, playerMarker) => {
        // get list of empty Squares
        const emptySquares = board.filter(square => square.getValue() === "");

        // if no empty Squares, return
        if (!emptySquares.length) return;

        // if the Square is empty, add the player's marker
        selectedSquare.addPlayerMarker(playerMarker);
    };

    // log current board to console
    const printBoard = () => {
        // create new array with Square values
        const boardWithSquareVals = board.map(square => square.getValue());

        // log board
        console.log(boardWithSquareVals);
    };

    return { getBoard, acceptPlayerMarker, printBoard };
};

let gameController = (playerOneName = "Player one", playerTwoName = "Player two") => {
    // create a new Gameboard
    const newBoard = Gameboard();

    // create player objects with assigned markers

    // assign active player

    // func that switches active player

    // func that returns active player

    // log new round

    // check for winner

    // announce that player wins

    // playround
    //      get 


};