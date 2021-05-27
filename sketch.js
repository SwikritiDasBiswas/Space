const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var space,planet,planetImg,comet,cometImg;
var galaxy, galaxyImg,earth;
function preload(){
    space = loadImage("space.jpg")
    planetImg = loadImage("planet.png")
    galaxyImg = loadImage("galaxy.png")
    cometImg = loadImage("comet.png")
}
function setup(){
    createCanvas(650,550)
    engine = Engine.create();
	world = engine.world;

    planet = createSprite(300,100)
    planet.addImage("mars",planetImg)
    planet.scale = (0.1)

    galaxy = createSprite(580,100)
    galaxy.addImage("milky_way",galaxyImg)
    galaxy.scale = (0.1)

    comet = createSprite(610,60)
    comet.addImage("Haileys",cometImg)
    comet.scale = (0.2) 
    comet.velocityX = -6
    comet.velocityY = 1.5
    comet.lifetime = 220

    earth = new Earth(100,450,150)


    Engine.run(engine);
}
function draw(){
    background(space)

    drawSprites();
    earth.display();
}
