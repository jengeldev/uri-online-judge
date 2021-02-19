// PROBLEMA: 1008 - Salário
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");

let funcNum = parseInt(lines.shift());
let workHours = parseInt(lines.shift());
let paymentPerHour = parseFloat(lines.shift()); 

let salary = paymentPerHour * workHours;

console.log(`NUMBER = ${funcNum}\nSALARY = U$ ${salary.toFixed(2)}`);
