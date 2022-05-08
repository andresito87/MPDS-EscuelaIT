// 1.-Escribe un código que determine si una cadenas de caracteres es un palíndromo, sin considerar espacios intermedios ni acentos de la cadena. 
// P.e.: "Dabale arroz a la zorra el abad" sí es un palímdromo

const { Console } = require("console-mpds");
const console = new Console();

let text = console.readString("Dame la cadena, por favor");

let cleanedText = ``;
for (let i = 0; i < text.length; i++) {

    if (text[i] != " ") {
        text[i] == "á" ? "a" : "";
        text[i] == "é" ? "e" : ""
        text[i] == "í" ? "i" : ""
        text[i] == "ó" ? "o" : ""
        text[i] == "ú" ? "u" : ""
        cleanedText += text[i].toLowerCase();
    }
}

let i = 0;
let palindrome;
let middlepointText = cleanedText.length / 2;
do {
    palindrome = cleanedText[i] === cleanedText[cleanedText.length - 1 - i]
    i++;
} while (palindrome && i < middlepointText)

console.writeln(`La frase introducida ${palindrome ? `si` : `no`}  es un palindromo`)
