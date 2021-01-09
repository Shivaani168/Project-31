const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
  world = engine.world;

  division7=new Ground(width,height-150,10,divisionHeight)

  for(var k=5;k<width;k=k+80){
    divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var p1=30; p1<width; p1=p1+60){
    plinkos.push(new Plinko(p1,75));
  }

  for (var p2=10; p2 <width-10; p2=p2+60){   
    plinkos.push(new Plinko(p2,175));
  }

  for (var p3=30; p3<width; p3=p3+60){
    plinkos.push(new Plinko(p3,275));
  }
  
  for (var p4=10; p4<width; p4=p4+60){
    plinkos.push(new Plinko(p4,375));
  }

  ground=new Ground(width/2,height-5,490,20)

	Engine.run(engine);
}

function draw() {
    Engine.update(engine)
	  rectMode(CENTER);
    background(0);

    for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10)); //new Particle not Particles
          }
  
   for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    }
   for (var k = 0; k < divisions.length; k++) {  
    divisions[k].display();  
    }
    division7.display()
    ground.display()
}