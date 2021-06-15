var cat,mouse;
var catImg,mouseImg;
var bgImg;
var catAnim,catHappy,mouseTease,mouseHappy;






function preload() {
    //load the images here
    catImg = loadImage("images/cat1.png");
    catAnim = loadAnimation("images/cat2.png","images/cat3.png");
    catHappy = loadImage("images/cat4.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseTease = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseHappy = loadImage("images/mouse4.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600);
    cat.addImage(catImg);
    cat.scale = 0.3;
    mouse = createSprite(200,600);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
          mouse.addAnimation("mouseHappy",mouseHappy);
          mouse.changeAnimation("mouseHappy");
          cat.addAnimation("catHappy",catHappy);
          cat.changeAnimation("catHappy");
          cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseTease);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 20;
      cat.velocityX = -3;
      cat.addAnimation("catWalking",catAnim);
      cat.changeAnimation("catWalking");
  }

}
