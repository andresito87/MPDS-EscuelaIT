// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 2

// El intervalo [4, 9] no incluye el punto 2
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 5

// El intervalo [4, 9] si incluye el punto 5
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 9

// El intervalo [4, 9] si incluye el punto 9
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 12

// El intervalo [4, 9] no incluye el punto 12
// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 4
// Introduce un punto: 4

// El intervalo [4, 4] si incluye el punto 4

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

let minInterval2 = console.readNumber(`Introduce el mínimo del intervalo:`);
let maxInterval2 = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);
let point2 = console.readNumber(`Introduce un punto:`);

console.writeln(
  `\nEl intervalo [${minInterval2},${maxInterval2}] ${
    minInterval2 <= point2 && point2 <= maxInterval2 ? "si" : "no"
  } incluye el punto ${point2}`
);

let minInterval3 = console.readNumber(`Introduce el mínimo del intervalo:`);
let maxInterval3 = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);
point3 = console.readNumber(`Introduce un punto:`);

console.writeln(
  `\nEl intervalo [${minInterval3},${maxInterval3}] ${
    minInterval3 <= point3 && point3 <= maxInterval3 ? "si" : "no"
  } incluye el punto ${point3}`
);

let minInterval4 = console.readNumber(`Introduce el mínimo del intervalo:`);
let maxInterval4 = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);
point4 = console.readNumber(`Introduce un punto:`);

console.writeln(
  `\nEl intervalo [${minInterval4},${maxInterval4}] ${
    minInterval4 <= point4 && point4 <= maxInterval4 ? "si" : "no"
  } incluye el punto ${point4}`
);

let minInterval5 = console.readNumber(`Introduce el mínimo del intervalo:`);
let maxInterval5 = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
);
point5 = console.readNumber(`Introduce un punto:`);

console.writeln(
  `\nEl intervalo [${minInterval3},${maxInterval3}] ${
    minInterval5 <= point5 && point5 <= maxInterval5 ? "si" : "no"
  } incluye el punto ${point5}`
);
