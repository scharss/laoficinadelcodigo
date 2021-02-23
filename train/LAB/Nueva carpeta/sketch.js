function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  
  var x = 0;
  
  while(x<=width){
  ellipse(x,200,25,25);
  x= x+50;
}
  
  
  
}