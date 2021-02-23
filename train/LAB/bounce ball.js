var x = 0;
var y = 0;
var speed = 3
var col = {
    r: 255,
    g: 0,
    b: 0
}


function setup() {
    createCanvas(600, 500);

}

function draw() {
    background(220);
    stroke(1);
    strokeWeight(4);
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.g = random(0, 255);

    ellipse(x, height / 2, 50, 50);
    if (x > width || x < 0) {
        fill(col.r, col.g, col.b);
        speed = speed * -1;

        console.log(col.r);
        console.log(col.g);
        console.log(col.b);

    }
    x += speed

}






/*
{
  ellipse(x,200,50,50);
  if(x > width || x < 0){
	  speed = speed * -1;
  }
  x = x + speed; 
}
//*************************************
for (var i = 0; i < 500; i += 20) {
        line(i, 50, i + 50, 100);
    }



*/