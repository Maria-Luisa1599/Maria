var quadrado

function setup() {
  createCanvas(400,400);
  quadrado = createSprite (200, 200, 30, 30);
} 

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)){
 quadrado.position.x = quadrado.position.x +5
}
if (keyDown(LEFT_ARROW)){
  quadrado.position.x = quadrado.position.x -5
}
 if (keyDown(UP_ARROW)){
 quadrado.position.y = quadrado.position.y -5
 }
if (keyIsDown(DOWN_ARROW)){
  quadrado.position.y = quadrado.position.y +5
}
drawSprites()


}




