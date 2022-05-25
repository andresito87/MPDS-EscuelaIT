const { Console } = require("console-mpds");
const console = new Console();

playMasterMind();

function playMasterMind() {
    do {
        playGame();
    } while (isResumed());

    function playGame() {
        let attemps = 0;
        let msg = ``;
        let gotWinner = false;

        console.writeln(`----- MASTERMIND -----`)

        do {
            let combination;
            combination = getValidCombination();
            if (checkCombination(combination)) {
                gotWinner = true;
                console.writeln(`¡¡¡You've won!!! ;-)!!!`)
            } else if (attemps === 10)
                console.writeln(`¡¡¡You've lost!!! :-(!!!`)
            else {
                console.writeln();
                console.writeln(`${attemps} attempt(s): `);
                console.writeln(`*********`);
                console.write(msg);
            }
        } while (attemps < 10 && !gotWinner);

        function checkCombination(combination) {
            const secretCombination = `bycr` //Hardcodeada para pruebas
            if (combination === secretCombination)
                return true;
            let blacks = 0;
            let whites = 0;
            for (i = 0; i <= 3; i++) {
                for (j = 0; j <= 3; j++) {
                    if (combination[i] === secretCombination[i])
                        blacks++;
                    else if (combination[i] === secretCombination[j])
                        whites++;
                }
            }
            msg += `${combination} --> ${blacks / 4} blacks and ${whites} whites\n`;
        }

        function getValidCombination() {
            let proposedCombination;
            let foundColor;
            let isValidCombination;
            do {
                proposedCombination = console.readString(`Propose a combination:`);
                if (proposedCombination.length != 4) {
                    console.writeln(`Wrong proposed combination length`)
                }
                else {
                    isValidCombination = true;
                    const colors = [`r`, `g`, `y`, `b`, `m`, `c`];
                    for (let i = 0; isValidCombination && i <= 3; i++) {
                        let j;
                        foundColor = false;
                        for (j = 0; j <= 5; j++) {
                            if (proposedCombination[i] === colors[j]) {
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
            attemps++;
            return proposedCombination;
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
