// 4.-Escribe un código que a partir de un número de filas y columnas 
// muestre por pantalla una retícula correspondiente de cuadrados de 
// 5x5 asteriscos rellenos de puntos

const { Console } = require("console-mpds");
const console = new Console();

let filas = console.readNumber(`Dame las filas`);
let columns = console.readNumber(`Dame las columnas`);
let line1 = `*****`;
let line2 = `*...*`;
let line3 = `*....`;
let line4 = `...`;

for (let i = 0; i < filas; i++) {
    console.write(i);

    for (let j = 0; j < columns; j++) {
        console.write(line1);
        console.write(line2);
        console.write(line2);
        console.write(line2);
        console.write(line1);
        console.write(j);

    }

    console.write();
}
