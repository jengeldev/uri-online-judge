// PROBLEMA: 1010 - Cálculo Simples
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let item1 = lines.shift().split(" ");
let item2 = lines.shift().split(" ");

let total = (item1[1] * item1[2]) + (item2[1] * item2[2]);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2)) ;