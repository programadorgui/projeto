var box;
var obstaclePredio;
var food;
var boxImage,foodImage,obstaclePredioImage;
var obstacleGroup,foodGroup;
function preload(){
boxImage = loadImage("passaro.png")
foodImage = loadImage("fruta.png")
obstaclePredioImage = loadImage("predio.png")
}


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
  box.addImage(boxImage)
  box.scale = 0.05
  obstacleGroup = new Group();
  foodGroup = new Group();
}

  function draw (){
    background("red")
    if(keyIsDown(LEFT_ARROW )){
      box.position.x=box.position.x -3;
    }
    
    if(keyIsDown(UP_ARROW )){
      box.position.y=box.position.y -3;
    }
    
    if(keyIsDown(DOWN_ARROW )){
      box.position.y=box.position.y +3;
    
    }


    if(keyIsDown(RIGHT_ARROW )){
      box.position.x = box.position.x +3
    }
    if(obstacleGroup.isTouching(box)){
      box.x = 10;
      score = 0;
    

    }
    if(foodGroup.isTouching(box)){
      box.x = 10;
      score = 0;
    

    }



    obstacle();
    comida();
drawSprites();






  }
function obstacle(){
  if(frameCount%100===0){
    obstaclePredio = createSprite(400,300,30,100)
    obstaclePredio.velocityX = -3
    obstaclePredio.shapeColor = "green"
    obstaclePredio.y = Math.round(random(0,400))
    obstaclePredio.addImage(obstaclePredioImage)
    obstaclePredio.scale = 0.09
    obstacleGroup.add(obstaclePredio)
  }
}
function comida(){
 if(frameCount%60===0){
  food = createSprite(400,230,10,10)
  food.velocityX = -1;
  food.y = Math.round(random(0,400))
  food.addImage(foodImage)
  food.scale = 0.03
  foodGroup.add(food)
}
}

















 

  
    



  



  

  


  










