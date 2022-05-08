const { Console } = require("console-mpds");
const console = new Console();

let value = console.readNumber("Dame el número a adivinar");
let first = 0;
let last = 1000000;
let searchedNumber;
let found = false;
let middlePoint;

while (found === false && first <= last) {
    middlePoint = parseInt((first + last) / 2);
    if (middlePoint === value) {
        found = true;
        searchedNumber = middlePoint;
        console.writeln(`¡¡¡Bien, lo encontraste!!! El número es ${searchedNumber}`);
    } else if (middlePoint >= value) {
        last = middlePoint - 1;
        console.writeln(`Es menor o igual que ${middlePoint}`)
    } else {
        first = middlePoint + 1;
        console.writeln(`Es mayor o igual que ${middlePoint}`)
    }
}