
function preload() {
    //load the images here
    cat1=loadAnimation("images/cat2.png","images/cat3.png");
    cat2=loadAnimation("images/cat4.png");
    rat1=loadAnimation("images/mouse2.png","images/mouse3.png");
    rat2=loadAnimation("images/mouse4.png");
    gardin=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    tom=createSprite(800,700);
    tom.addAnimation("corriendo",cat1);
    tom.scale=0.1;
    tom.setCollider("circle",0,0,40);
    jerry=createSprite(100,700);
    jerry.addAnimation("saludando",rat1);
    jerry.scale=0.1;
    tom.addAnimation("encuentro",cat2);
    jerry.addAnimation("encuntro2",rat2);
}

function draw() {

    background(gardin);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
     tom.velocityX=0;
     tom.changeAnimation("encuentro",cat2);
     jerry.changeAnimation("encuntro2",rat2);
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===32){
    tom.velocityX=-4;
  }


}
