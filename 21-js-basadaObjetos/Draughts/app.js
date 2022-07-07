const { Console } = require("console-mpds");
const console = new Console();

Draughts();

function Draughts() {
    let continueDialog = initYesNoDialog(`¿Quieres jugar otra partida? `);
    do {
        const game = initGame();
        game.play();
        continueDialog.read();
    } while (continueDialog.isAffirmative());
}

function initGame() {
    let game = {
        turn: 0,
        MAX_PLAYERS: 2,
        TOKEN_X: "X",
        TOKEN_Y: "Y",
        TOKEN_EMPTY: "_",
        MAX_ROWS_COLUMNS: 8,
        board: [["_", "Y", "_", "Y", "_", "Y", "_", "Y"],
        ["Y", "_", "Y", "_", "Y", "_", "Y", "_"],
        ["_", "Y", "_", "Y", "_", "Y", "_", "Y"],
        ["_", "_", "_", "_", "_", "_", "_", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "_"],
        ["X", "_", "X", "_", "X", "_", "X", "_"],
        ["_", "X", "_", "X", "_", "X", "_", "X"],
        ["X", "_", "X", "_", "X", "_", "X", "_"]],


        play: function () {
            let winner;
            do {
                this.writelnTokens();
                this.placeToken();
                if (!winner) {
                    this.nextTurn();
                }
            } while (!winner);
            this.writelnTokens();
            this.writeWinner();
        },

        writelnTokens: function () {

            for (let i = 0; i < this.board.length; i++) {
                console.writeln(this.board[i]);
            }
        },

        placeToken: function () {
            console.writeln(`Turno para ${this.getToken()}`);
            let error;
            let origin;
            do {
                origin = initCoordinate();
                origin.read('origen', this.MAX_ROWS_COLUMNS);
                error = !this.isOccupied(origin, this.getToken());
                if (error) {
                    console.writeln(`No hay una ficha de la propiedad de ${this.getToken()}`);
                }
            } while (error);

            let target;
            let validMovement;
            do {
                target = initCoordinate();
                target.read('destino', this.MAX_ROWS_COLUMNS);
                error = !this.isEmpty(target);
                validMovement = this.isMovement(target);
                if (error) {
                    console.writeln(`Indique una celda vacía`);
                }
                else if (!validMovement) {
                    console.writeln(`Movimiento inválido`);
                }
            } while (error || !validMovement);
            this.putEmptyToken(origin);
            this.putToken(target, this.getToken());
        },

        isMovement: function ({ row, column }) {
            return (row + column) % 2 === 1;
        },

        nextTurn: function () {
            this.turn = (this.turn + 1) % this.MAX_PLAYERS;
        },

        putEmptyToken: function (coordinate) {
            this.putToken(coordinate, this.TOKEN_EMPTY);
        },

        putToken: function (coordinate, color) {
            this.board[coordinate.row][coordinate.column] = color;
        },

        isEmpty: function ({ row, column }) {
            return this.board[row][column] === this.TOKEN_EMPTY;
        },

        getToken: function () {
            return this.turn === 0 ? this.TOKEN_Y : this.TOKEN_X;
        },

        isOccupied: function (coordinate, color) {
            return this.board[coordinate.row][coordinate.column] === color;
        },

        writeWinner: function () {
            console.writeln(`Victoria para ${this.getToken()}`);
        },

    }
    return game;
}

function initCoordinate() {
    return {
        row: undefined,
        column: undefined,

        read: function (title, max) {
            this.row = read(`Fila ${title}`, max);
            this.column = read(`Columna ${title}`, max);
        }
    };

    function read(title, max) {
        let position;
        let error;
        do {
            position = console.readNumber(`${title}: `);
            error = position < 1 || max < position;
            if (error) {
                console.writeln(`Por favor un numero entre 1 y ${max} inclusives`)
            }
        } while (error);
        return position - 1;
    }
}

function initYesNoDialog(question) {
    return {
        question: question,
        answer: ``,

        read: function () {
            let error = false;
            do {
                answer = console.readString(this.question);
                error = !this.isAffirmative() && !this.isNegative();
                if (error) {
                    console.writeln(`Por favor, responda "si" o "no"`);
                }
            } while (error);
        },

        isAffirmative: function () {
            return answer === `si`;
        },

        isNegative: function () {
            return answer === `no`;
        }
    };
}