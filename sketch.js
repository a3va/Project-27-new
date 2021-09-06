
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var coolLine, awesomeLine, magicalBobSuspender, flimsyString, parachuteCord;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(200,480,100);
	bobObject2 = new bob(300,480,100);
	bobObject3 = new bob(400,480,100);
	bobObject4 = new bob(500,480,100);
	bobObject5 = new bob(600,480,100);

	roofObject = new roof(400,50,720,50);

	coolLine = new rope(bobObject1.body,roofObject.body,-100*2,0);
	awesomeLine = new rope(bobObject2.body,roofObject.body,-100*2,0);
	magicalBobSuspender  = new rope(bobObject3.body,roofObject.body,-100*2,0);
	flimsyString = new rope(bobObject4.body,roofObject.body,-100*2,0); 
	parachuteCord = new rope (bobObject5.body,roofObject.body,-100*2,0);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  text(mouseX +',' + mouseY ,100,100);

  strokeWeight(5 );
  line(200,480,200,50);
  line(300,480,300,50);
  line(400,480,400,50);
  line(500,480,500,50);
  line(600,480,600,50);


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  veryCoolRope.display();
  
  drawSprites();
 
}



