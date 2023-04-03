let offsetX = 140;
let offsetY = 100;

function setup() {
  createCanvas(700, 500);
  noLoop();
  angleMode(DEGREES);
  colorMode(HSL);
  
  firework1 = {
    x:30,
    y:30,
    size:1,
    num:10,
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
    num:10,
    color:"yellow"
  }
}

function draw() {
  background("midnightblue");
  for(let i = 0; i < width/offsetX; i++){ //make rows
    for(let j = 0; j < height/offsetY; j++){ //make columns
      push();
      translate(offsetX * i, offsetY * j); //move over and down a set amount (*i or *j to adjust from origin to current row)
      
      //randomizes the size of each firework
      firework1.size = random(0.5, 1.25);
      firework2.size = random(0.5, 1.25);
      firework3.size = random(0.5, 1.25);
      
      //randomizes each firework color
      firework1.color = random(360);
      firework2.color = random(360);
      firework3.color = random(360);
      
      //randomizes number of firework lines (floor rounds down decimals to whole numbers)
      firework1.num = floor(random(10, 20));
      firework2.num = floor(random(10, 20));
      firework3.num = floor(random(10, 20));
      
      //draws 3 fireworks per tile
      drawFirework(firework1);
      drawFirework(firework2);
      drawFirework(firework3);
      pop();
    }
  }
}

function drawFirework(firework){
  push();
  stroke(firework.color, 100, 50); //hsl format, only hue is random
  translate(firework.x, firework.y);
  scale(firework.size);
  let startAngle = random(360);
  rotate(startAngle); //starts firework at random angle
  for(i = 0; i<firework.num; i++){
    line(0, 5, 0, 20);
    rotate(360/firework.num); //random number of lines in each firework, evenly spaced
  }
  pop();
}

