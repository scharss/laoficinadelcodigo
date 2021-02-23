var x = 0;
var y = 200;
var diameter = 50;
var r = 250;
var g = 250;
var b = 100;

function setup() {
    createCanvas(600, 400);


}

function draw() {
    background(r, g, b);
    noStroke();
    fill(250, 200, 200);
    ellipse(x, y, diameter, diameter);
    x = x + 1;

}