//Sin Recursividad
// const { Console } = require("console-mpds");
// const console = new Console();

// const numerator = console.readNumber(`Introduce el numerador de la fracción: `);
// const denominator = console.readNumber(`Introduce el denominador de la fracción: `);
// let greatestCommonDivisor;

// if (numerator > denominator){
//     let i = denominator;
//     while(i > 1){
//          if (denominator%i ===0){
//             if (numerator%i === 0)
//                 greatestCommonDivisor = i;        
//             }
//         i--;
//     }
// }else if (numerator < denominator){
//     let i = numerator;
//     while(i > 1){
//          if (numerator%i ===0){
//             if (denominator%i === 0)
//                 greatestCommonDivisor = i;        
//             }
//         i--;
//     }
// }else {
//     greatestCommonDivisor = numerator;
// }
// console.writeln(`La fracción ${numerator}/${denominator} = ${numerator/greatestCommonDivisor}/\
// ${denominator/greatestCommonDivisor} invertida es la fracción ${denominator/greatestCommonDivisor}/\
// ${numerator/greatestCommonDivisor}`);
//Con Recursividad
const { Console } = require("console-mpds");
const console = new Console();

let numerator = console.readNumber(`Introduce el numerador de la fracción:`);
let denominator = console.readNumber(`Introduce el denominador de la fracción:`);
let msg = `La fracción ${numerator}/${denominator}`;

if (numerator != 0 && denominator != 0) {
    let greatestCommomDivisor = 1;
    if (numerator === denominator) {
        greatestCommomDivisor = numerator;
    }
    let numeratorSimplified = numerator;
    let denominatorSimplified = denominator;
    while (numeratorSimplified != denominatorSimplified) {
        if (numeratorSimplified > denominatorSimplified) {
            numeratorSimplified -= denominatorSimplified;
            greatestCommomDivisor = numeratorSimplified;
        }
        else {
            denominatorSimplified -= numeratorSimplified;
            greatestCommomDivisor = denominatorSimplified;
        }
    }
    if (greatestCommomDivisor > 1) {
        numerator /= greatestCommomDivisor;
        denominator /= greatestCommomDivisor;
        msg += ` = ${numerator}/${denominator}`;
    }
}
console.writeln(`${msg} invertida es la fracción ${denominator}/${numerator}`);