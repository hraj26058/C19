//creating the game objects and declaring as global variables 

  var fireblue_moving, bluefire;
  var background1, backgroundImage;
  var firered_moving, redfire;
  var firepink_moving, pinkfire;
  var player, playerImage;
  var greenfire, greenImage;
  var pinkGroup, blueGroup, redGroup, fireGroup;
  var score = 0;
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  var gameOver, gameOverImage;
  var restart,restartImage;
  var invisibleground,ground2;
  var gameOverSound,bustSound,pressSound, hitSound;
  var backsong;

//creating the function preload 
function preload() {
  
  //creating the restartImage
  restartImage = loadImage ("restart.png");
  
  //creating the gameOverImage
  gameOverImage = loadImage ("gameover.png");
  
  //creating the fire blue Image
  fireblue_moving = loadAnimation("fireblue1.png", "fireblue2.png", "fireblue3.png", "fireblue4.png", "fireblue5.png", "fireblue6.png");
  
  //creating the backgroundImage
  backgroundImage = loadImage("background1.png");
  
  //creating the fire red Image 
  firered_moving = loadAnimation("firered1.png", "firered2.png", "firered3.png", "firered4.png", "firered5.png", "firered6.png");
  
  //creating the fire pink Image 
  firepink_moving = loadAnimation("firepink1.png", "firepink2.png", "firepink3.png", "firepink4.png", "firepink5.png", "firepink6.png");
  
  //creating  the player Image 
  playerImage = loadImage("player.png");
  
  //creating the green image 
  greenImage_moving = loadAnimation("Effects_Fire_0_01.png", "Effects_Fire_0_04.png", "Effects_Fire_0_06.png", "Effects_Fire_0_07.png", "Effects_Fire_0_11.png", "Effects_Fire_0_22.png");
  
  //loading the game0versound
  gameOverSound = loadSound ("gameOver.mp3");
  
  //loading the bust sound
  bustSound = loadSound ("bomb.wav");
  
  //loading the pressSound
  pressSound = loadSound ("jump.mp3");
  
  //loading the back sound 
  backsong = loadSound ("swoosh1.mp3");
  
}

//creating the function setup
function setup() {
  
  //creating the canvas 
  createCanvas(600,400);

  //creating the background1
  background1 = createSprite(300, 150, 100, 100);
  background1.addImage(backgroundImage);
  background1.scale = 0.5;

  //creating the player 
  player = createSprite(100, 200, 10, 10);
  player.addImage(playerImage);
  player.scale = 0.2;
  
  //creating the gameOver
  gameOver = createSprite (300,150,20,20);
  gameOver.addImage (gameOverImage);
  
  //creating the restart 
  restart = createSprite (300,200,20,20);
  restart.addImage (restartImage);
  restart.scale = 0.4;
  
  //creating the invisibleground
  invisibleground = createSprite (300,310,600,10);
  
  //creating the ground2
  ground2 = createSprite (300,6,600,10);
  
  //creating the new group for pinkGroup1, pinkGroup, blueGroup1, blueGroup, redGroup, redGroup1, fireGroup
  pinkGroup1 = createGroup(); 
  pinkGroup = createGroup();
  blueGroup1 = createGroup();
  blueGroup = createGroup();
  redGroup = createGroup();
  redGroup1 = createGroup();
  fireGroup = createGroup();
}

