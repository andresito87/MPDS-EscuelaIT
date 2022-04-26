const { Console } = require("console-mpds");
const console = new Console();

let minInterval = console.readNumber(`Introduce el mínimo del intervalo:`);
let maxInterval = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);
point = console.readNumber(`Introduce un punto:`);

console.writeln(
  `\nEl intervalo [${minInterval},${maxInterval}] ${
    minInterval <= point && point <= maxInterval ? "si" : "no"
  } incluye el punto ${point}`
);
