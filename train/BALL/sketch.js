function setup() {
    createCanvas(600, 600);
    background(200);
}

function draw() {


    ellipse(mouseX, mouseY, 60, 60);
    if (mouseIsPressed) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }
}