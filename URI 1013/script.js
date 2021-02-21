// PROBLEMA: 1013 - O Maior
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let maiorAB = (a+b+Math.abs(a-b)) / 2;

let maiorABC = (maiorAB + c+Math.abs(maiorAB-c))/2;

console.log(maiorABC + " eh o maior");
