var punto = {
    x: 100,
    y: 50
}

var col = {
    r: 255,
    g: 0,
    b: 0
}

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    punto.x = random(0, width);
    punto.y = random(0, height);
    fill(col.r, col.g, col.b, );
    //ellipse(punto.x, punto.y, 24, 24);
    noStroke();
    rect(punto.x, punto.y, 25, 25);
}