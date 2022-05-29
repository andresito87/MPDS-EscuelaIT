const { Console } = require("console-mpds");
const console = new Console();

//MasterMind version 0.1: global functions with autogenerate secret combination

playMastermind();

function playMastermind() {
    do {
        play();
    } while (isResumed());

    function play() {
        const COLORS = ['r', 'g', 'y', 'b', 'm', 'c'];
        const COMBINATION_LENGTH = 4;
        const secretCombination = getSecretCombination(COLORS, COMBINATION_LENGTH);
        let attempsResults = [];
        let finished;
        showBoard(attempsResults);
        do {
            finished = proposeCombination(secretCombination, attempsResults, COLORS);
        } while (!finished);
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
                console.writeln(`Please, reply "y" or "n"`);
            }
        } while (error);
        return result;
    }

    function proposeCombination(secretCombination, attempsResults, COLORS) {
        let proposedCombination;
        let correctProposedCombination;
        do {
            proposedCombination = console.readString(`Propose a combination: `);
            correctProposedCombination = validateProposedCombination(proposedCombination, COLORS, secretCombination.length);
        } while (!correctProposedCombination);

        let success = checkProposedCombination(secretCombination, proposedCombination, attempsResults);
        showBoard(attempsResults);
        return showResultGame(attempsResults, success);
    }

    function getSecretCombination(COLORS, COMBINATION_LENGTH) {
        let randomCombination;
        let isRepeatedColor = false;
        do {
            randomCombination = ``;
            for (let k = 0; k <= COMBINATION_LENGTH - 1; k++) {
                randomCombination += COLORS[getRandomIndex(COLORS)];
            }
            for (i = 0; i < COMBINATION_LENGTH - 1; i++) {
                for (j = i + 1; j < COMBINATION_LENGTH; j++) {
                    if (randomCombination[i] === randomCombination[j])
                        isRepeatedColor = true;
                    do {
                        randomCombination[i] = randomCombination[getRandomIndex(COLORS)];
                    } while (isRepeatedColor);
                }
            }
        } while (isRepeatedColor);
        console.writeln(randomCombination);
        return randomCombination;
    }

    function getRandomIndex(COLORS) {
        return parseInt(Math.random() * COLORS.length);
    }

    function showBoard(attempsResults) {
        let msg = `\n${attempsResults.length} attemp(s)\n****`;
        const playerResults = showAttempsResults(attempsResults);
        msg += `${playerResults}`;
        console.writeln(msg);
    }

    function showAttempsResults(attempsResults) {
        result = ""
        for (let i = 0; i < attempsResults.length; i++) {
            result += `\n${attempsResults[i]}`;
        }
        return result;
    }

    function showResultGame(attempsResults, success) {
        const MAX_ATTEMPT = 10;
        const SUCCESS_ATTEMPT = "You've won!!! ;-)";
        const MAX_ATTEMPT_REACHED = "You've lost!!! :-(";
        if (success) {
            console.writeln(SUCCESS_ATTEMPT);
            return success;
        } else {
            let finished = attempsResults.length == MAX_ATTEMPT;
            if (finished) {
                console.writeln(MAX_ATTEMPT_REACHED);
            }
            return finished;
        }
    }

    function validateProposedCombination(proposedCombination, COLORS, secretCombinationLength) {
        const WRONG_LENGTH_ERROR = `Wrong proposed combination length`;
        const WRONG_COLOR_ERROR = `Wrong colors, they must be: ${writeColors(COLORS)}`;
        const REPEATED_COLOR_ERROR = `Wrong proposed combination, at least one color is repeated`;
        let correct = proposedCombination.length === secretCombinationLength;
        if (!correct) {
            console.writeln(WRONG_LENGTH_ERROR);
        }
        for (let i = 0; i < proposedCombination.length && correct; i++) {
            correct = isAColor(proposedCombination[i], COLORS);
            if (!correct) {
                console.writeln(WRONG_COLOR_ERROR);
            } else {
                correct = !isRepeated(proposedCombination[i], proposedCombination, i);
                if (!correct) {
                    console.writeln(REPEATED_COLOR_ERROR);
                }
            }
        }
        return correct;
    }

    function isAColor(value, COLORS) {
        let found = false;
        for (let i = 0; i < COLORS.length && !found; i++) {
            found = COLORS[i] === value;
        }
        return found;
    }

    function writeColors(COLORS) {
        let colorsText = "";
        for (let i = 0; i < COLORS.length; i++) {
            colorsText += COLORS[i];
        }
        return colorsText;
    }

    function checkProposedCombination(secretCombination, proposedCombination, attempsResults) {
        let black = 0;
        let white = 0;
        for (let i = 0; i < secretCombination.length; i++) {
            if (secretCombination[i] === proposedCombination[i]) {
                black++;
            } else {
                if (isOnWrongPosition(proposedCombination[i], secretCombination)) {
                    white++;
                }
            }
        }
        attempsResults[attempsResults.length] = proposedCombination + ` --> ${black} blacks and ${white} whites`;
        return black === secretCombination.length;
    }

    function isRepeated(color, proposedCombination, indexColor) {
        let repeated = false;
        for (let i = 0; i < proposedCombination.length && !repeated; i++) {
            repeated = proposedCombination[i] === color && i !== indexColor;
        }
        return repeated;
    }

    function isOnWrongPosition(color, secretCombination) {
        let found = false;
        for (let i = 0; i < secretCombination.length && !found; i++) {
            found = secretCombination[i] === color;
        }
        return found;
    }
}