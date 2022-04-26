// Primera fracción:
// Introduce el numerador de la fracción: 2
// Introduce el denominador de la fracción: 3
// Segunda fracción:
// Introduce el numerador de la fracción: 3
// Introduce el denominador de la fracción: 4

// La RESTA(corregido) de la fracción 2/3 y la fracción 3/4 es la fracción -1/12

const { Console } = require("console-mpds");
const console = new Console();

console.writeln(`Primera fracción:`);
let num1 = console.readNumber(`Introduce el numerador de la fracción:`);
let den1 = console.readNumber(`Introduce el denominador de la fracción:`);

console.writeln(`Segunda fracción:`);
let num2 = console.readNumber(`Introduce el numerador de la fracción:`);
let den2 = console.readNumber(`Introduce el denominador de la fracción:`);

console.writeln(
  `La resta de la fracción ${num1}/${den1} y la fracción ${num2}/${den2} es la fracción ${
    num1 * den2 - den1 * num2
  }/${den1 * den2}`
);
