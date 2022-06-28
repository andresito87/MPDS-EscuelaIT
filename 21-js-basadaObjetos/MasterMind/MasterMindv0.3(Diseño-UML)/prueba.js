const objeto = {

    read(title, COLORS, COMBINATION_LENGTH) {
        let combination;
        let validCombination = true;
        do {
            combination = console.readString(`${title}`);
            if (!this.isCorrectLenght(combination, COMBINATION_LENGTH)) {
                console.writeln(`Wrong proposed combination length`)
                validCombination = false;
            } else {
                for (let i = 0; validCombination && i < COMBINATION_LENGTH; i++) {
                    if (this.isCorrectColor(combination[i], COLORS) == false) {
                        console.writeln(`Wrong color, they must be: rgybmc`);
                        validCombination = false;
                    } else if (this.isRepeated(combination, i) == true) {
                        console.writeln(`Repeated color ${combination[i]} try again`);
                        validCombination = false;
                    }
                }
            }
        } while (!validCombination);
        this.proposedCombinations.push(combination);
    },

    isCorrectLenght(combination, COMBINATION_LENGTH) {
        return combination.length === COMBINATION_LENGTH;
    },

    isCorrectColor(color, COLORS) {
        let correctColor = false;
        for (let i = 0; !correctColor && i < COLORS.length; i++) {
            correctColor ||= COLORS[i] === color;
        }
        return correctColor;
    },

    isRepeated(combination, indexColor) {
        let repeated = false;
        for (let i = 0; !repeated && i < combination.length; i++) {
            repeated = combination[i] === combination[indexColor] && i !== indexColor;
        }
        return repeated;
    }
}