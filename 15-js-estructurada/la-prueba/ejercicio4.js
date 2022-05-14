const { Console } = require("console-mpds");
const console = new Console();

let rows = console.readNumber(`Dame las filas`);
let columns = console.readNumber(`Dame las columnas`);
let asterisk = [`*`];
let dot = [`.`];
let lenghtRows = rows * 5;
let lenghtColumns = columns * 5;
for (let i = 0; i <= lenghtColumns + 1; i++) {
    console.write(asterisk)
}
console.writeln();

for (i = 0; i < lenghtRows; i++) {
    for (let j = 5; j < lenghtColumns; j++) {
        if (j % 5 === 0) {
            console.write("*");
        } else if (j % 5 === 3) {
            console.write("*");
        } else if (j % 5 === 4) {
            console.write("")
        }
        else {
            console.write(dot)
        }

    }
    console.writeln();
}


// for (let i = 0; i <= columns; i++) {
//     console.write(asterisk)
