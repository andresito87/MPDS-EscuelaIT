const { Console } = require("console-mpds");
const console = new Console();

playDraughts();

function playDraughts() {
    let msg = ``;
    console.writeln(`    ------- Draughts -------    `);
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j < 9; j++) {
            if (j % 2 === 0 && i % 2 === 1 && i < 3)
                msg += `| b `;
            else if (j % 2 === 1 && i % 2 === 0)
                msg += `|   `;
            else if (j % 2 === 0 && i > 5)
                msg += `| w `
            else if (j % 2 === 1 && i > 5)
                msg += `|   `
            else if (i > 2 && i < 7 && j < 6)
                msg += `|   `;
        }
        console.writeln(msg + `|`);
        msg = ``;
    }
}