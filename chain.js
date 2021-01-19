class chain{
    constructor(bodyA,bodyB){
    var options ={
        bodyA:bodyA,
        bodyB:bodyB,
        length:20,
        stiffness:2
    }
    this.body=Constraint .create(options);
    World.add(world,this.body)
}
display(){
    var pointA=this.body.bodyA.position;
    var pointB=this.body.bodyB.position;
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
