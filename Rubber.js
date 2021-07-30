class Rubber{
    constructor(x,y,r){
    var options={
    'density':0.3,
    'friction':5,
    'resititution':1
    };
    this.r=r
    this.body=Bodies.circle(x,y,(this.r-20)/2,options);
    this.x=x
    this.y=y
   
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("black" )
    ellipse(0,0,this.r,this.r);
    pop();

}
}