// const { Console } = require("console-mpds");
// const console = new Console();

// let minimum = 0;
// let maximum = 0;
// let numOfIntervals = 0;
// let isOk = true;
// do {
//     minimum = console.readNumber(`Introduce el mínimo del intervalo:`);
//     maximum = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo):`);
//     isOk = maximum > minimum;
//     if (!isOk) {
//         console.writeln(`Error!!! El máximo debe ser superior o igual al mínimo`);
//     }

// } while (!isOk);
// do {
//     numOfIntervals = console.readNumber(`Introduce una cantidad positiva de intervalos:`);
//     isOk = numOfIntervals > 0;
//     if (!isOk) {
//         console.writeln(`Error!!! La cantidad debe ser positiva`);
//     }

// } while(!isOk);
// let msg = `El intervalo [${minimum}, ${maximum}] dividido en ${numOfIntervals} intervalos son `;
// const lengthNewIntervals = (maximum - minimum) / numOfIntervals;
// for (let i = 0; i < numOfIntervals; i++) {
//     msg += `[${minimum + i * lengthNewIntervals}, ${minimum + (i + 1) * lengthNewIntervals}]`;
//     if (i < numOfIntervals - 2) {
//         msg += `, `;
//     }
//     else {
//         if (i < numOfIntervals - 1) {
//             msg += ` y `;
//         }
//     }
// }
// console.writeln(`${msg}`);

const { Console } = require("console-mpds");
const console = new Console();

let minimumInterval = console.readNumber(` Introduce el mínimo del intervalo:`);
let maximumInterval = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
    while(maximumInterval < minimumInterval)
    {
        console.writeln(`Error!!! El máximo debe ser superior o igual al máximo`);
        maximumInterval = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
    }
let numberOfIntervals = console.readNumber(`Introduce una cantidad positiva de intervalos:`);
    while(numberOfIntervals <= 0)
    {
        console.writeln(`Error!!! La cantidad debe ser positiva`);
        numberOfIntervals = console.readNumber(`Introduce una cantidad positiva de intervalos:`);
    }
    
const lenghtInterval = (maximumInterval - minimumInterval)/(numberOfIntervals);

console.write(`El intervalo [${minimumInterval}, ${maximumInterval}] dividido en ${numberOfIntervals} ${numberOfIntervals === 1 ? "es ":"son "}`);
for(let i = 0; i<numberOfIntervals;i++){
    
    let aux = (minimumInterval + (i*lenghtInterval));
    
    if (i===0){
        console.write(`[${minimumInterval}, ${aux+lenghtInterval}]`);
    }
    else if(i===(numberOfIntervals-1))
    {
        let anterior = minimumInterval + (i*lenghtInterval);
        console.write(` y [${anterior}, ${maximumInterval}]`);
    }
    else 
    {
        let anterior = minimumInterval + (i*lenghtInterval);
        console.write(`[${anterior}, ${aux+lenghtInterval}]`);
    }
}