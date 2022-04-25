const { Console } = require("console-mpds");
const console = new Console();

const name = console.readString("Dime tu nommbre, por favor");

console.writeln(`Hola ${name}`);
