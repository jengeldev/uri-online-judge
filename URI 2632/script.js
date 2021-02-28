// PROBLEMA: 2632 - Magic and Sword
// RESPOSTA: Accepted

const { ADDRGETNETWORKPARAMS } = require("dns");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let arr1 = lines.shift().split(" ");
let arr2 = lines.shift().split(" ");


function areaCoordenada(w, h, x, y) {
    return {
        width: w,
        height: h,
        x0: x,
        y0: y
    }
}

function magiaLevel(element, lvl, x, y) {
    return {
        element: element,
        level: lvl,
        cx: x,
        cy: y
    }
}

function getDano(element, lvl) {
    let objDano = {}

    switch (element) {
        case "fire":
            objDano.dano = 200;
            switch (lvl) {
                case "1":
                    objDano.raio = 20;
                    break
                case "2":
                    objDano.raio = 30;
                    break
                case "3":
                    objDano.raio = 50;
                    break
            }
            break;
        case "water":
            objDano.dano = 300;
            switch (lvl) {
                case "1":
                    objDano.raio = 10;
                    break
                case "2":
                    objDano.raio = 25;
                    break
                case "3":
                    objDano.raio = 40;
                    break
            }
            break;
        case "earth":
            objDano.dano = 400;
            switch (lvl) {
                case "1":
                    objDano.raio = 25;
                    break
                case "2":
                    objDano.raio = 55;
                    break
                case "3":
                    objDano.raio = 70;
                    break
            }
            break;
        case "air":
            objDano.dano = 100;
            switch (lvl) {
                case "1":
                    objDano.raio = 18;
                    break
                case '2':
                    objDano.raio = 38;
                    break
                case '3':
                    objDano.raio = 60;
                    break
            }
            break;
    }
    objDano.area = Math.PI * Math.pow(objDano.raio,2);
    return objDano;
}

let a = areaCoordenada(arr1[0], arr1[1], arr1[2], arr1[3]);
let b = magiaLevel(arr2[0], arr2[1], arr2[2], arr2[3]);



let d = getDano(b.element, b.level);
console.log(d.dano + " " + d.raio + " " + d.area);