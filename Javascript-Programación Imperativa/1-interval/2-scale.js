//Para admitir factores de escalas decimales, en el archivo console-mpds/console.js del paquete de node, el metodo readnumber usa parseInt y debería usar parseFloat

// const { Console } = require("console-mpds");
// const console = new Console();

// const min = console.readNumber(`Introduce el mínimo del intervalo: `);
// const max = console.readNumber(
//   `Introduce el máximo del intervalo (superior o igual al mínimo): `
// );
// const scaleFactor = console.readNumber(
//   `Introduce un factor de escala positivo:`
// );
// const interval = max - min;
// const centerInterval = interval / 2 + min;
// const newMin = centerInterval - (interval / 2) * scaleFactor;
// const newMax = centerInterval + (interval / 2) * scaleFactor;
// console.writeln(
//   `El intervalo [${min}, ${max}] con factor de escala ${scaleFactor} es el intervalo [${newMin}, ${newMax}]`
// );

const { Console } = require("console-mpds");
const console = new Console();

const min = console.readNumber(`Introduce el mínimo del intervalo: `);
const max = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo): `
);
const scaleFactor = console.readString(
  `Introduce un factor de escala positivo:`
);

const centerOfInterval = (min + max) / 2;
const distanceToCenter = centerOfInterval - min;
const scaledDistance = distanceToCenter * scaleFactor;
const newMin = centerOfInterval - scaledDistance;
const newMax = centerOfInterval + scaledDistance;
console.writeln(
  `El intervalo [${min}, ${max}] con factor de escala ${scaleFactor} es el intervalo [${newMin}, ${newMax}]`
);
