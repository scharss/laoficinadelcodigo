let mobilenet;

let puffin;

function modelReady(){
  console.log('model is ready!!');
}

function imageReady(){
   image(puffin,0,0 , width, height);
  //ge en förutsägelse på vad det är
  mobilenet.predict(puffin, gotResults);//cb
}
//ml5 works with error first callbacks
function gotResults(error, results){
  if(error){
    console.error(error);
}else{
  console.log(results);
  let label = results[0].className;
  let prob = results[0].probability;
  textSize(48);
  fill(0);
  text(label, 10,height -100);
  createP(label);//creating a dom element
  createP(prob);
}
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg('images/puffin.jpg', imageReady);//cb
  puffin.hide();
  background(0);
 
  
  mobilenet = ml5.imageClassifier('MobileNet',modelReady);//cb
}

function draw() {
 
}