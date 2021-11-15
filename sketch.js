var spriteFixo, spriteMovel;

function setup() {
  createCanvas(800,400);
  spriteFixo = createSprite(300, 200, 50, 80);
  spriteMovel = createSprite(200,200,80,50);
}

function draw() {
  background(255,255,255); 
  spriteMovel.x = mouseX;
  spriteMovel.y = mouseY;

  console.log(spriteFixo.x - spriteMovel.x);

  if (spriteFixo.x - spriteMovel.x < spriteFixo.width/2 + spriteMovel.width/2
    && spriteMovel.x - spriteFixo.x < spriteFixo.width/2 + spriteMovel.width/2) {
    spriteMovel.shapeColor = "red";
    spriteFixo.shapeColor = "red";
  } else {
    spriteMovel.shapeColor = "green";
    spriteFixo.shapeColor = "green";
  }
  
  drawSprites();
}