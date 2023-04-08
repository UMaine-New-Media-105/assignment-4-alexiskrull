let numRows = 5;
let numCols = 5;

let offsetX;
let offsetY;

function setup() {
  createCanvas(700, 500);
  noLoop();
  offsetX = width/numCols;
  offsetY = height/numRows;
  angleMode(DEGREES);
  firework1 = {
    x:30,
    y:30,
    size:1,
    num:14,
    color:"red"
  }
  firework2 = {
    x:80,
    y:80,
    size:1,
    num:10,
    color:"blue"
  }
  firework3 = {
    x:110,
    y:40,
    size:1,
    num:14,
    color:"yellow"
  }
}

function draw() {
  background("midnightblue");
  for(let i = 0; i < width/offsetX; i++){ //make rows
    for(let j = 0; j < height/offsetY; j++){ //make columns
      push();
      translate(offsetX * i, offsetY * j); //move over and down a set amount (*i or *j to adjust from origin to current row)
      drawFirework(firework1);
      drawFirework(firework2);
      drawFirework(firework3);
      pop();
    }
  }
}

function drawFirework(firework){
  push();
  stroke(firework.color);
  translate(firework.x, firework.y);
  scale(firework.size);
  for(i = 0; i<firework.num; i++){
    line(0, 5, 0, 20);
    rotate(360/firework.num);
  }
  pop();
}

