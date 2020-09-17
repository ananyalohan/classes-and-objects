class Bird{
    constructor(x,y) {
        var options={
            restitution:0.8,
            friction:0.4,
            density:0.8
    }
        this.body= Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.width= 50
        this.height= 50
}
    display(){
        var pos= this.body.position
        pos.x= mouseX;
        pos.y= mouseY;
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}