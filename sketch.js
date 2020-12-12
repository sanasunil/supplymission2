var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 550);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	box=createSprite(380,505,200,15);
	box.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
   
	//Create a Ground
	ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  fill ("red");

  rect(480,470,15,100);
  rect(280,470,15,100);
  packageSprite.collide(box);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
}



