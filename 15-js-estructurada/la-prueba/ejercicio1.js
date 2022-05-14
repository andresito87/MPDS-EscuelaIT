const { Console } = require("console-mpds");
const console = new Console();

let text = console.readString("Dame la cadena, por favor");

let cleanedText = ``;
for (let i = 0; i < text.length; i++) {
    cleanedText += text[i].toLowerCase();
}

let palindrome = true;
let middlePoint = cleanedText.length / 2;
for (let i = 0; i <= middlePoint && palindrome; i++) {
    palindrome = cleanedText[i] === cleanedText[cleanedText.length - (i + 1)]
}
console.writeln(`La cadena introducida ${palindrome ? `si` : `no`} es un palindromo`)
