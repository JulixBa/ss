const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var g1;
var g2;
var g3;
var g4;
var ball;
var options;
var up, right;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  options = { 
    restitution: 0.5,
  }
  g1 = new Ground(200,390,400,35);
  g2 = new Ground(390,200,35,400);
  g3 = new Ground(10,200,35,400);
  g4 = new Ground(200,10,400,35);
  ball = Bodies.circle(200, 200, 10, options);

  up = createImg("up.png");
  up.position(200,30);
  up.size(50,50);
  right = createImg("right.png");
  right.position(20,30);
  right.size(50,50);

 up.mouseClicked(Y);
 right.mouseClicked(X);

 World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  g1.show();
  g2.show();
  g3.show();
  g4.show();
  ellipse(ball.position.x, ball.position.y, 10);
  Engine.update(engine);
}

function X() {
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.02, y:0});

}
function Y() {
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.02});

}
