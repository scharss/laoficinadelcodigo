var ball = {
    x: 0,
    y: 300,
    xspeed: 3,
    yspeed: -4
}


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    noFill();
    strokeWeight(4);
    stroke(255);

    ellipse(ball.x, ball.y, 25, 25);
    if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.xspeed * -1;
    }
    if (ball.y > height || ball.y < 0) {
        ball.yspeed = ball.yspeed * -1;
    }
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;

}