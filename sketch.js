var button1, button2, button3, button4;
var form;
var player;
var s;

var firebase;

var gameState = "start";

function preload(){
forestBackround = loadImage("assets/backgrounds/forestBg.png");
jungleBackround = loadImage("assets/backgrounds/jungleBg.png");
castleBackground = loadImage("assets/backgrounds/castleBg.png");
villageBackground = loadImage("assets/backgrounds/village_bg-transformed.jpeg");

//heavyPeasant = loadAnimation("assets/enemies/HPDyingLeftSpriteSheet-removebg-preview.png");

startButton = loadImage("assets/UI/start_button-removebg-preview.png");
storyButton = loadImage("assets/UI/story_button-removebg-preview.png");
constrolsButton = loadImage("assets/UI/controls_button-removebg-preview.png");

story1 = loadImage("assets/UI/story1.png");
story2 = loadImage("assets/UI/story2.png");

//logo = loadImage("assets/UI/RRHF-transformed-removebg-preview.png");

}

function setup(){
createCanvas(windowWidth, windowHeight);
database = firebase.database;

form = new Form();
form.hide();

player = new Player();

button1 = createImg("assets/UI/start_button-removebg-preview.png");
button1.position(windowWidth/3 +100, 200);
button1.size(275,140);
button1.mouseClicked(play0);

button2 = createImg("assets/UI/story_button-removebg-preview.png");
button2.position(windowWidth/3 +110, 375);
button2.size(250,150);
button2.mouseClicked(howToPlay);

button3 = createImg("assets/UI/controls_button-removebg-preview.png");
button3.position(windowWidth/3 +127, 575);
button3.size(220,110);
button3.mouseClicked(story);

s = createSprite(445,90,110,160);
//s.setColor("white");

logo = createImg("assets/UI/RRHF-transformed-removebg-preview.png");
logo.position(windowWidth/8 +150, 10);
logo.size(200,175);


}

function draw(){
	background("white");

  if(gameState === "start"){
    image(jungleBackround, 0, 0, windowWidth, windowHeight);
	textSize(60);
	fill("white");
	stroke("green");
	text("Rogue Robin Hood", windowWidth/3, 70)
	text("and Friends", windowWidth/3 + 90, 140)

	textSize(25);
	fill("white");
	text("Created by Michael Tom", 20, windowHeight - 20)
	
  }

  if(gameState === "Play1"){
	image(forestBackround, 0,0,windowWidth, windowHeight);
  }

  if(gameState === "Play2"){
	image(villageBackground, 0,0,windowWidth, windowHeight);
  }

  if(gameState === "Play3"){
	image(castleBackground, 0,0,windowWidth, windowHeight);
  }
  
  drawSprites();
}

function play0(){
	form.show();

	button1.hide();
	button2.hide();
	button3.hide();
}

function play1(){
	gameState = "Play1";

	button1.hide();
	button2.hide();
	button3.hide();
}

function play2(){
	gameState = "Play2";

	button1.hide();
	button2.hide();
	button3.hide();
}

function play3(){
	gameState = "Play3";

	button1.hide();
	button2.hide();
	button3.hide();
}


function howToPlay(){
	image(story1, 500, 500,  50, 150);

	button1.hide();
	button2.hide();
	button3.hide();

}

function story(){
	image(story2, 500, 500,  50, 150);

	button1.hide();
	button2.hide();
	button3.hide();
	
}