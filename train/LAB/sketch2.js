var x = 0;
var speed = 3;

function setup() {
    createCanvas(600, 500);

}

function draw() {
    background(138);
    ellipse(x, 250, 50, 50);

    if (x > width || x < 0) {
        fill(random(0, 255), 0, random(0, 255))

        speed = speed * -1;
        console.log("vuelve");
    }
    x = x + speed;

}