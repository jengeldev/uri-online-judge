// PROBLEMA: 1018 - Cédulas
// RESPOSTA: Accepted

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = parseFloat(lines.shift());

let valorNotas = [100,50,20,10,5,2,1];
let qtdNotas = new Array(valorNotas.length);

console.log(valor.toString())
for(let i=0; i<qtdNotas.length; i++){
    qtdNotas[i] = Math.floor(valor/valorNotas[i]);
    valor = valor%valorNotas[i];
    console.log(qtdNotas[i] + " nota(s) de R$ "+ valorNotas[i].toFixed(2).replace(".",","));
}

// if(valor>=100){
//     cem = Math.floor(valor/100);
//     resto = valor%100;
//     valor = resto;
// }
// if(valor>=50){
//     cinquenta = Math.floor(valor/50);
//     resto = valor%50;
//     valor =resto;
// }
// if(valor>=20){
//     vinte = Math.floor(valor/20);
//     resto = valor%20;
//     valor =resto;
// }

// if(valor>= 10){
//     dez = Math.floor(valor/10);
//     resto = valor%10;
//     valor =resto;
// }

// if(valor >=5){
//     cinco = Math.floor(valor/5);
//     resto = valor%5;
//     valor =resto;
// }
// if(valor >=2){
//     dois = Math.floor(valor/2);
//     resto = valor%2;
//     valor =resto;
// }

// if(valor>=1){
//     um = Math.floor(valor/1);
//     resto = valor%1;
//     valor =resto;
// }

// let resultado = `${valor}\n${cem} nota(s) de R$ 100,00\n${cinquenta} nota(s) de R$ 50,00\n${vinte} nota(s) de R$ 20,00\n${dez} nota(s) de R$ 10,00\n${cinco} nota(s) de R$ 5,00\n${dois} nota(s) de R$ 2,00\n${um} nota(s) de R$ 1,00`;
