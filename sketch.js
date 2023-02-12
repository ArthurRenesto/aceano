var ship_up,ship_down,ship;

var sea, seaImg;


function preload()
{
seaImg = loadImage("sea.png");
ship_up = loadAnimation("ship-1.png", 
"ship-2.png","ship-3.png","ship-4.png",);



}

function setup()
{
  createCanvas(1900,860);
 
  sea = createSprite(0,200,4168,1667);
  sea.addImage(seaImg);

  ship = createSprite(600,420,800,800);
  ship.addAnimation("up",ship_up);
 
}

function draw() 
{
  background("blue");
    drawSprites();

  if (sea.x < 0 )
  {
  sea.x = sea.width/2;
  }





}
