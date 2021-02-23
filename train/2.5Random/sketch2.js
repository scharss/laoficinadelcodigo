var spot = {
    x: 20,
    y: 50
}

var colr = {
    r: 100,
    g: 45,
    b: 250
}

function setup() {
    createCanvas(600, 400)
    background(0)
}

function draw() {
    spot.x = random(0, width);
    spot.y = random(0, height);
    colr.r = random(0, 255);
    colr.g = random(0, 255);
    colr.b = random(0, 255);
    //let w = random(0, width);
    //let h = random(0, height)
    fill(colr.r, colr.g, colr.b);
    rect(spot.x, spot.y, 25, 25)
}