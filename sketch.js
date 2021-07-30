const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup (){
    createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1200, 50);
    ball = new Ball(600, 400, 75, PI);

    box1 = new Boxie(800, 300, 75, 50);
    box2 = new Boxie(875, 300, 50, 75);
    box3 = new Boxie(800, 225, 75, 75);
    box4 = new Boxie(875, 225, 50, 50);
    box5 = new Boxie(833.5, 175, 150, 25);
    box6 = new Boxie(800, 150, 50, 75);
    box7 = new Boxie(875, 150, 50, 50);
    box8 = new Boxie(800, 100, 75, 75);
    box9 = new Boxie(875, 100, 75, 75);

    chain = new Chain(ball.body, {x : 600, y : 200});

}

function draw() {

    background("cyan");


    Engine.update(engine);

    ground.display();
    ball.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    chain.display();

}


function mouseDragged () {

    Body.setPosition(ball.body, {x : mouseX, y : mouseY});

}
