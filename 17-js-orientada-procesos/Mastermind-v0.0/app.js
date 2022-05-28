const { Console } = require("console-mpds");
const console = new Console();

playMasterMind();

function playMasterMind() {
    do {
        playGame();
    } while (isResumed());
}
function playGame() {
    const colors = [`r`, `g`, `y`, `b`, `m`, `c`];
    const combinationLength = 4;
    const maxAttemps = 10;
    let gotWinner = false;
    let msg = [];
    let attemps = 0;
    const secretCombination = getSecretCombination(colors, combinationLength);

    console.writeln(`----- MASTERMIND -----`)
    do {
        let combination = getValidCombination(colors, combinationLength);
        console.writeln(combination);
        if (getResults(combination, secretCombination, combinationLength) === true) {
            gotWinner = true;
            console.writeln(`¡¡¡You've won!!! ;-)!!!`)
        } else if (getResults(combination, secretCombination, combinationLength) === maxAttemps)
            console.writeln(`¡¡¡You've lost!!! :-(!!!`)
        else {
            let results = getResults(combination, secretCombination, combinationLength);
            console.writeln(`\n${results.length} attempt(s): `);
            console.writeln(`*********`);
            showResults(results, attemps);
        }
    } while (results.length < maxAttemps && !gotWinner);
}
function showResults(results, attemps, msg) {
    for (let i = 0; i < results.length; i++) {
        msg += `${results[i][0]} blacks :${results[i][1]} whites`;
    }
    console.writeln(`${attemps} attemps`);
    console.writeln(msg);
    attemps++;
}

function getSecretCombination(colors, combinationLength) {
    let isRepeatedColor = true;
    let randomCombination;
    do {
        randomCombination = ``;
        for (let k = 0; k < combinationLength; k++) {
            randomCombination += colors[parseInt(Math.random() * 6)];
        }
        isRepeatedColor = true;
        for (i = 0; i < combinationLength - 1; i++) {
            for (j = i + 1; j < combinationLength; j++) {
                isRepeatedColor &= randomCombination[i] != randomCombination[j];
            }
        }
    } while (!isRepeatedColor);
    return randomCombination;
}

function getValidCombination(colors, combinationLength) {
    let proposedCombination;
    let isValidCombination;
    do {
        proposedCombination = console.readString(`Propose a combination:`);
        if (proposedCombination.length != combinationLength) {
            console.writeln(`Wrong proposed combination length`)
        }
        else {
            isValidCombination = true;
            for (let i = 0; isValidCombination && i < combinationLength; i++) {
                let j;
                let foundColor = false;
                for (j = 0; j < colors.length; j++) {
                    if (proposedCombination[i] === colors[j]) {
                        foundColor = true;
                    }
                }
                if (!foundColor && j === combinationLength) {
                    isValidCombination = false;
                    console.writeln(`Wrong colors, they must be: rgybmc`);
                }
            }
            isRepeatedColor = true;
            for (i = 0; i < combinationLength - 1; i++) {
                for (j = i + 1; j < combinationLength; j++) {
                    isRepeatedColor &= proposedCombination[i] != proposedCombination[j];
                }
            }
            if (!isRepeatedColor) {
                isValidCombination = false;
                console.writeln(`Repeated color ${proposedCombination[i]} try again`);
            }

        }
    } while (!isValidCombination);
    return proposedCombination;
}

function getResults(combination, secretCombination, combinationLength, msg) {
    if (combination === secretCombination)
        return true;
    let blacks = 0;
    let whites = 0;
    for (let i = 0; i <= combinationLength - 1; i++) {
        for (let j = 0; j <= combinationLength - 1; j++) {
            if (combination[i] === secretCombination[i])
                blacks++;
            else if (combination[i] === secretCombination[j])
                whites++;
        }
    }
    [...msg] = blacks / combinationLength, whites;
    console.writeln(msg);
    return msg;
}

function isResumed() {
    let result;
    let answer;
    let error = false;
    do {
        answer = console.readString(`Do you want to continue?(y / n): `);
        result = answer === `y`;
        error = !result && answer !== `n`;
        if (error) {
            console.writeln(`Please, answer "y" o "n"`);
        }
    } while (error);
    return result;
}
