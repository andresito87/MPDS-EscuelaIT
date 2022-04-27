// const { Console } = require("console-mpds");
// const console = new Console();

// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const day = console.readNumber(`Dame el día: `);
// const month = console.readNumber(`Dame el mes: `);
// const year = console.readNumber(`Dame el año: `);

// let monthDatePrevious = day === 1 ? month - 1 : month;
// monthDatePrevious = monthDatePrevious == 0 ? 12 : monthDatePrevious;
// let dayDatePrevious =  day === 1  ? DAYS_IN_MONTH[monthDatePrevious-1] : day - 1;
// let yearDatePrevious = day === 1  && month === 1 ? year - 1 : year;

// console.writeln(`La fecha ${day}/${month}/${year} y el anterior es ${dayDatePrevious}/${monthDatePrevious}/${yearDatePrevious}`);

const { Console } = require("console-mpds");
const console = new Console();

const dia = console.readNumber(`Dame el día:`);
const mes = console.readNumber(`Dame el mes:`);
const anyo = console.readNumber(`Dame el año:`);

console.write(
  `La fecha es ${dia}/${mes}/${anyo} y la anterior es ${
    dia === 1 ? 31 : dia - 1
  }/${dia === 1 && mes - 1 !== 0 ? mes - 1 : 12}/${
    dia === 1 && mes === 1 ? anyo - 1 : anyo
  } `
);
