// PROBLEMA: 1012 - Área
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

function areaTriRet() {
    return ((a * c) / 2).toFixed(3);
}

function areaCirculo() {
    return (3.14159 * Math.pow(c, 2)).toFixed(3);
}

function areaTrapezio() {
    return ((a + b) / 2 * c).toFixed(3);
}
function areaQuadrado() {
    return Math.pow(b, 2).toFixed(3);
}

function areaRetanugulo() {
    return (a * b).toFixed(3);

}
console.log("TRIANGULO: " + areaTriRet() + "\nCIRCULO: "+ areaCirculo() + "\nTRAPEZIO: " +areaTrapezio() + "\nQUADRADO: " + areaQuadrado() + "\nRETANGULO: " + areaRetanugulo());