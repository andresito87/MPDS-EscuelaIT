// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  3
// Dame la ordenada de la coordenada:  2

// La coordenada origen (2, 2) y la coordenada destino (3, 2) si es un movimiento de la reina

// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  3

// La coordenada origen (2, 2) y la coordenada destino (2, 3) si es un movimiento de la reina

// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  1
// Dame la ordenada de la coordenada:  3

// La coordenada origen (2, 2) y la coordenada destino (1, 3) si es un movimiento de la reina

// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  6

// La coordenada origen (2, 2) y la coordenada destino (2, 6) si es un movimiento de la reina

// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  6
// Dame la ordenada de la coordenada:  2

// La coordenada origen (2, 2) y la coordenada destino (6, 2) si es un movimiento de la reina

// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  5
// Dame la ordenada de la coordenada:  5

// La coordenada origen (2, 2) y la coordenada destino (5, 5) si es un movimiento de la reina

// Coordenada origen:
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2
// Coordenada destino:
// Dame la abcisa de la coordenada:  4
// Dame la ordenada de la coordenada:  8

// La coordenada origen (2, 2) y la coordenada destino (4, 8) no es un movimiento de la reina

const { Console } = require("console-mpds");
const console = new Console();

console.writeln(`Coordenada origen:`);
let absOrigin = console.readNumber(`Dame la abcisa de la coordenada:`);
let ordOrigin = console.readNumber(`Dame la ordenada de la coordenada:`);
console.writeln(`Coordenada destino:`);
let absDestiny = console.readNumber(`Dame la abcisa de la coordenada:`);
let ordDestiny = console.readNumber(`Dame la ordenada de la coordenada:`);

console.writeln(
  `La coordenada oringen (${absOrigin}, ${ordOrigin}) y la coordenada destino (${absDestiny}, ${ordDestiny}) 
  ${
    (absOrigin + 1 === absDestiny && ordOrigin === ordDestiny) ||
    (absOrigin === absDestiny && ordOrigin + 1 === ordDestiny) ||
    (absOrigin + 1 == ordDestiny && ordOrigin + 1 === ordDestiny) ||
    (absOrigin - 1 == ordDestiny && ordOrigin - 1 === ordDestiny) ||
    (absOrigin - 1 === absDestiny && ordOrigin === ordDestiny) ||
    (absOrigin === absDestiny && ordOrigin - 1 === ordDestiny)
      ? "sí"
      : "no"
  } es un movimiento de reina`
);
//por hacer desde 0
