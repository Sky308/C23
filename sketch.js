const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,750,1200,20);

    box1 = new Box(950,250,80,90);
    box2 = new Box(925,500,80,62);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display(); 
}