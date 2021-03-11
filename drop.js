class Drop{
    constructor(x,y){
        var options={
            friction: 0.1
         };
this.body=Bodies.circle(x,y,7,options)
World.add(world,this.body)

    }

display(){
  var pos = this.body.position;

    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y,7);
  }
   update(){
     if(this.body.position.y> 850){
        Matter.Body.setPosition(this.body, {x:random(0,1600),  y: random(-10,0)});
      } }
}

    
