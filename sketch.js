const GRID_SIZE = 20;

let headX, headY;
let foodX, foodY;
let xDir = 1, yDir = 0;

function setup() {
createCanvas(400, 400);
headX = width / 2;
headY = height / 2;
spawnFood();
}

function draw() {
background(0);
headX += GRID_SIZE * xDir;
headY += GRID_SIZE * yDir;
fill(0, 255, 0);
rect(headX, headY, GRID_SIZE, GRID_SIZE);
fill(255, 255, 0);
ellipse(foodX + GRID_SIZE / 2, foodY + GRID_SIZE / 2, GRID_SIZE, GRID_SIZE);
if (headX < 0 || headX >= width || headY < 0 || headY >= height) {
noLoop();
}
if (headX === foodX && headY === foodY) {
spawnFood();
}
}

function keyPressed() {
if (keyCode === UP_ARROW || key === 'w') {
xDir = 0;
yDir = -1;
} else if (keyCode === DOWN_ARROW || key === 's') {
xDir = 0;
yDir = 1;
} else if (keyCode === LEFT_ARROW || key === 'a') {
xDir = -1;
yDir = 0;
} else if (keyCode === RIGHT_ARROW || key === 'd') {
xDir = 1;
yDir = 0;
}
}

function spawnFood() {
foodX = floor(random(0, width / GRID_SIZE)) * GRID_SIZE;
foodY = floor(random(0, height / GRID_SIZE)) * GRID_SIZE;
}
