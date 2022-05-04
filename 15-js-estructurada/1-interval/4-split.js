// Validando datos del usuario: mínimo menor o igual que el máximo
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): -10
// Error!!! El máximo debe ser superior o igual al máximo
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 10
// Introduce una cantidad positiva de intervalos: -3
// Error!!! La cantidad debe ser positiva
// Introduce una cantidad positiva de intervalos: 0
// Error!!! La cantidad debe ser positiva
// Introduce una cantidad positiva de intervalos: 3

// El intervalo [4, 10] dividido en 3 intervalos son [4, 6], [6, 8] y [8, 10]
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 10
// Introduce una cantidad positiva de intervalos: 2

// El intervalo [4, 10] dividido en 2 intervalos son [4, 7] y [7, 10]

const { Console } = require("console-mpds");
const console = new Console();

const minimumInterval = console.readNumber(` Introduce el mínimo del intervalo:`);

do {
    const maximumInterval = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
}while(maximumInterval < minimumInterval)
    console.writeln(`Error!!! El máximo debe ser superior o igual al máximo`);

do {
    const amountIntervals = console.writeln(`Introduce una cantidad positiva de intervalos:`)
}while(amountIntervals <= 0){
    console.writeln(`Error!!! La cantidad debe ser positiva`);
}

if (amountIntervals >2){
const interval = (maximumInterval - minimumInterval)/amountIntervals-1;
}else{
const interval = (maximumInterval - minimumInterval)/2;
}

// Falta Mostrar resultados

console.writeln(`El intervalo [${minimumInterval}, ${maximumInterval} dividido en ${amountIntervals = 1 ? "es":"son"}  \
      `)