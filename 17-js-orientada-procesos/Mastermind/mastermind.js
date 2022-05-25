const { Console } = require("console-mpds");
const console = new Console();

playMasterMind();

function playMasterMind() {
    do {
        playGame();
    } while (isResumed());

    function playGame() {
        let randomCombination;
        const secretCombination = `bycr` //Hardcodeada para pruebas
        let gotWinner = false;
        let attemps = 10;
        let msg = ``;
        const colors = [`r`, `g`, `y`, `b`, `m`, `c`];
        console.writeln(`----- MASTERMIND -----`)

        do {
            randomCombination = getValidCombination();
            if (checkCombination()) {
                gotWinner = true;
                console.writeln(`¡¡¡You've won!!! ;-)!!!`)
            } else if (attemps === 0)
                console.writeln(`¡¡¡You've lost!!! :-(!!!`)
            else {
                console.writeln();
                console.writeln(`${attemps} attempt(s): `);
                console.writeln(`*********`);
                console.write(msg);
            }
        } while (attemps > 0 && !gotWinner);

        function checkCombination() {
            if (randomCombination === secretCombination)
                return true;
            let blacks = 0;
            let whites = 0;
            for (i = 0; i <= 3; i++) {
                for (j = 0; j <= 3; j++) {
                    if (randomCombination[i] === secretCombination[i])
                        blacks++;
                    else if (randomCombination[i] === secretCombination[j])
                        whites++;
                }
            }
            msg += `${randomCombination} --> ${blacks / 4} blacks and ${whites} whites\n`;
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
                    isValidCombination = true;
                    for (let i = 0; isValidCombination && i <= 3; i++) {
                        let j;
                        foundColor = false;
                        for (j = 0; j <= 5; j++) {
                            if (combination[i] === colors[j]) {
                                foundColor = true;
                            }
                        }
                        if (!foundColor && j === colors.length) {
                            isValidCombination = false;
                            console.writeln(`Wrong colors, they must be: rgybmc`);
                        } else if (foundColor && j <= colors.length)
                            isValidCombination = true;
                    }
                }
            } while (!isValidCombination);
            attemps--;
            return combination;
        }
    }
}

function isResumed() {
    let result;
    let answer;
    let error = false;
    do {
        answer = console.readString(`Do you want to continue? (y/n): `);
        result = answer === `y`;
        error = !result && answer !== `n`;
        if (error) {
            console.writeln(`Please, answer "y" o "n"`);
        }
    } while (error);
    return result;
}
