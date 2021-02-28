// PROBLEMA: 1040 - Média 3
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var lineNotas = lines.shift().split(" ");
var lineExame = parseFloat(lines.shift());

let media = 0;
let notas = [];

lineNotas.forEach(item => {
    notas.push(parseFloat(item));
});

notas[0] *= 2;
notas[1] *= 3;
notas[2] *= 4;
notas[3] *= 1;

notas.forEach(function (nota, index, arr) {
    media += nota;
    if (index == notas.length - 1)
        media /= 10;
})

console.log("Media: " + media.toFixed(1));
if (media >= 7) {
    console.log("Aluno aprovado.");
}
else if (media < 5) {
    console.log("Aluno reprovado.");
}
else {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + lineExame.toFixed(1));
    media = (media + lineExame) / 2;
    if (media >= 5)
        console.log("Aluno aprovado.");
    else
        console.log("Aluno reprovado.");
    console.log("Media final: " + media.toFixed(1));

}
