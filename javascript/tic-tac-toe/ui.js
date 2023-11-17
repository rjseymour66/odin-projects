/////////////////////////////////////////////
// Square
/////////////////////////////////////////////

const Square = () => {
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

/////////////////////////////////////////////
// Gameboard
/////////////////////////////////////////////

const Gameboard = () => {
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

        // if there is already a value in that spot, return
        if (board[selectedSquare - 1].getValue()) return;

        // if the Square is empty, add the player's marker
        board[selectedSquare - 1].addPlayerMarker(playerMarker);

        return true;
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

/////////////////////////////////////////////
// GameController
/////////////////////////////////////////////
const GameController = (
    playerOneName = "Player 1",
    playerTwoName = "Player 2"
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

    // check for winner helper, returns empty string or winner name
    const getWinner = (gameBoard) => {
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
            board.forEach((square, index) => {
                if (square.getValue() === marker) {
                    newArray.push(index);
                }
            });
            return newArray;
        };

        // check if getPlayerMarkerIndices() returns an array that contains every
        // element in one of the winConditions array.
        let playerOneIndices = getPlayerMarkerIndices(board, players[0].marker);
        let playerTwoIndices = getPlayerMarkerIndices(board, players[1].marker);
        // let indices = getPlayerMarkerIndices(board, playerMarker);

        const isWinner = (nestedArray, indexArray) => {
            for (const winningCombo of nestedArray) {
                if (winningCombo.every((el) => indexArray.includes(el))) {
                    return true;
                }
            }
            return false;
        };

        let result = "";
        if (isWinner(winConditions, playerOneIndices)) result = players[0].name;
        if (isWinner(winConditions, playerTwoIndices)) result = players[1].name;

        return result;
    };

    // announce that player wins helper
    const logPlayerWins = (name) => {
        console.log(`${name} wins!`);
        // alert(`${name} wins!`);
    };

    // const

    const logGameIsCats = () => {
        console.log("The game is CATS!");
        // alert("The game is CATS!");
    };

    // start/log new round
    const logBoard = () => {
        board.printBoard();
    };

    const playRound = (square) => {
        // console.log(`${getActivePlayer().name}'s turn.`);

        if (!board.acceptPlayerMarker(square, getActivePlayer().marker)) return;

        // console.log(
        //   `Writing ${getActivePlayer().name}'s mark into square ${square}...`
        // );

        logBoard();

        // check for cats
        if (gameIsCats(board)) {
            logGameIsCats();
            return;
        }

        // check for winner
        let winner = getWinner(board);
        if (winner) {
            logPlayerWins(winner);
            return;
        }

        switchActivePlayer();
    };

    const gameIsCats = (gameBoard) => {
        const emptySquares = gameBoard
            .getBoard()
            .filter((square) => square.getValue() === "");

        if (emptySquares.length === 0) {
            return true;
        }
        return false;
    };

    return { playRound, getActivePlayer, getBoard: board.getBoard };
};

/////////////////////////////////////////////
// UIController
/////////////////////////////////////////////

const UIController = () => {
    const game = GameController();
    const announcement = document.querySelector(".announcement");
    const boardDiv = document.querySelector(".game-container");
    const gameButton = document.querySelector(".game-btn");

    // helper to easily create elements
    const createElement = (tag, ...classNames) => {
        const element = document.createElement(tag);
        for (const c of classNames) {
            element.classList.add(c);
        }
        return element;
    };

    // helper to reset UI
    const resetUI = (rootEl) => {
        while (rootEl.firstChild) {
            rootEl.removeChild(rootEl.firstChild);
        }
    };

    const updateUI = () => {
        boardDiv.textContent = "";

        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

        // populate banner
        announcement.textContent = `${activePlayer.name}'s turn!`;

        board.forEach((square, index) => {
            const squareButton = createElement("button", "grid-cell");
            squareButton.dataset.square = index + 1;
            squareButton.textContent = square.getValue();
            boardDiv.appendChild(squareButton);
        });
    };

    let clickHandlerBoard = (e) => {
        const selectedSquare = e.target.dataset.square;
        if (!selectedSquare) return;

        game.playRound(selectedSquare);
        updateUI();
    };

    let clickHandlerNewGame = (e) => {
        console.log(e.target);
        resetUI(boardDiv);
        updateUI();
    };

    boardDiv.addEventListener("click", clickHandlerBoard);
    gameButton.addEventListener("click", clickHandlerNewGame);

    updateUI();

    // const appendMultipleChildren = (parentEl, ...children) => {
    //   for (const child of children) {
    //     parentEl.appendChild(child);
    //   }
    // };
};

UIController();