//creating the function draw
function draw() {
  
  //creating the backgound 
  background(200);
  
  //player is colliding with invisibleground and ground2
  player.collide (invisibleground);
  player.collide (ground2);
  
  //creating the gameState as PLAY 
  if (gameState === PLAY) {
    
    //giving the frameRate for score 
    score = score + Math.round(getFrameRate() / 60);

    // if fireGroup touches pinkGroup then fireGroup and pinkGroup should destroy themself 
    if (fireGroup.isTouching(pinkGroup)) {
      fireGroup.destroyEach();
      pinkGroup.destroyEach();
    }
    
     // if fireGroup touches pinkGroup1 then fireGroup and pinkGroup1 should destroy themself 
    if (fireGroup.isTouching(pinkGroup1)) {
      fireGroup.destroyEach();
      pinkGroup1.destroyEach();
    }

   // if fireGroup touches blueGroup then fireGroup and blueGroup should destroy themself 
    if (fireGroup.isTouching(blueGroup)) {
      fireGroup.destroyEach();
      blueGroup.destroyEach();
    }
    
    // if fireGroup touches blueGroup1 then fireGroup and blueGroup1 should destroy themself 
    if (fireGroup.isTouching(blueGroup1)) {
      fireGroup.destroyEach();
      blueGroup1.destroyEach();
    }
    
    // if fireGroup touches redGroup then fireGroup and redGroup should destroy themself 
    if (fireGroup.isTouching(redGroup)) {
      fireGroup.destroyEach();
      redGroup.destroyEach();
    }
    
    // if fireGroup touches redGroup1 then fireGroup and redGroup1 should destroy themself 
    if (fireGroup.isTouching(redGroup1)) {
      fireGroup.destroyEach();
      redGroup1.destroyEach();
    }
    
    //moving the background
    if (background1.x < 100) {
      background1.x = 400;
    }

    //increase the velocity of background1 after score/100
    background1.velocityX = -(7 + 7* score/ 100);
    
    //creating the player, gameOver, restart, invisibleground and ground2 as true or false for visible 
    player.visible = true ;
    gameOver.visible = false ;
    restart.visible = false;
    invisibleground.visible = false ;
    ground2.visible = false ;
    
    //call blue1, pink1, pink2, blue2, red1, red2 as function
    blue1();
    pink1();
    pink2();
    blue2();
    red1();
    red2();
  }
  
  //creating the gameState as PLAY
  if (gameState === PLAY) {
    
    // if keyWentDown 'up' then player's velocityY is -5
    if (keyWentDown("up")) {
     player.velocityX = 0;
     player.velocityY = -5;
  }
    
    // if keyWentDown 'up' then player's velocityY is 0
    if (keyWentUp("up")) {
     player.velocityX = 0;
     player.velocityY = 0;
  }
    
    // if keyWentDown 'down' then player's velocityY is 5
    if (keyWentDown("down")) {
     player.velocityX = 0;
     player.velocityY = 5;
  }
    
    // if keyWentDown 'down' then player's velocityY is 0
    if (keyWentUp("down")) {
     player.velocityX = 0;
     player.velocityY = 0;
  }

    //if keyDown 'space' then shoot fire and the backSound will play
    if (keyDown("space")) {
     backsong.play();
     shoot();
    }
  }

// creating the gameState as END 
if (gameState === END){
  
  //creating the background1 velocityX as 0 in the END state
   background1.velocityX = 0;
  
  //creating the player, gameOver, restart, invisibleground as true or false for visible 
   player.visible = false;
   gameOver.visible = true ;
   restart.visible = true;
   invisibleground.visible = false ;
}

//if player is tounching pinkGroup then destroy all the groups, play the sounds and gameState is END 
if (player.isTouching(pinkGroup)){
  
   bustSound.play();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   gameOverSound.play();
   gameState = END; 
  
}
  
  //if player is tounching pinkGroup1 then destroy all the groups, play the sounds and gameState is END 
  if (player.isTouching(pinkGroup1)){
    
   gameState = END;
   gameOverSound.play();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bustSound.play();
}
  
  //if player is tounching blueGroup then destroy all the groups, play the sounds and gameState is END 
  if (player.isTouching(blueGroup)){
    
   gameState = END;
   gameOverSound.play();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bustSound.play();
}
  
  //if player is tounching blueGroup1 then destroy all the groups, play the sounds and gameState is END 
  if (player.isTouching(blueGroup1)){
    
   gameState = END;
   gameOversound.play();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bustSound.play();
}
  
  //if player is tounching redGroup1 then destroy all the groups, play the sounds and gameState is END 
  if (player.isTouching(redGroup1)){
    
   gameState = END;
   gameOverSound.play();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bustSound.play();
}
  
 //if player is tounching redGroup then destroy all the groups, play the sounds and gameState is END 
  if (player.isTouching(redGroup)){
    
   gameState = END;
   gameOverSound.play();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bustSound.play();
}

  //if mousePressedOver restart then play sound and reset function should work
  if(mousePressedOver(restart)) {
    reset();
    pressSound.play();
  }
  
  //creating the drawSprites
   drawSprites();

  //displaying the score and giving textSize, stroke and fill
   stroke("black");
   fill("black");
   text("Score : " + score, 450, 50);
   textSize("100");

}

