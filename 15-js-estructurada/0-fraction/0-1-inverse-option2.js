const { Console } = require("console-mpds");
const console = new Console();

//Recursividad para calcular Máximo común divisor(gcd)

const numerator = console.readNumber(`Introduce el numerador de la fracción: `);
const denominator = console.readNumber(`Introduce el denominador de la fracción: `);
let gcd;

if (numerator > denominator){
    let i = denominator;
    while(i > 1){
         if (denominator%i ===0){
            if (numerator%i === 0)
                gcd = i;        
            }
        i--;
    }
}else if (numerator < denominator){
    let i = numerator;
    while(i > 1){
         if (numerator%i ===0){
            if (denominator%i === 0)
                gcd = i;        
            }
        i--;
    }
}else {
    gcd = numerator;
}
console.writeln(`La fracción ${numerator}/${denominator} = ${numerator/gcd}/\
${denominator/gcd} invertida es la fracción ${denominator/gcd}/\
${numerator/gcd}`);