var fixedRect, movingRect;
var fr1,fr2,fr3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fr1 = createSprite(100,100,50,50)
  fr1.shapeColor="green";
fr2 = createSprite(200,100,50,50)
fr2.shapeColor="green"
fr3 = createSprite(300,100,50,50)
fr3.shapeColor="green"
fr4 = createSprite(400,100,50,50)
fr4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching(movingRect,fr1)){
    movingRect.shapeColor = "red";
    fr1.shapeColor = "lightblue";
  }
    else{
      movingRect.shapeColor = "green";
      fr1.shapeColor = "blue";
    }

    if(isTouching(movingRect,fr2)){
      movingRect.shapeColor = "red";
      fr2.shapeColor = "yellow";
    }
      else{
        movingRect.shapeColor = "green";
        fr2.shapeColor = "green";
      }

      if(isTouching(movingRect,fr3)){
        movingRect.shapeColor = "red";
        fr3.shapeColor = "aquamarine";
      }
        else{
          movingRect.shapeColor = "green";
          fr3.shapeColor = "lightgreen";
        }

        if(isTouching(movingRect,fr4)){
          movingRect.shapeColor = "red";
          fr4.shapeColor = "lightcoral";
        }
          else{
            movingRect.shapeColor = "green";
            fr4.shapeColor = "deeppink";
          }

    drawSprites();
}

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true
}
else {
return false
}



}