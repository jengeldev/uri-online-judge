// PROBLEMA: 1021 - Notas e Moedas
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(".");

let intNota = parseInt(lines.shift());
let intMoeda = parseInt(lines.shift());

let valorNotas = [100, 50, 20, 10, 5, 2];
let qtdNotas = new Array(valorNotas.length);
console.log("NOTAS:");

for (let i = 0; i < qtdNotas.length; i++) {
    qtdNotas[i] = Math.floor(intNota / valorNotas[i]);
    intNota = intNota % valorNotas[i];
    console.log(qtdNotas[i] + " nota(s) de R$ " + valorNotas[i].toFixed(2));
}

intMoeda += (intNota * 100);
let valorMoedas = [100, 50, 25, 10, 5, 1];
let qtdMoedas = new Array(valorMoedas.length);

console.log("MOEDAS:");
for (let i = 0; i < qtdMoedas.length; i++) {
    qtdMoedas[i] = Math.floor(intMoeda / valorMoedas[i]);
    intMoeda = intMoeda % valorMoedas[i];

    console.log(qtdMoedas[i] + " moeda(s) de R$ " + (valorMoedas[i] / 100).toFixed(2));
}

