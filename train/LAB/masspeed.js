var x = 0;
var speed = 5;

function setup() {
    createCanvas(600, 500);

}

function draw() {


    //background(200);
    //ellipse(x + speed, height / 2, 50, 50);
    //speed = speed + 1;


    background(0);
    strokeWeight(4);
    stroke(200);
    for (var x = 0; x <= width; x += 50) {
        fill(random(0, 255), random(0, 255), random(0, 255))
        ellipse(x + speed, 300, 25, 25);

    }
    speed = speed + 1;

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