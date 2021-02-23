var x = prompt("entre número");
var y = Number(x);
var w = prompt("entre número");
var z = Number(w);
console.log(typeof(y));


function setup() {
    createCanvas(400, 300);


}

function draw() {
    background(200, 50, 150);


    rect(y, z, 50, 70);


}