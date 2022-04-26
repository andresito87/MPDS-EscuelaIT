// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9

// La longitud del intervalo [4, 9] es 5
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 4

// La longitud del intervalo [4, 4] es 0

const { Console } = require("console-mpds");
const console = new Console();

minInterval = console.readNumber(`Introduce el mínimo del intervalo:`);
maxInterval = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);

console.writeln(
  `La longitud del intervalo [${minInterval},${maxInterval}] es ${
    maxInterval - minInterval
  }`
);

minInterval = console.readNumber(`Introduce el mínimo del intervalo:`);
maxInterval = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);

console.writeln(
  `La longitud del intervalo [${minInterval},${maxInterval}] es ${
    maxInterval - minInterval
  }`
);
