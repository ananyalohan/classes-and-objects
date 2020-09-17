class Log{
    constructor(x,y,height,angle) {
        var options={
            restitution:0.8,
            friction:0.4,
            density:0.8
    }
        this.body= Bodies.rectangle(x,y,20,height,options);
        World.add(world,this.body);
        this.width= 20
        this.height= height
        Matter.Body.setAngle(this.body,angle)
}
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}