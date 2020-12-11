
var database ,dog,foods,happyDog,FoodStock
var position

function preload()
{
  //load images here
    dog = loadImage("images/dog.png")
    dogHappy = loadImage("images/dogHappy.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  console.log(database);

  dog = createSprite(550,250,10,10);
  dog.addImage(dog)
  dog.scale=0.2

  var dog = database.ref('Food');
  dog.on("value", readPosition, showError);
}


function draw() {  
  background(46,139,87);

  Text("remainig bottels = 15,548,250,10,10")
  if(keyWentDown(UP_ARROW))
  writeStock(foods)
   dog.addImage(dogHappy)
  drawSprites();
 
  
}



