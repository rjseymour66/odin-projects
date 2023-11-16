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
        const emptySquares = board.filter((square) => square.getValue() === "");

        // if no empty Squares, return
        if (!emptySquares.length) return;

        // if the Square is empty, add the player's marker
        board[selectedSquare - 1].addPlayerMarker(playerMarker);
    };

    // log current board to console
    const printBoard = () => {
        // create new array with Square values
        const boardWithSquareVals = board.map((square) => square.getValue());

        // log board
        console.log(boardWithSquareVals);
    };

    return { getBoard, acceptPlayerMarker, printBoard };
};

let GameController = (
    playerOneName = "Player one",
    playerTwoName = "Player two"
) => {
    // create a new Gameboard
    const board = Gameboard();

    // create player objects with assigned markers
    const players = [
        { name: playerOneName, marker: "X" },
        { name: playerTwoName, marker: "O" },
    ];

    // assign active player
    let activePlayer = players[0];

    // func that switches active player
    const switchActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    // func that returns active player
    const getActivePlayer = () => activePlayer;

    // check for winner helper, returns Boolean
    const checkForWinner = (gameBoard, playerMarker) => {
        // get the board
        const board = gameBoard.getBoard();

        // define winning square conditions
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // get index for squares that contain the activePlayers marker
        const getPlayerMarkerIndices = (board, marker) => {
            let newArray = [];
            board.forEach((el, index) => {
                if (el === marker) {
                    newArray.push(index);
                }
            });
            return newArray;
        };

        // check if getPlayerMarkerIndices() returns an array that contains every element in one of the winConditions array.
        let indices = getPlayerMarkerIndices(board, playerMarker);

        const isWinner = (nestedArray, indexArray) => {
            for (const winningCombo of nestedArray) {
                if (winningCombo.every((el) => indexArray.includes(el))) {
                    return true;
                }
            }
            return false;
        };

        result = isWinner(winConditions, indices);

        return result;
    };

    // announce that player wins helper
    const logPlayerWins = () => {
        console.log(`${getActivePlayer().name} wins!`);
    };

    // start/log new round
    const logNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const getPlayerMove = () => prompt("Please enter a square:");

    const playRound = (square) => {

        console.log(
            `Writing ${getActivePlayer().name}'s mark into square ${square}...`
        );

        board.acceptPlayerMarker(square, getActivePlayer().marker);

        // if (checkForWinner(board, getActivePlayer().marker)) {
        //     logPlayerWins();
        // }

        switchActivePlayer();

    };

    const gameIsCats = (gameBoard) => {
        const emptySquares = gameBoard.getBoard().filter((square) => square.getValue() === "");

        if (emptySquares.length === 0) {
            return true;
        }
        return false;
    };

    const playGame = () => {
        let playerMove;

        while (true) {
            if (gameIsCats(board)) {
                console.log('The game is CATS!');
                break;
            }
            logNewRound();
            playerMove = getPlayerMove();
            playRound(playerMove);

            if (checkForWinner(board, getActivePlayer().marker)) {
                logPlayerWins();
                break;
            }
        }
    };

    return { playGame, playRound, getActivePlayer };
};


const game = GameController();
game.playGame();