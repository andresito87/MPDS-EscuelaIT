const { Console } = require("console-mpds");
const console = new Console();

let season = "";

let day = console.readNumber(`Escriba un día (1-30):`);
    while (day<1 || day>30)
        day = console.readNumber(`Introduce un día entre 1 y 30`);
    
let month = console.readNumber(`Escriba un mes (1-12):`);
    while (month<1 || month>12)
        month = console.readNumber(`Introduce un mes entre 1 y 12`);
    
let year = console.readNumber(`Escriba un año (1-....):`);
    while (year < 1)
        year = console.readNumber(`Introduce un año positivo`);

if (month >=12 || month <=3  ){
    if (month === 12 && day > 21 || month === 1 && day < 21)
        season = "a primeros de invierno";
    else if(month === 1 && day > 21 || month === 2 && day < 21)
        season = "a mediados de invierno";
    else
        season = " a finales de invierno";
}
else if(month >=3 || month <=6 )
{
    if (month === 3 && day > 21 || month === 4 && day < 21)
        season = "a primeros de primavera";
    else if(month === 4 && day > 21 || month === 5 && day < 21)
        season = "a mediados de primavera";
    else
        season = "a finales de primavera";
}
else if(month >=6  || month <=9 )
{
    if (month === 6 && day > 21 || month === 7 && day < 21)
        season = "a primeros de verano";
    else if(month === 7 && day > 21 || month === 8 && day < 21)
        season = "a mediados de verano";
    else
    season = "a finales de verano";
}
else
{
    if (month === 9 && day > 21 || month === 10 && day < 21)
        season = "a primeros de otoño";
    else if(month === 10 && day > 21 || month === 11 && day < 21)
        season = "a mediados de otoño";
    else
    season = "a finales de otoño";
}

console.writeln(`El día ${day} del ${month} de ${year} cae ${season}`);