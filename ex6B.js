const prompt = require("prompt-sync")();
let a = prompt("entrer un nombre");
console.log(a);
let p = prompt("entrer une exposant");
console.log(p);
let b = 0;
let pui = 1;
while(b<p){
    pui = pui * a
    b++
}
console.log(pui);
