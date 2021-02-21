// PROBLEMA: 1021 - Notas e Moedas
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = parseFloat(lines.shift());

//declaração de array com valor de cada nota e outro para armazenar a quantidade de notas necessárias;
let valorNotas = [100, 50, 20, 10, 5, 2];
let qtdNotas = new Array(valorNotas.length);

console.log("NOTAS:");
//for pra calcular quantas notas de cada valor serão necessárias, já imprimindo cada uma delas;
for (let i = 0; i < qtdNotas.length; i++) {
    qtdNotas[i] = Math.floor(valor / valorNotas[i]);
    valor = valor % valorNotas[i];
    console.log(qtdNotas[i] + " nota(s) de R$ " + valorNotas[i].toFixed(2).replace(".", ","));
}
//declaração de array com valor de cada moeda e outro para armazenar a quantidade de moedas necessárias;
let valorMoedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let qtdMoedas = new Array(valorMoedas.length);

console.log("MOEDAS:");
//Roda o for para calcular quantas moedas de cada valor serão necessárias, já imprimindo cada uma delas;
for (let i = 0; i < qtdMoedas.length; i++) {
    qtdMoedas[i] = Math.floor(valor / valorMoedas[i]);
    valor = valor%valorMoedas[i];
    console.log(qtdMoedas[i] + " moeda(s) de R$ " + valorMoedas[i].toFixed(2).replace(".", ","));
}