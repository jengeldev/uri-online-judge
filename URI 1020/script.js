// PROBLEMA: 1020 - Idade em Dias
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


let dias = parseInt(lines.shift());

let arrayAnosMesDia = [365, 30, 1];
let arrayQtdAnoMesDia = new Array(arrayAnosMesDia.length);

for(let i = 0; i<arrayQtdAnoMesDia.length;i++){
    arrayQtdAnoMesDia[i] = Math.floor(dias/arrayAnosMesDia[i]);
    dias = dias%arrayAnosMesDia[i];
}

console.log(`${arrayQtdAnoMesDia[0]} ano(s)\n${arrayQtdAnoMesDia[1]} mes(es)\n${arrayQtdAnoMesDia[2]} dia(s)`);