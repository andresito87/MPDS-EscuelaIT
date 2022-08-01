const { Console } = require("console-mpds");
const console = new Console();
//TODO : Replace numbers for MAX_ROWS and MAX_COLUMNS;
initConnect4View().play();

function initConnect4View() {
    return {
        play: function () {
            const continueDialogView = initYesNoDialogView(`Do you want to continue? (yes/no)`);
            do {
                initGameView().play();
                continueDialogView.read();
            } while (continueDialogView.isAffirmative());
        }
    }
}

function initYesNoDialogView(question) {
    let answer = ``;
    return {
        read: function () {
            let error;
            do {
                answer = console.readString(question);
                error = !this.isAffirmative() && !this.isNegative();
                if (error) {
                    console.writeln(`Please answer "yes" or "no"`);
                }
            } while (error);
        },
        isAffirmative: function () {
            return answer === `yes`;
        },
        isNegative: function () {
            return answer === `no`;
        }
    };
}

function initGameView() {
    const game = initGame();
    let boardView = initBoardView();
    let activePlayer = initPlayer();
    return {
        play: function () {
            console.writeln(`----- CONNECT4 -----`);
            let coordinate;
            do {
                this.show();
                coordinate = initBoardView().readColumn(activePlayer.isPlayerTurn(), boardView.board.grid);
                coordinate.owner = activePlayer.isPlayerTurn();
                boardView.board.grid = game.updateGrid(coordinate, boardView.board.grid);
                gameFinished = initGame().isEndGame(coordinate, boardView.board.grid, activePlayer.turn);
                if (gameFinished) {
                    this.show();
                    initBoardView().showFinalMsg(activePlayer.isPlayerTurn(), game.MAX_MOVEMENTS, activePlayer.turn);
                } else {
                    activePlayer.changeTurn();
                }
            } while (!gameFinished);
        },
        show: function () {
            initBoardView().showBoard(boardView.board.grid);
        }
    }
}

function initPlayer() {
    return {
        turn: 0,
        player1: "X",
        player2: "O",
        isPlayerTurn() {
            return this.turn % 2 === 0 ? this.player1 : this.player2;
        },
        changeTurn() {
            this.turn++;
        }
    }
}

function initBoard() {
    return {
        grid: [["*", "1", "2", "3", "4", "5", "6", "7"],
        ["1", "_", "_", "_", "_", "_", "_", "_"],
        ["2", "_", "_", "_", "_", "_", "_", "_"],
        ["3", "_", "_", "_", "_", "_", "_", "_"],
        ["4", "_", "_", "_", "_", "_", "_", "_"],
        ["5", "_", "_", "_", "_", "_", "_", "_"],
        ["6", "_", "_", "_", "_", "_", "_", "_"]],

        isConnectedInVertical(coordinate, grid) {
            let countVertical = 0;
            for (let row = coordinate.row; row < grid.length; row++) {
                if (grid[row][coordinate.col] === coordinate.owner) {
                    countVertical++;
                } else {
                    countVertical = 0;
                }
            }
            return countVertical === 4;
        },
        isConnectedInHorizontal(coordinate, grid) {
            let countHorizontal = 0;
            for (let col = 1; col < grid[coordinate.row].length; col++) {
                let char = coordinate.owner;
                if (char === grid[coordinate.row][col - 1]) {
                    countHorizontal++;
                } else {
                    countHorizontal = 0;
                }
            }
            return countHorizontal === 4;
        },
        isConnectedInDiagonal(coordinate, grid) {
            let countDiagonalLeft = 0;
            for (let row = coordinate.row, col = coordinate.col; row < 6 && col > 1; row++, col--) {
                let char = coordinate.owner;
                let aux = grid[row][col];
                if (aux === grid[row + 1][col - 1] && aux === char) {
                    countDiagonalLeft++;
                } else {
                    countDiagonalLeft = 0;
                }
            }
            let countDiagonalRight = 0;
            for (let row = coordinate.row, col = coordinate.col; row < 6 && col < 7; row++, col++) {
                let char = coordinate.owner;
                let aux = grid[row][col];
                if (aux === grid[row + 1][col + 1] && aux === char) {
                    countDiagonalRight++;
                } else {
                    countDiagonalRight = 0;
                }
            }
            return countDiagonalLeft === 3 || countDiagonalRight === 3;
        }
    }
}

function initBoardView() {
    let board = initBoard();
    return {
        board,
        showBoard(grid) {
            for (let row = 0; row < grid.length; row++) {
                console.writeln(grid[row]);
            }
        },
        readColumn(player, grid) { //divide readColumn and getCoordinate
            let correctColumn;
            let coordinate = initCoordinate();
            do {
                correctColumn = true;
                console.writeln(`--------------------------`);
                coordinate.col = console.readNumber(`Player ${player} Select column between (1 - 7)`);
                for (let row = grid.length - 1; row >= 0; row--) {
                    if (grid[row][coordinate.col] === "_") {
                        coordinate.row = row;
                        break;
                    }
                }
                if (1 > coordinate.col || coordinate.col > 7) {
                    console.writeln("Remember columns between 1 and 7");
                    correctColumn = false;
                } else if (coordinate.row === undefined) {
                    console.writeln("This column is full");
                    correctColumn = false;
                }
            } while (!correctColumn);
            return coordinate;
        },
        showFinalMsg(lastActivePlayer, MAX_MOVEMENTS, turn) {
            turn === MAX_MOVEMENTS ? console.writeln(`Tied Game`) : console.writeln(`The winner is the player ${lastActivePlayer}`);
        }
    }
}

function initCoordinate() {
    return {
        row: undefined,
        col: undefined,
        owner: ""
    }
}

function initGame() {
    return {
        MAX_MOVEMENTS: 42,
        updateGrid(coordinate, grid) {
            grid[coordinate.row][coordinate.col] = coordinate.owner;
            return grid;
        },
        isEndGame(coordinate, grid, turn) {
            return this.isWinner(coordinate, grid) || this.isTied(turn);
        },
        isWinner(coordinate, grid) {
            return initBoardView().board.isConnectedInHorizontal(coordinate, grid)
                || initBoardView().board.isConnectedInVertical(coordinate, grid)
                || initBoardView().board.isConnectedInDiagonal(coordinate, grid)
        },
        isTied(turn) {
            return this.MAX_MOVEMENTS === turn;
        }
    }
}