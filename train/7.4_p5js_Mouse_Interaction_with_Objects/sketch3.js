var bubbles = [];

function setup() {
    createCanvas(600, 500);
    for (let i = 0; i < 10; i++) {
        var x = random(0, width);
        var y = random(0, height);
        var r = random(20, 60);
        var b = new Bubble(x, y, r);
        bubbles.push(b);
    }

}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}


class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.farbe = 0;

    }
    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            this.farbe = 255;
        }
    }
    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.farbe, 0, 0);
        ellipse(this.x, this.y, this.r * 2);
    }
}