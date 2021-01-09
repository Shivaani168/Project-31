class Plinko {
    constructor(x,y,radius){
    this.radius=10;
    var option ={
    isStatic:true,  
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    this.body = Bodies.circle(x,y,10,option)
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
    fill("white")
    ellipse(0,0,10,10)
    pop();
    }
    }   