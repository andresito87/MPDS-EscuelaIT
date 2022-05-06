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