const { Console } = require("console-mpds");
const console = new Console();

let rows = console.readNumber(`Dame las filas`);
let columns = console.readNumber(`Dame las columnas`);
let asterisk = [`*`];
let dot = [`.`];
//first Line
let i = 0;
do {
    console.write(asterisk);
    i++;
} while (i < columns) console.writeln();
//center lines
for (let i = 1; i < rows - 1; i++) {
    console.write(asterisk);
    for (let j = 1; j < columns - 1; j++) {
        console.write(dot);
    }
    console.write(asterisk);
    console.writeln();
}
//last Line
i = 0;
do {
    console.write(asterisk);
    i++;
} while (i < columns);
