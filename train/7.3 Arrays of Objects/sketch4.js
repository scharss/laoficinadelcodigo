let bubbles = [];
let rr = 0;
let gg = 255;
let bb = 0;

function setup() {
    createCanvas(600, 500);
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r)
    bubbles.push(b);
}

function draw() {
    background(0);
    for (let bubble of bubbles) {
        bubble.move();
        bubble.show();
    }

}


class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        noFill();
        let rr = random(0, 255);
        let gg = random(0, 255);
        let bb = random(0, 255);
        stroke(rr, gg, bb);
        strokeWeight(4);
        ellipse(this.x, this.y, this.r * 2);
    }

}