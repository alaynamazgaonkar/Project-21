var car,wall;
var speed,weight;
var deformation;

function setup() {
createCanvas(800,400);
speed =Math.round(random(55,90));
weight=Math.round(random(400,1500));

car =createSprite(50, 200, 50, 50);
wall=createSprite(500,200, 60,height/2);
car.velocityX=speed;
}

function draw() {
background(255,255,255);
car.shapeColor="gray";
wall.shapeColor="black";

if(isTouching(car,wall)){
car.velocityX=0;
car.x=470;
deformation=(0.5*weight*speed*speed)/22500;
console.log(deformation);

if(deformation>180){
  car.shapeColor="red";}
  if(deformation<180&&deformation>100){
    car.shapeColor="yellow"
  }
  if(deformation<100){
    car.shapeColor="green";}
  
}
  
drawSprites();
}

function isTouching(obj1,obj2){
if (obj1.x - obj2.x < obj2.width/2 +obj1.width/2
&& obj2.x - obj1.x < obj2.width/2 + obj1.width/2
&& obj1.y - obj2.y < obj2.height/2 + obj1.height/2
&& obj2.y - obj1.y < obj2.height/2 + obj1.height/2){ 
return true;}
}