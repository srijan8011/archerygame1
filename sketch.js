const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var playerBase, player;
var computerBase, computerPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new PlayerBase(width-900, random(450, height - 300), 180, 150);
   computerBase = new ComputerBase( width-300, random(450, height - 300), 180, 150);

   player = new Player(width-915, playerBase.body.position.y - 153, 50, 180);
   computerPlayer = new ComputerPlayer(width-285, computerBase.body.position.y - 153, 50, 180);



 }

function draw() {

  background(78);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();


   //display Player and computerplayer
   player.display();
   computerPlayer.display();


}
