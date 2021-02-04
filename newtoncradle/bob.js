class Bob {
    constructor(x,y,radius){
var Options={
    density:1,
    
}
this.body=Bodies.circle(x,y,radius,Options)
this.radius=radius
World.add(world,this.body);
 }
 display(){
     fill("orange")
     ellipseMode(RADIUS)
     ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
 }
}