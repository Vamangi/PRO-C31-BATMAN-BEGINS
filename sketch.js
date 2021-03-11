const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops=[]
var thunder, thunderCreatedFrame = 10;


var man1

function preload(){
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4= loadImage("4.png");

}


function setup(){
    var canvas = createCanvas(1000,750);
    engine = Engine.create();
    world = engine.world;

    man1 =new Man()
    if(frameCount% 10===0){
      for(var i=0; i<maxDrops;i++){
        drops.push(new Drop(random(10,1600),random(0,1000)));
       }
      }
  
  
    }
    


function draw(){
    background(0);
   
    Engine.update(engine);
   
    man1.display()

    for(var i=0; i<maxDrops;i++){
      drops[i].display();
      drops[i].update();
    }


    var rand = Math.round(random(1,2));
    if(frameCount%80===0){
     thunderCreatedFrame = frameCount;
     thunder = createSprite(random(0,800),random(0,30),2,2);
     switch(rand){
       case 1 : thunder.addImage(thunder1);
       break;
       case 2 : thunder.addImage(thunder2);
       break;
       case 3 : thunder.addImage(thunder3);
       break;
       case 4 : thunder.addImage(thunder4);
       break;
       default : break;

      
     }
     thunder.scale=random(0.5,0.8)
    }
    
    if(thunderCreatedFrame + 50 === frameCount && thunder){
      thunder.destroy();
   }
    
      drawSprites();
    }   

