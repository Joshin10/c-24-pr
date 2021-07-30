
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer,stone,plane,rubber
var engine,world

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(10,100)
stone= new Stone(700,320,100,100)
plane= new Plane(600,height,1220,30)
rubber= new Rubber(900,450,70)
}


function draw() {
  background(255);
  Engine.update(engine);
  hammer.display()
  stone.display()
  plane.display()
  rubber.display()
  

 
}



