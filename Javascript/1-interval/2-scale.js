// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 10
// Introduce un factor de escala positivo: 2

// El intervalo [4, 10] con factor de escala 2 es el intervalo [1, 13]
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 10
// Introduce un factor de escala positivo: 0.5

// El intervalo [4, 10] con factor de escala 0.5 es el intervalo [5.5, 8.5]
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 10
// Introduce un factor de escala positivo: 0

// El intervalo [4, 10] con factor de escala 0 es el intervalo [7, 7]

const { Console } = require("console-mpds");
const console = new Console();

const min = console.readNumber(`Introduce el mínimo del intervalo: `);
const max = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo): `
);
const scaleFactor = console.readNumber(
  parseFloat(`Introduce un factor de escala positivo:`)
);
const interval = max - min;
const centerInterval = interval / 2 + min;
const newMin = centerInterval - (interval / 2) * scaleFactor;
const newMax = centerInterval + (interval / 2) * scaleFactor;
console.writeln(
  `El intervalo [${min}, ${max}] con factor de escala ${scaleFactor} es el intervalo [${newMin}, ${newMax}]`
);
