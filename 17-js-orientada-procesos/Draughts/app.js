const { Console } = require("console-mpds");
const console = new Console();

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
    ];

    let turn = `W`;
    let movement = ``;
    let isValidMove = false;
}

function isResumed() {
    let resume = console.readString(`Do you want to continue? (y/n)`);
    if (resume === `y`) {
        return true;
    } else if (resume === `n`) {
        return false;
    } else {
        console.writeln(`Wrong option`);
        return isResumed();
    }
}
function isValidMove() {
    if (isValidMove) {
        return true;
    } else {
        return false;
    }
}

function movement() {
    let movement = console.readString(`Movement:`);
    if (movement.length === 2) {
        let x = parseInt(movement[0]);
        let y = parseInt(movement[1]);
        if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
            isValidMove = true;
        } else {
            console.writeln(`Wrong movement`);
            isValidMove = false;
        }
    } else {
        console.writeln(`Wrong movement`);
        isValidMove = false;
    }
}

function getturn() {
    if (turn === `W`) {
        turn = `B`;
    } else {
        turn = `W`;
    }
}
