/////////////////////////////////////////////
// Square
/////////////////////////////////////////////

const Square = () => {
    // default value for each Square
    let value = "";

    // change the value of the Square to a players marker
    const setValue = (val) => {
        value = val;
    };

    // get the value of the Square
    const getValue = () => value;

    return { getValue, setValue };
};

/////////////////////////////////////////////
// Player
/////////////////////////////////////////////

const Player = (playerName, playerMarker) => {
    let name = playerName;
    const marker = playerMarker;

    const getName = () => name;
    const setName = (newName) => {
        name = newName;
    };
    const getMarker = () => marker;

    return {
        getName,
        setName,
        getMarker,
    };
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
        board[selectedSquare - 1].setValue(playerMarker);

        return true;
    };

    // reset game square values to ""
    const resetBoard = () => {
        board.forEach((square) => square.setValue(""));
    };

    return {
        getBoard,
        acceptPlayerMarker,
        resetBoard,
    };
};

/////////////////////////////////////////////
// GameController
/////////////////////////////////////////////

const GameController = (
    playerOne = { name: "player1", marker: "X" },
    playerTwo = { name: "player2", marker: "Y" }
) => {
    // create a new Gameboard
    const board = Gameboard();

    // create player objects with assigned markers
    const players = [playerOne, playerTwo];

    // assign active player
    let activePlayer = players[0];

    // func that returns active player
    const getActivePlayer = () => activePlayer;

    // func that switches active player
    const switchActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    let winner = "";

    const getWinner = () => winner;

    const checkForWinner = (gameBoard) => {
        // get current board
        const currentBoard = gameBoard.getBoard();

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

        let playerOneIndices = getPlayerMarkerIndices(
            currentBoard,
            players[0].getMarker()
        );
        let playerTwoIndices = getPlayerMarkerIndices(
            currentBoard,
            players[1].getMarker()
        );

        const isWinner = (nestedArray, indexArray) => {
            for (const winningCombo of nestedArray) {
                if (winningCombo.every((el) => indexArray.includes(el))) {
                    return true;
                }
            }
            return false;
        };

        if (isWinner(winConditions, playerOneIndices)) {
            winner = players[0].getName();
            return true;
        }
        if (isWinner(winConditions, playerTwoIndices)) {
            winner = players[1].getName();
            return true;
        }

        return false;
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

    const getNewGame = () => {
        board.resetBoard();
        winner = "";
        activePlayer = players[0];
    };

    const playRound = (square) => {
        if (!board.acceptPlayerMarker(square, getActivePlayer().getMarker()))
            return;
        switchActivePlayer();
    };

    return {
        playRound,
        getActivePlayer,
        getWinner,
        gameIsCats,
        getNewGame,
        getBoard: board.getBoard,
        checkForWinner,
    };
};

/////////////////////////////////////////////
// UIController
/////////////////////////////////////////////

const UIController = () => {
    let player1 = Player("player 1", "X");
    let player2 = Player("player 2", "O");

    // startGame
    const newGameModal = document.querySelector(".new-game");
    const playerXName = document.querySelector("#player-x-name");
    const playerOName = document.querySelector("#player-o-name");
    const newGameButton = document.querySelector(".game-btn");
    const startGameButton = document.querySelector(".start-game");
    const closeNewGameModal = document.querySelector(".new-game .modal-close");

    const startGame = () => {
        newGameModal.showModal();
        playerXName.value = "";
        playerOName.value = "";
    };

    const clickHandlerNewGameInitModal = () => {
        newGameModal.showModal();
        playerXName.value = "";
        playerOName.value = "";
    };

    const clickHandlerStartGame = () => {
        playerXName.value ? player1.setName(playerXName.value) : player1.setName("player 1");
        playerOName.value ? player2.setName(playerOName.value) : player2.setName("player 2");
        updateUI();
        newGameModal.close();
    };

    const clickHandlerCloseModal = (e) => {
        e.target.parentElement.close();
    };

    newGameButton.addEventListener('click', clickHandlerNewGameInitModal);
    startGameButton.addEventListener('click', clickHandlerStartGame);
    closeNewGameModal.addEventListener('click', clickHandlerCloseModal);

    const game = GameController(player1, player2);
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
    const clearUI = (board) => {
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    };

    const updateUI = () => {
        clearUI(boardDiv);

        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

        // populate banner
        announcement.textContent = `${activePlayer.getName()}'s turn!`;

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

        // check for winner or CATS
        if (game.checkForWinner(game) || game.gameIsCats(game)) offerRematch();
    };

    let clickHandlerNewGame = () => {
        const newGameModal = document.querySelector(".new-game");
        game.getNewGame();
        updateUI();
    };

    boardDiv.addEventListener("click", clickHandlerBoard);
    gameButton.addEventListener("click", clickHandlerNewGame);

    // rematch handles
    const gameOverModal = document.querySelector(".game-over");
    const modalHeader = document.querySelector(".modal-header");
    const yesRematchButton = document.querySelector(".rematch");
    const noRematchButton = document.querySelector(".exit");
    const closeRematchModal = document.querySelector(".modal-close");


    // Rematch func and event listeners
    const offerRematch = () => {
        // show the modal
        gameOverModal.showModal();

        // set the modal text. If there is no winner, then gameIsCats was called
        game.getWinner() === ""
            ? (modalHeader.textContent = "Game is CATS!")
            : (modalHeader.textContent = `${game.getWinner()} wins!`);
    };

    const clickHandlerRematch = () => {
        gameOverModal.close();
        game.getNewGame();
        updateUI();
    };

    const clickHandlerNoRematch = () => {
        gameOverModal.close();
        announcement.textContent = modalHeader.textContent;
    };

    yesRematchButton.addEventListener('click', clickHandlerRematch);
    noRematchButton.addEventListener('click', clickHandlerNoRematch);
    closeRematchModal.addEventListener('click', clickHandlerCloseModal);

    startGame();
};

UIController();