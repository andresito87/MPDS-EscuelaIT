const { Console } = require("console-mpds");
const console = new Console();

playTicTacToe();

function playTicTacToe() {
    do {
        playGame();
    } while (isResumed());














    function isResumed() {
        let result;
        let answer;
        let error = false;
        do {
            answer = console.readString(`Do you want to continue? (y/n): `);
            result = answer === `y`;
            error = !result && answer !== `n`;
            if (error) {
                console.writeln(`Por favor, responda "y" o "n"`);
            }
        } while (error);
        return result;
    }

}