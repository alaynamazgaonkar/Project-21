var bullet,wall;
var speed,weight,thickness;
var deformation;

function setup() {
createCanvas(800,400);
speed =Math.round(random(30,52));
weight=Math.round(random(223,321));
thickness=Math.round(random(22,83));

bullet =createSprite(50, 200, 50, 40);
wall=createSprite(500,200,thickness,height/2);
bullet.velocityX=speed;
}

function draw() {
background(255,255,255);
bullet.shapeColor="gray";
wall.shapeColor="black";

if(isTouching(bullet,wall)){
bullet.velocityX=0;
bullet.x=470;
deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
console.log(deformation);

if(deformation<10){
wall.shapeColor="green";}
if(deformation>10){
wall.shapeColor="red"}
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