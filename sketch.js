var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4,car1img,car2img,car3img,car4img,groundimg,trackimg,track1img;
function preload(){
 car1img=loadImage("carRacingStage1.5-master/images/car1.png");
 car2img=loadImage("carRacingStage1.5-master/images/car2.png");
 car3img=loadImage("carRacingStage1.5-master/images/car3.png");
 car4img=loadImage("carRacingStage1.5-master/images/car4.png");
 groundimg=loadImage("carRacingStage1.5-master/images/ground.png");
 track1img=loadImage("carRacingStage1.5-master/images/track.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
