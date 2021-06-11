//Create variables here
 var dog, happyDog
 var database, foodS, foodStock;
function preload()
{
//load images here
dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
//canvas size 
	createCanvas(500, 500);
//for creating the dog sprite and then adding the image
dog = createSprite(12, 23, 200, 343);
dog.addImage(dogImg);

foodStock = database.ref('Food');
foodStock.on("value", readstock);

  
}


function draw() {  
//for the background
 background("46, 139, 87")

//for the up arrow key so that we cqn feed the dog
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);

//for the text


}
  drawSprites();
  //add styles here

//function read value from the DB
function readStock(data){
  food-data.val();
}
//function write values in the DB
 function writeStock(x){
   database.ref('/').update({
     Food: x 
   })
 }
}



