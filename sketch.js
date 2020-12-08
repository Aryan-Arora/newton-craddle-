
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




var roof1;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


var chain1 ;
var chain2;
var chain3;
var chain4;
var chain5;







function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	


	//Create the Bodies Here.
roof1=new roof(600,150,300,20)
bob1=new bob(490,500,60)
bob2=new bob(550,500,60)
bob3=new bob(610,500,60)
bob4=new bob(670,500,60)
bob5=new bob(730,500,60)
chain1=new rope(bob1.body,roof1.body,-60*2,0)
chain2=new rope(bob2.body,roof1.body,-60,0)
chain3=new rope(bob3.body,roof1.body,0,0)
chain4=new rope(bob4.body,roof1.body,60,0)
chain5=new rope(bob5.body,roof1.body,60*2,0)







	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  
  



  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
  
  
    drawSprites();
 
}



function mouseDragged(){
    
  Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});

}
