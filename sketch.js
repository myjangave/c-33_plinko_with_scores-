var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var particles = [];
var plinkos = [];
var divisions =[];

var gameState,muse;

var score;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    score = 0;
    muse = 0;

    gameState="play";


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

     text("500",20,550);
     text("500",100,550);
     text("500",180,550);
     text("500",260,550);
     text("100",340,550);
     text("100",420,550);
     text("100",500,550);
     text("200",580,550);
     text("200",660,550);
     text("200",740,550);


  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
   for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle!=null) 
   {
    particle.display();
     if (particle.body.position.y>720) {
        if (particle.body.position.x < 300) {
          score = score+500;
          particle = null;
        }
     }
   }

   if (particle!=null) 
   {
    particle.display();
     if (particle.body.position.y>720) {
        if (particle.body.position.x < 500  ) {
          score = score+100;
          particle = null;
        }
     }
   }

   if (particle!=null) 
   {
    particle.display();
     if (particle.body.position.y>720) {
        if (particle.body.position.x > 500) {
          score = score+200;
          particle = null;
        }
     }
   }


   if (muse >= 8) {
     gameState = "end";
     stroke("green");
     textSize(20);
     text("GameOver",400,400)
    }

   

}

function mousePressed()
{
  if (gameState!=="end")
   {
    muse = muse + 1; 
    particle = new Particle(mouseX,10,10,10);
  }
}