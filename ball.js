class Ball
{
    constructor(x,y)
    {
        var options={restitution:1,friction:0.23,density:0.5}
        this.body=Bodies.circle(x,y,20,options);
        
        this.radius=20;
        World.add(world,this.body);

    }
display()
{
   var pos=this.body.position;
   strokeWeight(3);
   stroke("white"); 
   ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,20);

}


}