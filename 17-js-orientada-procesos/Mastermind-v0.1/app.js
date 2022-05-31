const { Console } = require("console-mpds");
const console = new Console();

//MasterMind version 0.1 with autogenerate secret combination without repeated colors


playMastermind();

function playMastermind() {
    do {
        playGame();
    } while (isResumed());

    function playGame() {
        const COLORS = ['r', 'g', 'y', 'b', 'm', 'c'];
        const COMBINATION_LENGTH = 4;
        const secretCombination = getSecretCombination(COLORS, COMBINATION_LENGTH);
        let attempsResults = [];
        let finished;
        showBoard(attempsResults);
        do {
            finished = playRound(secretCombination, attempsResults, COLORS);
        } while (!finished);
    }

    function isResumed() {
        let result;
        let answer;
        let error = false;
        do {
            answer = console.readString(`Do you want to continue? (y/n): `);
            if (answer === 'y') {
                result = true;
            } else if (answer === 'n') {
                result = false;
            } else {
                console.writeln(`Please, reply "y" or "n"`);
                error = true;
            }
        } while (error);
        return result;
    }

    function playRound(secretCombination, attempsResults, COLORS) {
        let proposedCombination;
        let correctProposedCombination;
        do {
            proposedCombination = console.readString(`Propose a combination: `);
            correctProposedCombination = validateProposedCombination(proposedCombination, COLORS, secretCombination.length);
        } while (!correctProposedCombination);

        let success = checkProposedCombination(secretCombination, proposedCombination, attempsResults);
        showBoard(attempsResults);
        return showResultRound(attempsResults, success);
    }

    function getSecretCombination(COLORS, COMBINATION_LENGTH) {
        let randomCombination;
        let isRepeatedColor;
        do {
            isRepeatedColor = false;
            randomCombination = ``;
            for (let k = 0; k <= COMBINATION_LENGTH - 1; k++) {
                randomCombination += COLORS[getRandomIndex(COLORS)];
            }

            for (let i = 0; !isRepeatedColor && i < COMBINATION_LENGTH - 1; i++) {
                if (isRepeated(randomCombination[i], randomCombination, i))
                    isRepeatedColor = true;
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
        result = ``;
        for (let i = 0; i < attempsResults.length; i++) {
            result += `\n${attempsResults[i]}`;
        }
        return result;
    }

    function showResultRound(attempsResults, success) {
        const MAX_ATTEMPT = 10;
        const SUCCESS_ATTEMPT = `You've won!!! ;-)`;
        const MAX_ATTEMPT_REACHED = `You've lost!!! :-(`;
        if (success) {
            console.writeln(SUCCESS_ATTEMPT);
            return success;
        } else {
            let finished = attempsResults.length === MAX_ATTEMPT;
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

    function isAColor(proposedColor, COLORS) {
        let found = false;
        for (let i = 0; i < COLORS.length && !found; i++) {
            found = COLORS[i] === proposedColor;
        }
        return found;
    }

    function writeColors(COLORS) {
        let colorsText = ``;
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
        if (black === secretCombination.length) {
            return true;
        }
    }

    function isRepeated(proposedColor, proposedCombination, indexColor) {
        let repeated = false;
        for (let i = 0; i < proposedCombination.length && !repeated; i++) {
            repeated = proposedCombination[i] === proposedColor && i !== indexColor;
        }
        return repeated;
    }

    function isOnWrongPosition(proposedColor, secretCombination) {
        let wrongPosition = false;
        for (let i = 0; !wrongPosition && i < secretCombination.length; i++) {
            wrongPosition = secretCombination[i] === proposedColor;
        }
        return wrongPosition;
    }
}