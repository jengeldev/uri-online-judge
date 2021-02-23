// PROBLEMA: 1036 - Fórmula de Bhaskara
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let delta = Math.pow(b, 2) - 4 * a * c;
if (delta >= 0 && a != 0) {
    let r1 = (-b + Math.sqrt(delta)) / (2 * a);
    let r2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log("R1 = " + r1.toFixed(5));
    console.log("R2 = " + r2.toFixed(5));
}
else{
    console.log("Impossivel calcular");
}