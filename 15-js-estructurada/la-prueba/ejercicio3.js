const { Console } = require("console-mpds");
const console = new Console();

//Binary Search

let found = false;

do {
    let firstNumber = 0;
    let lastNumber = 1000000;
    let remainder = (lastNumber - firstNumber) % 2;
    let middlePoint = remainder === 0
        ? ((lastNumber - firstNumber) / 2) + firstNumber
        : ((lastNumber - firstNumber) + remainder) / 2 + firstNumber;
    let response = console.readString(`¿ Como es ${middlePoint} ?`);
    const possibleResponse = [`Igual`, `Mayor`, `Menor`];
    if (response === possibleResponse[0]) {
        console.writeln(`¡¡¡Bien, lo encontré!!! El número es ${middlePoint}`);
        found = true;
    } else if (response === possibleResponse[1]) {
        lastNumber = middlePoint-1;
    } else if (response === possibleResponse[2]) {
        firstNumber = middlePoint+1;
    } else {
        console.writeln("Por favor, escribe bien. Sólo dime si es Mayor, Menor o Igual a tu número.");
    }
} while (!found)
