// const { Console } = require("console-mpds");
// const console = new Console();

// console.writeln(`Primera duración:`);
// const hours = console.readNumber(`Dame las horas:`);
// const minutes = console.readNumber(`Dame las minutos:`);
// const seconds = console.readNumber(`Dame las segundos:`);

// console.writeln(`\nSegunda duración:`);
// const hours2 = console.readNumber(`Dame las horas:`);
// const minutes2 = console.readNumber(`Dame las minutos:`);
// const seconds2 = console.readNumber(`Dame las segundos:`);

// console.writeln(
//   `La suma es ${
//     minutes + minutes2 > 60 ? hours + hours2 + 1 : hours + hours2
//   }:${seconds + seconds2 > 60 ? minutes + minutes2 - 60 : minutes + minutes2}:${
//     seconds + seconds2 > 60 ? minutes + minutes2 - 60 : minutes + minutes2
//   }`
// );

const { Console } = require("console-mpds");
const console = new Console();

const SECONDS_HOUR = 3600;
const SECONDS_MINUTE = 60;

const msgDay = `Dame las horas:`;
const msgMonth = `Dame los minutos:`;
const msgYear = `Dame los segundos:`;

const hoursFirst = console.readNumber(`Primera duración:
${msgDay}`);
const minutesFirst = console.readNumber(`${msgMonth}`);
const secondsFirst = console.readNumber(`${msgYear}`);

const hoursSecond = console.readNumber(`Segunda duración:
${msgDay}`);
const minutesSecond = console.readNumber(`${msgMonth}`);
const secondsSecond = console.readNumber(`${msgYear}`);

const totalSeconds =
  (hoursFirst + hoursSecond) * SECONDS_HOUR +
  (minutesFirst + minutesSecond) * SECONDS_MINUTE +
  secondsFirst +
  secondsSecond;

const sumHours =
  totalSeconds / SECONDS_HOUR - (totalSeconds % SECONDS_HOUR) / SECONDS_HOUR;
const sumMinutes =
  (totalSeconds % SECONDS_HOUR) / SECONDS_MINUTE -
  ((totalSeconds % SECONDS_HOUR) % SECONDS_MINUTE) / SECONDS_MINUTE;
const sumSeconds = (totalSeconds % SECONDS_HOUR) % SECONDS_MINUTE;

console.writeln(`La suma es ${sumHours}:${sumMinutes}:${sumSeconds}`);
