var ballon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  ballon=createSprite(250,450,150,150);
  ballon.addAnimation("hotAirBalloon",balloonImage1);


  var ballonPosition=database.ref("Ballon/height")
  ballonPosition.on("value",readHeight, showError)
  
  ballon.scale=0.5;
  textSize(20); 

 

 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateHeight(0,-10);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
   
    ballon.scale=ballon.scale-0.01
    
   
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(0,10); 
    ballon.addAnimation("hotAirBalloon",balloonImage2);
    
    ballon.scale=ballon.scale-0.01
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
    
    ballon.scale=ballon.scale-0.01
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
    
    ballon.scale.scale=ballon.scale-0.01
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref("Ballon/position").set({
  'x':height.x+x,
  'y':height.y+y
})
}
function readHeight(data){

  height=data.val();
  ballon.x=height.x;
  ballon.y=height.y;
}
function showError(){
  console.log("Error")
}
