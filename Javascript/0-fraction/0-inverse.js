// Introduce el numerador de la fracción: 2
// Introduce el denominador de la fracción: 3

// La fracción 2/3 invertida es la fracción 3/2
const { Console } = require("console-mpds");
const console = new Console();

let num = console.readNumber(`Introduce el numerador de la fracción:`);
let den = console.readNumber(`Introduce el denominador de la fracción:`);
console.writeln(
  `La fracción ${num}/${den} invertida es la fracción ${den}/${num}`
);
