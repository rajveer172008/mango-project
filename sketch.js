
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,24);
	mango3=new mango(1140,200,24);
	mango4=new mango(1200,243,24);
	mango5=new mango(1050,225,24);
	mango6=new mango(1249,202,24);
  mango7=new mango(1219,259,23);
	mango8=new mango(1189,123,19);
	mango9=new mango(1129,70,25);
	mango10=new mango(1109,60,23);
  string1=new string(mango.body.body,{x:200, y:50});
	stone1 = new stone(200,200,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone1.display();
string1.display();
   
  groundObject.display();
}
