const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var blowButton;

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2, height / 2, 80, 80);
  blowerMouth = new BlowerMouth(width / 2, height / 2 + 20, 100, 90);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
 
  blowButton = createButton("");
  blowButton.position(width / 2, height - 100);
  blowButton.size(20,20)
  blowButton.mousePressed(blow);
}

function draw() {
  background(59);
  Engine.update(engine);
  blower.show();
  blowerMouth.show();
  ball.show();
}
function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}
