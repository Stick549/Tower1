const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3,box2,box3,box4,box5, box6, box7, box8, box9;
var backgroundImg,platform;
var bird, slingshot, stone;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new BaseClass(1000, 325,50, 50)
    box2 = new BaseClass(975, 325,50, 50)
    box3 = new BaseClass(950, 325,50, 50)
    box4 = new BaseClass(1025, 325,50, 50)
    box5 = new BaseClass(1050, 325,50, 50)
    box6 = new BaseClass(1000, 300,50, 50)
    box9 = new BaseClass(1000, 275,50, 50)
    box7 = new BaseClass(975, 300,50, 50)
    box8 = new BaseClass(1025, 300,50, 50)
    stone = new Polygon(50, 50 ,50, 50)
    ground = new Ground(600,height,1200,20);
    platform = new Ground(1000, 350, 300, 10);
    slingshot = new SlingShot(stone.body,{x:400, y:150});
}

function draw(){
    Engine.update(engine);
    background(255, 255, 255)
    ground.display()
    platform.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    stone.display()
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}