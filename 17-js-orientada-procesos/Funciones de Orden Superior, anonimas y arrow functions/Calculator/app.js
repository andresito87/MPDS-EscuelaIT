const { Console } = require("console-mpds");
const console = new Console();

// Calculator with higher order function and arrow functions

const firstNumber = console.readNumber("Ingrese el primer numero: ");
const secondNumber = console.readNumber("Ingrese el segundo numero: ");
let isOperation;

do {
    let symbolOperation = console.readString("Ingrese la operacion a realizar: ");
    isOperation = true;

    switch (symbolOperation) {
        case "+":
            showCalculate(firstNumber, secondNumber, symbolOperation, (a, b) => a + b);
            break;
        case "-":
            showCalculate(firstNumber, secondNumber, symbolOperation, (a, b) => a - b);
            break;
        case "*":
            showCalculate(firstNumber, secondNumber, `x`, (a, b) => a * b);
            break;
        case "/":
            showCalculate(firstNumber, secondNumber, symbolOperation, (a, b) => a / b);
            break;
        default:
            console.writeln("Operacion no valida");
            isOperation = false;
            break;
    }
} while (!isOperation);

function showCalculate(number1, number2, symbolOperation, operation) {
    console.writeln(`${number1} ${symbolOperation} ${number2} = ${operation(number1, number2)}`);
}

