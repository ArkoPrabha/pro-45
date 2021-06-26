var character,characterImg,characterImg2,characterImg3
var ground,groundImg,invisibleGround,groundImg2,groundImg3,groundImg4

var jumpImg,jump
var obs,obsImg1,obsImg2,obsImg3,obsFire
var obsGrp,coinGrp
var coinImg
var score=0
var lives=3

var livesImg,livesImg2,livesImg3

function preload(){
characterImg=loadAnimation("running1.png","running2.png","running3.png")
characterImg2=loadAnimation("running4.png","running5.png","running6.png")
characterImg3=loadAnimation("running7.png","running8.png","running9.png")

jumpImg=loadAnimation("running3.png")

groundImg=loadImage("ground.png")
groundImg2=loadImage("ground2.png")
groundImg3=loadImage("ground3.png")
groundImg4=loadImage("ground4.jpg")

obsImg1=loadImage("cactus.png")
obsImg2=loadImage("fire.png")
obsImg3=loadImage("mushroom.png")

coinImg=loadAnimation("coin.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png","coin9.png")

livesImg3=loadImage("heart3.png")
livesImg2=loadImage("heart2.png")
livesImg=loadImage("heart.png")
}
function setup() {
  createCanvas(1000,500);
  ground=createSprite(400,280,800,20)
  ground.addImage("ground1",groundImg)
  ground.addImage("ground2",groundImg2)
  ground.addImage("ground3",groundImg3)
  ground.addImage("ground4",groundImg4)
  ground.scale=0.65
  ground.velocityX=-3

  character=createSprite(80, 350, 50, 50);
  character.addAnimation("character1",characterImg)
  character.addAnimation("character2",characterImg2)
  character.addAnimation("jump",jumpImg)
  character.addAnimation("character3",characterImg3)
  character.scale=0.4
  
  invisibleGround=createSprite(400,450,800,20)
  invisibleGround.visible=false

  
  obsGrp=new Group()
  coinGrp=new Group()
}

function draw() {
  background("yellow");  
  drawSprites();

  //console.log(character.y)
  if(ground.x<0){
    ground.x=ground.width/2
  }

  if(keyDown("space")&&character.collide(invisibleGround)){
    character.velocityY=-6
  }
  character.velocityY=character.velocityY+0.1

  character.collide(invisibleGround)
  if(frameCount%200===0){
    coinFunction()
  }
  if(frameCount%250===0||frameCount===50){
  spawnObs()
  }
  if(frameCount%300===0){
    upSpawnObs()
  }
  if(obsGrp.isTouching(character)){
    lives=lives-1
    obsGrp.destroyEach()
  }

  //if(){}

  if(frameCount%2000===0){
    var rand=Math.round(random(1,3))
    switch (rand){
      case 1:ground.changeImage("ground2",groundImg2)
      ground.scale=1.1
      character.y=380
      invisibleGround.y=470
      break;
      case 2:ground.changeImage("ground3",groundImg3)
      ground.scale=1.05
      invisibleGround.y=470
      character.y=370
      break;
      case 3:ground.changeImage("ground4",groundImg4)
      ground.scale=2.09
      ground.y=250
      invisibleGround.y=450
      character.y=330
      break;
    }
    

  }
  
  if(coinGrp.isTouching(character)){
    score=score+1
    coinGrp.destroyEach()
  }

  if(lives===3){
    image(livesImg3,70,50,90,50)
  }

  else if(lives===2){
    image(livesImg2,70,50,90,50)
  }

  else if(lives===1){
    image(livesImg,70,50,50,50)
  }

  fill("black")
  text("COINS COLLECTED:"+score,width-200,50)

  
}

function spawnObs(){
obs= createSprite(width+50,400)
console.log(obs.y)
obs.velocityX=-3
obs.scale=0.2
obs.lifetime=(width/obs.velocityX)+100
var rand=Math.round(random(1,2))
switch(rand){
  case 1:obs.addImage(obsImg1)
  break
 
  case 2:obs.addImage(obsImg3)
  break
}
obsGrp.add(obs)
}

function upSpawnObs(){
  obsFire= createSprite(width+50,50)
  obsFire.addImage(obsImg2)
  obsFire.lifetime=400
  obsFire.velocityY=1
  obsFire.velocityX=-5
  obsFire.scale=0.2
  obsGrp.add(obsFire)
}

function coinFunction(){
  var coin=createSprite(width+50,250)
  coin.addAnimation("coinImg",coinImg)
  coin.lifetime=400
  //coin.velocityY=1
  coin.velocityX=-5
  coin.scale=0.8
  coinGrp.add(coin)
}