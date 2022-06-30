const { Console } = require("console-mpds");
const console = new Console();

playConnectFour();

function playConnectFour() {
    let continueDialog = initYesNoDialog(`Do you want to continue?(y / n): `);
    let board = [];
    let rowNum = 6;
    let colNum = 7;
    let totalMovesLeft = rowNum * colNum;
    do {
        console.writeln(`Welcome to Connect 4 \n`);

        board = [["*", "1", "2", "3", "4", "5", "6", "7"],
        ["1", "_", "_", "_", "_", "_", "_", "_"],
        ["2", "_", "_", "_", "_", "_", "_", "_"],
        ["3", "_", "_", "_", "_", "_", "_", "_"],
        ["4", "_", "_", "_", "_", "_", "_", "_"],
        ["5", "_", "_", "_", "_", "_", "_", "_"],
        ["6", "_", "_", "_", "_", "_", "_", "_"]];

        for (let row = 0; row < rowNum + 1; row++) {
            console.writeln(board[row]);
        }
        let result = false;
        do {
            result = play("X", board, rowNum, colNum);
            if (result) {
                console.writeln(" Player X WINS!");
            } else {
                result = play("O", board, rowNum, colNum);
                if (result) {
                    console.writeln("Player O WINS!");
                }
            }
            if (totalMovesLeft === 0) {
                console.writeln("It's a TIE!");
            }
            totalMovesLeft--;
        } while (totalMovesLeft > 0 && result === false);
        continueDialog.read();

    } while (continueDialog.isAffirmative());
}

function play(color, board, rowNum, colNum) {
    let move;
    let correctColumn;
    do {
        correctColumn = true;
        move = console.readNumber(`Player ${color} Select column between (1 - 7)`);
        if (1 > move || move > 7) {
            console.writeln("Remenber columns between 1 and 7");
            correctColumn = false;
        } else if (board[1][move] !== "_") {
            console.writeln("Column is full");
            correctColumn = false;
        }
    } while (!correctColumn);

    let adjustCol = move;
    let adjustRow = 1;
    rowNum = rowNum + 1;

    for (let row = 0; row < rowNum; row++) {
        if (board[row][adjustCol] === "_") {
            adjustRow = row;
        }
    }

    board[adjustRow][adjustCol] = color;

    let fourCheckVert = 1;

    let distFromBottom = rowNum - 1 - adjustRow;
    let distFromTop = adjustRow;

    for (let check = 1; check <= distFromBottom; check++) {
        if (distFromBottom > 0) {
            if (board[adjustRow + check][adjustCol] === color) {
                fourCheckVert++;
            } else {
                break;
            }
        }
    }

    for (let check = 1; check <= distFromTop; check++) {
        if (distFromTop > 0) {
            if (board[adjustRow - check][adjustCol] === color) {
                fourCheckVert++;
            } else {
                break;
            }
        }
    }

    let fourCheckHor = 1;

    let distFromRight = colNum - 1 - adjustCol;
    let distFromLeft = adjustCol;

    for (let check = 1; check <= distFromRight; check++) {
        if (distFromRight > 0) {
            if (board[adjustRow][adjustCol + check] === color) {
                fourCheckHor++;
            } else {
                break;
            }
        }
    }

    for (let check = 1; check <= distFromLeft; check++) {
        if (distFromLeft > 0) {
            if (board[adjustRow][adjustCol - check] === color) {
                fourCheckHor++;
            } else {
                break;
            }
        }
    }

    let fourCheckDiagSlopeR = 1;

    for (let check = 1; check <= distFromBottom; check++) {
        if (distFromBottom > 0) {
            if (board[adjustRow + check][adjustCol + check] === color) {
                fourCheckDiagSlopeR++;
            } else {
                break;
            }
        }
    }

    for (let check = 1; check <= distFromTop; check++) {
        if (distFromTop > 0) {
            if (board[adjustRow - check][adjustCol - check] === color) {
                fourCheckDiagSlopeR++;
            } else {
                break;
            }
        }
    }

    let fourCheckDiagSlopeL = 1;

    for (let check = 1; check <= distFromBottom; check++) {
        if (distFromBottom > 0) {
            if (board[adjustRow + check][adjustCol - check] === color) {
                fourCheckDiagSlopeL++;
            } else {
                break;
            }
        }
    }

    for (let check = 1; check <= distFromTop; check++) {
        if (distFromTop > 0) {
            if (board[adjustRow - check][adjustCol + check] === color) {
                fourCheckDiagSlopeL++;
            } else {
                break;
            }
        }
    }
    for (let i = 0; i < rowNum; i++) {
        console.writeln(board[i]);
    }
    console.writeln(`-----------------------------------------------------`);
    let winner = false;
    if ((fourCheckVert >= 4) || (fourCheckHor >= 4) || (fourCheckDiagSlopeR >= 4) || (fourCheckDiagSlopeL >= 4)) {
        winner = true;
    }
    return winner;
}

function initYesNoDialog(question) {
    return {
        question: question,
        answer: ``,

        read() {
            let error = false;
            do {
                answer = console.readString(this.question);
                error = !this.isAffirmative() && !this.isNegative();
                if (error) {
                    console.writeln(`Please, answer "y" o "n"`);
                }
            } while (error);
        },

        isAffirmative() {
            return answer === `y`;
        },

        isNegative() {
            return answer === `n`;
        }
    }
}
