
var r = 0;
var g = 50;
var b=255;
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
}


function draw(){
      background(r,g,b);
  // change the value of Red based on the mouse movement about the X axis
    
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
   let val1 = map(mouseX,0,width,0,245,true);
   r = val1;

   let val2 = map(mouseX,0,width,0,100,true);
   g = val2;

   let val3 = map(mouseX,0,width,0,150,true);
   b = val3;

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,200,50,50);
  // Remember to fill the canvas with white paint before creating the ellipse.
}