


//Crear espacio de nombre para Engine
const Engine=Matter.Engine;
//Crear espacio de nombre para World
const World=Matter.World;
//Crear espacio de nombre para Bodies
const Bodies=Matter.Bodies;
//Crear espacio de nombre para Body
const Body=Matter.Body;

let engine;
let world;
var angle=60;

var fan1,fan2,fan3,fan4;

function setup() {
  createCanvas(400,400);
//crear engine
engine=Engine.create();
  //Agregar world a engine
  world=engine.world;
  

  
   var ball_options = {
    restitution: 1,
    frictionAir:1,
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
//agregarlo a world
ground=Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);
  
 fan1=new Ground(50,370,50,30);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 rect(ground.position.x,ground.position.y,400,20);

 fan1.show();

  
  
}

