
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1400,750);

	engine = Engine.create();                    
	world = engine.world;
    
	paper1 = new Paper(100, 350, 70);
	
	ground = new Ground(550, 650, 20, 1400);   
	
	dustbin1= new Dustbin(1050, 530, 200, 220);
	dustbin2=new Dustbin(1150, 580, 1, 1);
	dustbin3=new Dustbin(950, 580, 1, 1);                 

	launcher1 = new Launcher(paper1.body,{x:200, y:100});

	Engine.run(engine);                              
}                    
                                                                      
function draw() {                    
  rectMode(CENTER);
  background("white");
   
  paper1.display();    
  ground.display();                         
  dustbin1.display();
  dustbin2.display();     
  dustbin3.display();   
  launcher1.display();                   

  keyPressed();          
  drawSprites();        
}      
    
function keyPressed(){   
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x : 90 ,  y:-65} );
	}
} 

function mouseDragged(){
    Matter.Body.setPosition(paper1.body , {x:mouseX , y:mouseY} );
}

function mouseReleased(){
    launcher1.fly();
}