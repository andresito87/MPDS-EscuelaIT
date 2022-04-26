// Dame el día: 12
// Dame el mes: 12
// Dame el año: 12

// La fecha 12/12/12 sí es válida
// Dame el día: 30
// Dame el mes: 30
// Dame el año: 30

const { Console } = require("console-mpds");
const console = new Console();

let dia = console.readNumber(`Dame el día:`);
let mes = console.readNumber(`Dame el mes:`);
let anyo = console.readNumber(`Dame el año:`);

console.write(
  `La fecha ${dia}/${mes}/${anyo} ${
    dia <= 31 && mes <= 12 ? "sí" : "no"
  } es válida`
); //no se contempla el caso de año bisiesto
