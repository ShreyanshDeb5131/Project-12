var boy, boy_running;
var path, path_moving;
var boundary1;
var boundary2;
var edges;
var coin,coin_moving,coin2,coin3;
var bomb,bomb_moving;
var end;

function preload(){
  path_moving = loadImage("path.png");
boy_running = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
coin_moving = loadImage("coin.png");
bomb_moving = loadImage("bomb.png");
}



function setup(){
  createCanvas(400,400);
 
  path = createSprite(200,200);
path.addImage(path_moving);
path.velocityY = 4;
path.scale = 1.2;

boy = createSprite(200,300);
boy.addAnimation("running",boy_running);
boy.scale = 1.2;
boy.velocityX = 4;

coin = createSprite(200,-5);
coin.addImage(coin_moving);
coin.velocityY = 4;
coin.scale = 0.2;

coin2 =  createSprite(100,-20);
coin2.addImage(coin_moving);
coin2.velocityY = 4;
coin2.scale  = 0.2;

coin3 =  createSprite(300,-40);
coin3.addImage(coin_moving);
coin3.velocityY = 4;
coin3.scale  = 0.2;

edges = createEdgeSprites()

bomb =  createSprite(200,-80);
bomb.addImage(bomb_moving);
bomb.velocityY = 4;
bomb.scale  = 0.1;

end =  createSprite(200,400);
end.visible = false;

boundary1 = createSprite(400,300);
boundary2 = createSprite(-1,300);

boundary1.visible=false;
boundary2.visible=false;

}

function draw() {
  background(0);

  if(path.y>400){
    path.y = height/2;
  }

  boy.x=World.mouseX;

if(boy.isTouching(coin))
{
  coin.x=200;
  coin.y=-5;
  coin.velocityY = 4;
}

if(boy.isTouching(coin2))
{
  coin2.x=100;
  coin2.y=-20;
  coin2.velocityY = 4;
}

if(boy.isTouching(coin3))
{
  coin3.x=300;
  coin3.y=-40;
  coin3.velocityY = 4;
}

if(bomb.isTouching(end))
{
  bomb.x=200;
  bomb.y=-80;
  bomb.velocityY = 4; 

}

if(boy.isTouching(bomb))
{
boy.velocityX=0;
path.velocityY=0;
coin.velocityY=0;
coin2.velocityY=0;
coin3.velocityY=0;
boy.destroy()
bomb.destroy()

}





boy.collide(boundary1)||boy.collide(boundary2)

  drawSprites()
}
