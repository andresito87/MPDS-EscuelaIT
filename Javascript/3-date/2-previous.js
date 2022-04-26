// Dame el día: 12
// Dame el mes: 12
// Dame el año: 12

// La fecha 12/12/12 y la siguiente es 11/12/12
// Dame el día: 1
// Dame el mes: 1
// Dame el año: 12

// La fecha 30/1/12 y la siguiente es 30/12/11
// Dame el día: 1
// Dame el mes: 4
// Dame el año: 12

// La fecha 1/4/12 y la siguiente es 30/3/12

const { Console } = require("console-mpds");
const console = new Console();

const dia = console.readNumber(`Dame el día:`);
const mes = console.readNumber(`Dame el mes:`);
const anyo = console.readNumber(`Dame el año:`);

console.write(
  `La fecha es ${dia}/${mes}/${anyo} y la anterior es ${
    dia === 1 ? 31 : dia - 1
  }/${dia === 1 && mes === 1 ? 12 : mes - 1}/${
    dia === 1 && mes === 1 ? anyo - 1 : anyo
  } `
); //hay que retocarlo
