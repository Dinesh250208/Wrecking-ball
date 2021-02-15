const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var slingShot;

function preload(){
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 
  //level one
  
  //ball holder with slings
  ball = new Ball(50,200,60);
  
  block1 = new Block(700,100,70,70);
  block2 = new Block(700,150,70,70);
  block3 = new Block(700,200,70,70);
  block4 = new Block(700,250,70,70);
  block5 = new Block(700,300,70,70);
  block6 = new Block(600,100,70,70);
  block7 = new Block(600,150,70,70);
  block8 = new Block(600,200,70,70);
  block9 = new Block(600,250,70,70);
  block10 = new Block(600,300,70,70);
  slingShot = new Slingshot(ball.body,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  ball.display();
  
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
