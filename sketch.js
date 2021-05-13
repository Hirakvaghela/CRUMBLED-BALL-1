
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,leftSide,bottom,rightSide;

function preload(){
	
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 660, 10);

     ground = new Ground(400, 680, 800, 20);
  
	 leftSide = new Dustbin(550, 620, 20, 100);
     bottom = new Dustbin(635, 660, 150, 20);
     rightSide = new Dustbin(720, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  }


