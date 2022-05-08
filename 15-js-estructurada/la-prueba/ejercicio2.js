const { Console } = require("console-mpds");
const console = new Console();

let number = [];
let i = -1;
do {
    i++;
    number[i] = console.readNumber("Dame números y acabarás cuando introduzcas un 0:");
}
while (number[i] != 0);

i = 0;
do {
    i++;
}
while (number[i] > number[i - 1] && number[i] != 0);

console.writeln(`La serie de números introducida ${i + 1 === number.length ? "si" : "no"} \
está ordenada ascendentemente`);