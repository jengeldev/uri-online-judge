// PROBLEMA: 1019 - Conversão de Tempo
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let segundos = parseInt(lines.shift());

let arrayValorHMS = [3600, 60, 1];
let qtdHMS = new Array(arrayValorHMS.length);

for (let i = 0; i < qtdHMS.length; i++) {
    qtdHMS[i] = Math.floor(segundos / arrayValorHMS[i]);
    segundos = segundos % arrayValorHMS[i];
}

console.log(`${qtdHMS[0]}:${qtdHMS[1]}:${qtdHMS[2]}`);
