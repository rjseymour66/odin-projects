let Gameboard = () => {
    let board = [];

    // add an empty cell into each array element
    for (let i = 0; i < 9; i++) {
        board[i] = Cell();
    }

    // get the current state of the game
    const getBoard = () => board;

    // adds a player's marker to the square
    const writeMarker = (square, player) => {
        // get list of empty cells
        const emptyCells = board.filter((cell) => cell.value === "");

        // if there are no empty cells, return
        if (!emptyCells.length) return;

        // if the cell is empty, writeMarker for the player
        square.addPlayerMarker(player);
    };

    // see what the board looks like
    const printBoard = () => {
        // get values from each cell and populate a new array with the values
        const boardWithCellValues = board.map((cell) => cell.getValue());
        // print board
        console.log(boardWithCellValues);
    };

    return { getBoard, writeMarker, printBoard };
};

// a cell is a
let Cell = () => {
    let value = "";

    // change value of cell to players marker
    const addPlayerMarker = (marker) => {
        value = marker;
    };

    const getValue = () => value;

    return { addPlayerMarker, getValue };
};

let players = () => { };


let gameController = (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) => {
    // build gameboard
    const board = Gameboard();

    const players = [
        { name: playerOneName, marker: "X" },
        { name: playerTwoName, marker: "O" },
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    // const getPlayerInput = () => prompt();

    // print the board to the console and list player turn
    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const checkForWinner = (gameBoard, playerMarker) => {

        let board = gameBoard.getBoard();

        const playerCells = board.filter((cell) => cell.getValue() === playerMarker);

        const winningCombos = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];


        let result = winningCombos.forEach(array => {
            array.every(el => playerCells.includes(el));
        });

        return result;
    };

    const playerWins = () => {
        console.log(`${getActivePlayer().name} wins!`);
    };

    const playRound = (square) => {
        // add a marker for the current player
        console.log(
            `Writing ${getActivePlayer().name}'s mark into square ${square}...`
        );
        board.writeMarker(square, getActivePlayer().marker);

        // check winning combos
        if (checkForWinner(board, activePlayer.marker)) {
            playerWins();
        } else {
            console.log('No winners!');
            switchPlayerTurn();
            printNewRound();

        }
        printNewRound();
    };

    // Begin the game
    printNewRound();
    let playerSelection = getPlayerInput();
    playRound(playerSelection);

    return { playRound, getActivePlayer };
};

const game = gameController();
