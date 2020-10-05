var movingRect,fixedRect;

var object1,object2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -3;

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 3;

  object1 = createSprite(200,50,50,50);
  object1.shapeColor = "blue";
  object1.velocityY = 3;

  object2 = createSprite(200,350,50,50);
  object2.shapeColor = "yellow";
  object2.velocityY = -3;
}

function draw() {
  background(255,255,255);
  
  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX;

  bounce(movingRect,fixedRect);

  bounce(object1,object2);
 
  if(isTouching(object1,object2)){
   object1.shapeColor = "orange"
   object2.shapeColor = "orange"
  }

  drawSprites();
}

