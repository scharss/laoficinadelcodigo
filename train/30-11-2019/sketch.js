var circulo = {
    x: 0,
    y: 200,
    diameter: 50,

}; //Object

console.log(circulo.x);
console.log(circulo.y);
console.log(circulo.diameter);

var r = 218;
var g = 160;
var b = 221;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // background
    background(r, g, b);
    // ellipse
    fill(250, 200, 200);
    ellipse(circulo.x, circulo.y, circulo.diameter, circulo.diameter);

    circulo.x = circulo.x + 1;
}