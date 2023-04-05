//Rolling Smiley Face =O
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  states = [1, 2, 3, 4, 5, 6, 7, 8]; //length = 8
  tilesPerRow = states.length; //length of array
  tileWidth = width/tilesPerRow;
  tilesPerCol = 8;
  tileHeight = height/tilesPerCol;
  offset = tileWidth/2; //to center sprite 
}

function draw() {
  background(220);
  for(let j = 0; j < tilesPerCol; j++){
    for(let i = 0; i < tilesPerRow; i++){
      let thisState = states[i % states.length]; //i think it looks better like this, with all rows looking the same
      // let thisState = states[(i+j) % states.length]; //this one looks too busy
      let thisX = i * tileWidth;
      let thisY = j * tileHeight;
      addSmiley(thisState, thisX + offset, thisY + offset);
    }
  }
}

function addSmiley(state, x, y){
  push();
  translate(x, y);
  fill("yellow");
  ellipse(0, 0, 30);
  if(state == 1){
    fill("black");
  ellipse(-5, -5, 4, 12);
  ellipse(5, -5, 4, 12);
  ellipse(0, 8, 8);
  } else if (state == 2){
    rotate(45);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  } else if (state == 3){
    rotate(90);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  } else if (state == 4){
    rotate(135);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  } else if (state == 5){
    rotate(180);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  } else if (state == 6){
    rotate(225);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  } else if (state == 7){
    rotate(270);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  } else if (state == 8){
    rotate(315);
    fill("black");
    ellipse(-5, -5, 4, 12);
    ellipse(5, -5, 4, 12);
    ellipse(0, 8, 8);
  }
  pop();
}
