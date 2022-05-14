const { Console } = require("console-mpds");
const console = new Console();

let number = console.readNumber("Dame el número a adivinar");
let firstNumber = 0;
let lastNumber = 1000000;
let searchedNumber;
let found = false;
let middlePoint;

while (found || firstNumber <= lastNumber) {
    lastNumber = console.readNumber("¿Como es ");
    middlePoint = parseInt((firstNumber + lastNumber) / 2);

    if (middlePoint === number) {
        found = true;
        console.writeln(`¡¡¡Bien, lo encontraste!!! El número es ${lastNumber}`);
    } else if (middlePoint >= number) {
        console.writeln(`Es menor o igual que ${lastNumber}`)
    } else {
        console.writeln(`Es mayor o igual que ${lastNumber}`)
    }
}