var bird;
var pipes = [];
var score = -1;
var gameState = 1;
var backgroundImg

function preload(){
  backgroundImg = loadImage("background.png")
}

function setup() {
  createCanvas(640, 480);
  pipes.push(new Pipe());
  bird = new Bird();

 
}

function draw() {
  background(backgroundImg);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
  }
  bird.show();

 if(gameState == 1){
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
      gameState = 0;
      bird.y = 420;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  

  if (frameCount % 200 == 0) {
    pipes.push(new Pipe());
  }

  if (frameCount % 200 == 100) {
    score++;
  }


  if(bird.y > 419){
    gameState = 0;
    bird.y = 420;
  }
}

if(score > -1){
fill(255, 255, 255);
textFont('Monaco');
textSize(20);
text("Score: " + score, 520, 60);
}
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}