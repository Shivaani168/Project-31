class Particle {
    constructor(x,y){
    this.radius=10;                   
    var option ={
    isStatic:false,  
    restitution:0.4
    }
    this.body = Bodies.circle(x,y,10,option) 
    this.color=color(random(0,255),random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    } 
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    angleMode(RADIANS)
    ellipseMode(RADIUS)
    fill(this.color)
    stroke("white")
    ellipse(0,0,10,10)  
    pop();
    }
    }   