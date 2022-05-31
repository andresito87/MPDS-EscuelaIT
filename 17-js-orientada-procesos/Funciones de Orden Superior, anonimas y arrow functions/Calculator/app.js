const { Console } = require("console-mpds");
const console = new Console();

// Orden Superior funciones anonimas arrow functions

let firstNumber = console.readNumber("Ingrese el primer numero: ");
let secondNumber = console.readNumber("Ingrese el segundo numero: ");
let operation = console.readString("Ingrese la operacion a realizar: ");

function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function Calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "+":
            return sum(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

console.writeln(Calculate(operation, firstNumber, secondNumber));



