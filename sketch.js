var bullet,wall,thickness
var speed,weight


function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,10);
  wall=createSprite(1300,200,thickness,height/2);

  speed=random(55,90);
  weight=random(400,1500);

  bullet.velocityX=speed;
  
}


function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {bullet.velocityX=0;
   var deformation = 0.5 * weight * speed * speed/22509;

if(deformation>180);
{ 
  bullet.shapeColor="white";
}

if(deformation<180);
{
  bullet.shapeColor="white";
}
if(deformation<100 && deformation>100);
{
  bullet.shapeColor="white";
}
  }


if(hasCollided(bullet,wall))
{bullet.velocityX=0;
 var damage=0.5 * weight * speed * speed/(thichness * thickness * thickness)

if(damage>12.48)
{
  wall.shapeColor="red";
}
if(damage<3.68)
{
  wall.shapeColor="green";
}

}
drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
    return false
  }

