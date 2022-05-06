const { Console } = require("console-mpds");
const console = new Console();


// Recursividad del módulo o resto

const numerator = console.readNumber(`Introduce el numerador de la fracción: `);
const denominator = console.readNumber(`Introduce el denominador de la fracción: `);

let dividend = numerator>=denominator ? numerator : denominator;
let divisor = numerator>=denominator ? denominator : numerator;
let remainder = dividend % divisor;
let gcd;

if (remainder === 0) {
    gcd = divisor;
} else {
    while (remainder !== 0) {
        dividend = divisor;
        divisor = remainder;
        remainder = dividend % divisor;
    }
    gcd = divisor;
}

console.writeln(`\nLa fracción ${numerator}/${denominator} reducida es ${numerator/gcd}/${denominator/gcd}, \
e invertida es la fracción ${denominator/gcd}/${numerator/gcd}`);