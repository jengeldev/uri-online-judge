// PROBLEMA: 1012 - Área
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

function areaTriRet() {
    return "TRIANGULO: " + ((a * c) / 2).toFixed(3) + "\n";
}

function areaCirculo() {
    return "CIRCULO: " + (3.14159 * Math.pow(c, 2)).toFixed(3) + "\n";
}

function areaTrapezio() {
    return "TRAPEZIO: " + ((a + b) / 2 * c).toFixed(3) + "\n";
}
function areaQuadrado() {
    return "QUADRADO: " + Math.pow(b, 2).toFixed(3) + "\n"
}

function areaRetanugulo() {
    return "RETANGULO: " + (a*b).toFixed(3) + "\n"

}
console.log(areaTriRet() + areaCirculo() + areaTrapezio() + areaQuadrado() + areaRetanugulo());