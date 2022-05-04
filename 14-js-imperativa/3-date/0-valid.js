const { Console } = require("console-mpds");
const console = new Console();

const day = console.readNumber(`Dame el día:`);
const mounth = console.readNumber(`Dame el mes:`);
const year = console.readNumber(`Dame el año:`);

console.write(
  `La fecha ${day}/${mounth}/${year} ${
    day <= 31 && mounth <= 12 ? "sí" : "no"
  } es válida`
);

// const { Console } = require("console-mpds");
// const console = new Console();

// const MAXDAYS=30;
// const MAXMONTHS=12;
// let day;
// let month;
// let year;
// for(i=0; i<3; i++){
//     let text=`dame el `;
//     let fact;
//     let min;
//     switch(i){
//         case 0:
//             text+=`día: `;
//             fact = console.readNumber(text);
//             day=fact;
//             break;
//         case 1:
//             text+=`mes: `;
//             fact = console.readNumber(text);
//             month=fact;
//             break;
//         case 2:
//             text+=`año: `;
//             fact = console.readNumber(text);
//             year=fact;
//             break;
//     }
// }

// let msg=`la fecha ${day}/${month}/${year}`;
// let valid= true;
// day>MAXDAYS ? valid=false:"";
// month>MAXMONTHS ? valid=false:"";
// valid=== true? msg+=` es válida`: msg+=` no es válida`;
// console.writeln(msg);