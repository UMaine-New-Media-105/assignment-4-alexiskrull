function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  firework1 = {
    x:50,
    y:50,
    size:2,
    num:14,
    color:"red"
  }
  firework2 = {
    x:150,
    y:200,
    size:1.5,
    num:10,
    color:"blue"
  }
  firework3 = {
    x:300,
    y:100,
    size:3,
    num:14,
    color:"yellow"
  }
}

function draw() {
  background("midnightblue");
  drawFirework(firework1);
  drawFirework(firework2);
  drawFirework(firework3);
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

