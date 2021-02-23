let lista = [];

function setup() {
    createCanvas(600, 400);
}



function draw() {
    background(0);
    var x = prompt(">1");
    var x = prompt(">2");
    lista.push(x);
    alert(lista[0]);
    alert(lista[1]);

}