const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var ground,string1,string2,string3,string4,ball1,ball2,ball3,ball4;

function setup()
{
    engine=Engine.create();
    world=engine.world;
   
    var canvas=createCanvas(1600,400);
   
    ball1=new Ball(200,200);
    ball2=new Ball(230,200);
   
    ball3=new Ball(270,200);
    ball4=new Ball(300,200);
    ground=new Ground(190,140,1700,10);
   
   string1=new String({x:100,y:140},ball1.body);
   string2=new String({x:130,y:140},ball2.body);
   string3=new String({x:160,y:140},ball3.body);
   string4=new String({x:190,y:140},ball4.body);


}

function draw()
{
    Engine.update(engine);
    background("black");
   
    ground.display();
    ball1.display();
    string1.display();
   
    ball2.display();
    string2.display();
   
    ball3.display();
    string3.display();
   
    ball4.display();
    string4.display();
    
   
  }

function applyforce()
{
if(keyCode===LEFT_ARROW)
{
    Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-85,y:-85});
}
}