//creating the function blue1
function blue1() {
  
  //giving the frameCount for blue fire 
  if (frameCount % 180 === 0) {
    
    //creating the Math.round(random) for blue fire
    bluefire = Math.round(random(600, 500));
    
    //creatig the blue fire 
    bluefire = createSprite(600, 100, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4;
    bluefire.velocityX = -(4 + score/100);
    bluefire.lifetime = 150;
    blueGroup.add(bluefire);
  }
}

//creating the function pink1
function pink1() {
  
  //giving the frameCount for pink fire 
  if (frameCount % 180 === 0) {
    
    //creating the pink fire
    pinkfire = createSprite(600, 200, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4;
    pinkfire.velocityX = -(4 + score/100);
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150;
    pinkGroup.add(pinkfire);
  }
}

//creatig the function pinnk2
function pink2() {
  
  //giving the frameCount for pink2 fire 
  if (frameCount % 180 === 0) {
    
    //creating the pink2 fire 
    pinkfire = createSprite(600, 300, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4;
    pinkfire.velocityX = -(4 + score/100);
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150;
    pinkGroup1.add(pinkfire);
  }
}

//creating the function blue2
function blue2() {
  
  //giving the frameCount for blue2 fire 
  if (frameCount % 180 === 0) {
    
    //creating the Math.round(random) for blue2 fire
    bluefire = Math.round(random(600, 500));
    
    //creating the blue2 fire 
    bluefire = createSprite(600, 200, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4;
    bluefire.velocityX = -(4 + score/100);
    bluefire.lifetime = 150;
    blueGroup1.add(bluefire);
  }
}

//creating the function red1
function red1() {
  
  //giving the frameCount for red1 fire 
  if (frameCount % 180 === 0) {
    
    //creating the Math.round(random) for red1 fire
    redfire = Math.round(random(600, 500));
    
    //creating the red1 fire 
    redfire = createSprite(600, 200, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4;
    redfire.velocityX = -(4 + score/100);
    redfire.lifetime = 150;
    redGroup.add(redfire);
  }
}

//creating the function red2
function red2() {
  
  //giving the frameCount for red2 fire 
  if (frameCount % 180 === 0) {
    
    //creating the Math.round(random) for red2 fire
    redfire = Math.round(random(600, 500));
    
    //creating the red2 fire 
    redfire = createSprite(600, 50, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4;
    redfire.velocityX = -(4 + score/100);
    redfire.lifetime = 150;
    redGroup1.add(redfire);
  }
}

//creating the function shoot
function shoot() {
  
  //creating the green fire 
  greenfire = createSprite(100, 100, 5, 10);
  greenfire.velocityX = 6;
  greenfire.addAnimation("moving", greenImage_moving);
  greenfire.scale = 0.8;
  greenfire.y = player.y;
  greenfire.lifetime = 100;
  fireGroup.add(greenfire);
}

//creating the function reset
function reset (){
  
  // making the gameState as play, destroy all the groups, making the variables as true or false for visible and making the score = 0
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  pinkGroup.destroyEach();
  blueGroup.destroyEach();
  redGroup.destroyEach();
  pinkGroup1.destroyEach();
  blueGroup1.destroyEach();
  redGroup1.destroyEach();
  score = 0;
}