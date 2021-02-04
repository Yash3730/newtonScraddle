class Rope{
    constructor(bodyA,bodyB,Xoffset){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:Xoffset,y:0},
           
        }
        
        this.rope=Constraint.create(options);
        this.Xoffset=Xoffset;
        World.add(world, this.rope)

    }

display(){
    var pointA= this.rope.bodyA.position;
    var pointB= this.rope.bodyB.position;
push();
    strokeWeight(4);
    stroke("white");
    line (pointA.x,pointA.y,pointB.x + this.Xoffset,pointB.y);
pop();
}

}