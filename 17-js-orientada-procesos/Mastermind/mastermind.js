const { Console } = require("console-mpds");
const console = new Console();
let randomCombination;
let secretCombination;
let gotWinner = false;
let attemps = 3;
secretCombination = `rgmc` //Hardcodeada para pruebas
playGame();

function playGame() {
    console.writeln(`----- MASTERMIND -----`)
    do {
        randomCombination = getValidCombination();
        if (checkCombination()) {
            gotWinner = true;
            console.writeln(`¡¡¡You Win,Good Game!!!`)
        } else if (attemps === 0)
            console.writeln(`¡¡¡Sorry, you lost!!!`)
        else {
            console.writeln(`*********`)
            console.writeln(`You have ${attemps} remind`);
            console.writeln(`*********`)
        }
    } while (attemps > 0 && !gotWinner);


    function checkCombination() {
        if (randomCombination === secretCombination) {
            return true;
        }
        return false;
    }
    function getValidCombination() {
        let combination;
        let foundColor;
        let isValidCombination;
        do {
            combination = console.readString(`Propose a combination:`);
            if (combination.length != 4) {
                console.writeln(`Wrong proposed combination length`)
            }
            else {
                let colors = [`r`, `g`, `y`, `b`, `m`, `c`];
                isValidCombination = true;
                for (let i = 0; isValidCombination && i <= 3; i++) {
                    let j;
                    foundColor = false;
                    for (j = 0; j <= 5; j++) {
                        if (combination[i] === colors[j]) {
                            foundColor = true;
                        }
                    }
                    if (foundColor === false && j === colors.length) {
                        isValidCombination = false;
                        console.writeln(`Wrong colors, they must be: rgybmc`);
                    } else if (foundColor === true && j <= colors.length)
                        isValidCombination = true;
                }
            }
        } while (!isValidCombination);
        attemps--;
        return combination;
    }
}

