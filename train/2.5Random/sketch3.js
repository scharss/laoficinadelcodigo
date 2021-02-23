var angulo = 0;

function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    var x = map(cos(angulo), -1, 1, 0, width);
    var y = map(sin(angulo), -1, 1, 0, height);
    line(width / 2, height / 2, x, y);
    ellipse(x, y, 20, 20);
    angulo += 0.05;
}