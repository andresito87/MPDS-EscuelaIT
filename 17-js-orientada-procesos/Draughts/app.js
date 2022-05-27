
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input() {
    return new Promise(resolve => {
        rl.question(`Enter move: `, answer => {
            resolve(answer);
        });
    });
}

playDraughts();

function playDraughts() {
    do {
        playGame();
    } while (isResumed());
}
function playGame() {

    let board = [
        [` `, `b`, ` `, `b`, ` `, `b`, ` `, `b`],
        [`b`, ` `, `b`, ` `, `b`, ` `, `b`, ` `],
        [` `, `b`, ` `, `b`, ` `, `b`, ` `, `b`],
        [` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `],
        [` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `],
        [`w`, ` `, `w`, ` `, `w`, ` `, `w`, ` `],
        [` `, `w`, ` `, `w`, ` `, `w`, ` `, `w`],
        [`w`, ` `, `w`, ` `, `w`, ` `, `w`, ` `]
    ];  //  0  1  2  3  4  5  6  7
    let turn = `w`;
    let gameOver = false;
    let gameOverReason = ``;

    do {
        printBoard(board);
        console.log(`${turn}'s turn`);
        let move = getMove(board, turn);
        if (move === ``) {
            gameOver = true;
            gameOverReason = `${turn} has no valid moves`;
        } else {
            board = makeMove(board, move);
            turn = turn === `w` ? `b` : `w`;
        }
    } while (!gameOver);
}
function printBoard(board) {
    for (let row of board) {
        console.log(row.join(` `));
    }
}
function getMove(board, turn) {
    let validMoves = getValidMoves(board, turn);
    if (validMoves.length === 0) {
        return ``;
    }
    let move = ``;
    do {
        move = prompt(`Enter move (e.g. "a1 a3"): `);
    } while (!validMoves.includes(move));
    return move;
}
function getValidMoves(board, turn) {
    let validMoves = [];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let piece = board[row][col];
            if (piece === turn) {
                let moves = getMoves(board, row, col);
                validMoves = validMoves.concat(moves);
            }
        }
    }
    return validMoves;
}
function getMoves(board, row, col) {
    let moves = [];
    let piece = board[row][col];
    if (piece === ` `) {
        return moves;
    }
    if (piece === `b`) {
        moves = getBlackMoves(board, row, col);
    } else if (piece === `w`) {
        moves = getWhiteMoves(board, row, col);
    }
    return moves;
}
function getBlackMoves(board, row, col) {
    let moves = [];
    let piece = board[row][col];
    if (piece !== `b`) {
        return moves;
    }
    let directions = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ];
    for (let direction of directions) {
        let move = getMoveInDirection(board, row, col, direction);
        if (move !== ``) {
            moves.push(move);
        }
    }
    return moves;
}
function getWhiteMoves(board, row, col) {
    let moves = [];
    let piece = board[row][col];
    if (piece !== `w`) {
        return moves;
    }
    let directions = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ];
    for (let direction of directions) {
        let move = getMoveInDirection(board, row, col, direction);
        if (move !== ``) {
            moves.push(move);
        }
    }
    return moves;
}
function getMoveInDirection(board, row, col, direction) {
    let move = ``;
    let piece = board[row][col];
    let newRow = row + direction[0];
    let newCol = col + direction[1];
    if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) {
        return move;
    }
    let newPiece = board[newRow][newCol];
    if (newPiece === ` `) {
        move = `${col}${row}${newCol}${newRow}`;
    } else if (newPiece !== piece) {
        move = getMoveInDirection(board, newRow, newCol, direction);
    }
    return move;
}
function makeMove(board, move) {
    let newBoard = board.map(row => [...row]);
    let [fromCol, fromRow, toCol, toRow] = move.split(` `);
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = ` `;
    return newBoard;
}
function isResumed() {
    let resume = prompt(`Resume? (y/n) `);
    return resume === `y`;
}
function prompt(message) {
    console.log(message);
    return input();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
