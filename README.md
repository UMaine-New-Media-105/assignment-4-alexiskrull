Assignment 4

Question 1
- Used a loop to build a radial firework using objects to pass parameters:
```
firework1 = {
    x:50,
    y:50,
    size:2,
    num:14,
    color:"red"
  }
```
where num controls the number of firework light lines.
LINK: https://editor.p5js.org/alexis.krull/sketches/eaCBv4a52

Question 2
- Build off of Q1 and make a 2D pattern of tiles vertically and horizontally using a loop. Global variables controlling offset to the right and down were set at the top using calculations for # of rows and columns. I think 5x5 looks best.
```
let numRows = 5;
let numCols = 5;

let offsetX;
let offsetY;
```
where
```
  offsetX = width/numCols;
  offsetY = height/numRows;
```
LINK: https://editor.p5js.org/alexis.krull/sketches/mdoEaZ6aU

Question 3
- Randomize some parameters from Q2. I chose to randomize size, color, and number of lines for each firework as follows:
```
firework1.size = random(0.5, 1.25);
firework1.color = random(360);
firework1.num = floor(random(10, 20));
```
where the color is using HSL and only the hue is randomized.
LINK: https://editor.p5js.org/alexis.krull/sketches/SeZM8CO__

Question 4
- Create a pattern that displays sprites on the screen in a set order. I chose to use a "smiley face" :O that rotates like its rolling across the screen using an array as follows:
```
let thisState = states[i % states.length];
```
where states is an array of 8 numbers (1 - 8) that correspond with a different rotation degree to turn the smiley. Adding "i % states.length" makes it so that if more than 8 smileys are in a row, it'll loop back to the beginning. Each row has smilies in the same position because I think it looks better that way.
LINK: https://editor.p5js.org/alexis.krull/sketches/R8QImwJov
