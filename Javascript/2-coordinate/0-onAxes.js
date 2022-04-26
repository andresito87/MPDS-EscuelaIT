// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  2

// La coordenada (2, 2) no está en ningún eje
// Dame la abcisa de la coordenada:  0
// Dame la ordenada de la coordenada:  2

// La coordenada (0, 2) está en el eje de abcisas
// Dame la abcisa de la coordenada:  2
// Dame la ordenada de la coordenada:  0

// La coordenada (0, 2) está en el eje de ordenadas
// Dame la abcisa de la coordenada:  0
// Dame la ordenada de la coordenada:  0

// La coordenada (0, 0) está en el eje de abcisas y de ordenadas

const { Console } = require("console-mpds");
const console = new Console();

let abscissa = console.readNumber(`Dame la abcisa de la coordenada:`);

let ordered = console.readNumber(`Dame la ordenada de la coordenada:`);

let axisXY =
  abscissa == 0 && ordered == 0
    ? "esta en el eje de abcisas y de ordenadas"
    : "";
let inOrdered = abscissa > 0 && ordered == 0 ? "esta en el eje de ordenadas"
let inAbscissas = 