const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  Boggie1=new Boggie(50, 200, 50, 50);
  Boggie2=new Boggie(150, 200, 50, 50);
  Boggie3=new Boggie(250, 200, 50, 50);
  Boggie4=new Boggie(350, 200, 50, 50);
  Boggie5=new Boggie(450, 200, 50, 50);
  Boggie6=new Boggie(550, 200, 50, 50);

  chain1 = new Chain(Boggie1.body, Boggie2.body)
  chain2 = new Chain(Boggie2.body, Boggie3.body)
  chain3 = new Chain(Boggie3.body, Boggie4.body)
  chain4 = new Chain(Boggie4.body, Boggie5.body)
  chain5 = new Chain(Boggie5.body, Boggie6.body)

  rock1 = new Rock(1000, 200, 120, 120);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  Boggie1.show();
  Boggie2.show();
  Boggie3.show();
  Boggie4.show();
  Boggie5.show();
  Boggie6.show();

  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();

  rock1.show();

  var collistion=Matter.SAT.collides(Boggie6.body,  rock1.body);
  if(collistion.collided){
    flag=1
  }

  if(flag === 1){
    fill("red")
    stroke(10);
    textSize(20);
    text("Crash", 600, 100);

    crashSound.play();
  }
  }

  function keyPressed(){
    if(keyCode ===  RIGHT_ARROW){
      Matter.Body.applyForce(Boggie6.body,{x: Boggie6.body.position.x, y: Boggie6.body.position.y}, 
      {x : 0.5, y : 0})
      trainSound.play();
    }
  }
