// Simplificando la fracción mediante el máximo común
//divisor (visto en el "Recursividad en la Ciencia"
//del tema "Patrones" del módulo de Fundamento)

// Introduce el numerador de la fracción: 3
// Introduce el denominador de la fracción: 18

// La fracción 3/18 = 1/6 invertida es la fracción 6/1
// Introduce el numerador de la fracción: 2
// Introduce el denominador de la fracción: 5

// La fracción 2/5 invertida es la fracción 5/2

const { Console } = require("console-mpds");
const console = new Console();

const numerator = console.readNumber(`Introduce el numerador de la fracción: `);
const denominator = console.readNumber(`Introduce el denominador de la fracción: `);
let greatestCommonDivisor;

if (numerator > denominator){
    let i = denominator;
    while(i > 1){
         if (denominator%i ===0){
            if (numerator%i === 0)
                greatestCommonDivisor = i;        
            }
        i--;
    }
}else if (numerator < denominator){
    let i = numerator;
    while(i > 1){
         if (numerator%i ===0){
            if (denominator%i === 0)
                greatestCommonDivisor = i;        
            }
        i--;
    }
}else {
    greatestCommonDivisor = numerator;
}
console.writeln(`La fracción ${numerator}/${denominator} = ${numerator/greatestCommonDivisor}/\
${denominator/greatestCommonDivisor} invertida es la fracción ${denominator/greatestCommonDivisor}/\
${numerator/greatestCommonDivisor}`);