// PROBLEMA: 1041 - Coordenadas de um Ponto
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());
let string = "";

if (y > 0) {
    if (x > 0)
        string = "Q1";
    else
        string = "Q2";
}
if (y < 0) {
    if (x > 0)
        string = "Q4";
    else
        string = "Q3";
}
if(y == 0 && x!=0)
    string = "Eixo X";
if(x==0 && y!=0)
    string = "Eixo Y";
if (y == 0 && x==0){
    string = "Origem";
}


console.log(string);