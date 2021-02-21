// PROBLEMA: 1010 - Cálculo Simples
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const pi = 3.14159;
let r = parseFloat(lines.shift());

let volume = (4.0/3.0) * pi * Math.pow(r,3);

console.log("VOLUME = " + volume.toFixed(3));