function setup() {
    createCanvas(600, 500);

}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);




    var x = 0;
    while (x <= width) {
        fill(0, 200, 255);
        ellipse(x, 100, 25, 25);
        x += 50;
    }

    for (var x = 0; x <= width; x += 50) {
        fill(255, 200, 0);
        ellipse(x, 300, 25, 25);
    }



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