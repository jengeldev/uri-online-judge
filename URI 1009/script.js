// PROBLEMA: 1009 - Salário com Bônus
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let vendorName = lines.shift();
let baseSalary = parseFloat(lines.shift());
let totalSales = parseFloat(lines.shift());

let finalSalary = baseSalary + (totalSales * 0.15);

console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`);
