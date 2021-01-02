var car,wall;
var speed,wieght;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  speed=random(55,90);
  wieght=random(400,1500);
 
  car=createSprite(50,200,50,50);
  
  car.velocityX=speed;

  car.shapeColor=color(205,600,0);
  
  wall=createSprite(700,200,60,80);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX=0;
  var deformation = 0.5*wieght*speed*speed/22500;

if(deformation<180){
  car.shapeColor=color(0,255,0);
}

if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0)
}

if(deformation>180){
  car.shapeColor=color(250,0,0);
}
}
  drawSprites();
}