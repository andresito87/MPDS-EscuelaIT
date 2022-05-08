// 2.-Escribe un código que determine si una serie de números positivos 
//(terminada en 0) está ordenada ascendentemente

const { Console } = require("console-mpds");
const console = new Console();

let number;
let previousNumber = 0;
let i = 0;
do {
    number = console.readNumber("Dame números y acabarás cuando introduzcas un 0:")
    number > previousNumber ? previousNumber = number : i++;
}
while (number != 0) {
}
console.writeln(`La serie de números introducida ${i === 1 ? "si" : "no"} está ordenada ascendentemente`)