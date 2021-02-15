class Ball{
    constructor(x,y,radius){
        var options = {
            restitution : 0.6,
            friction : 0.5,
            density : 1.2,
        }
        this.body = Bodies.circle(x,y,radius/2);
        this.radius = radius/2;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
    
}