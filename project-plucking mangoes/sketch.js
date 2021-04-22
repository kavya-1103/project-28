const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,boyImage;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("tree.png");
    boyImage=loadImage("boy.png")
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  
  mango1 =new Mango(1100,100,30);
  mango2 = new Mango(980,120,35);
  mango3 = new Mango(1000,150,50);
  mango4 = new Mango(950,155,40);
  mango5 =new Mango(1000,200,50)
  mango6 = new Mango(800,170,28);
  mango7 = new Mango(1180,130,45);
  mango8 = new Mango(1150,170,30);
  mango9 = new Mango(1120,166,50);
  mango10 = new Mango(1160,180,30);
  mango11 = new Mango(900,90,30);
  mango12 = new Mango(1000,84,30);

  stone = new Stone(235,420,60)
  

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:235, y:420});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);
    imageMode(CENTER);
   image(backgroundImg,1000,300,650,650);
   image(boyImage,300,480,200,300);
   textSize(25);
   fill("black")
   text("Press Space To Restart",65,75)

stone.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();
   mango12.display();
   

   detectCollision(stone,mango1)
   detectCollision(stone,mango2)
   detectCollision(stone,mango3)
   detectCollision(stone,mango4)
   detectCollision(stone,mango5)
   detectCollision(stone,mango6)
   detectCollision(stone,mango7)
   detectCollision(stone,mango8)
   detectCollision(stone,mango9)
   detectCollision(stone,mango10)
   detectCollision(stone,mango11)
   detectCollision(stone,mango12)
    ground.display();

    
    
    //log6.display();
    slingshot.display();  

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(stone.body)
    }
    
}

function detectCollision(s,m)
{
    mpos=m.body.position
    spos=s.body.position;

    var distance= dist(spos.x,spos.y,mpos.x,mpos.y);
    if(distance <=m.r+s.r){
        Matter.Body.setStatic(m.body,false)
    }
}
