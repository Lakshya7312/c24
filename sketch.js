// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var ground;
var tank;

function setup() {
    // Setup the shooting ball and the bubble balls.
    createCanvas(800, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400, 584, 799, 30);
    tank = new Tank(137, 503, 50, 20);
    
}

function draw() {
background("grey");
Engine.update(engine);
ground.display();
tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}