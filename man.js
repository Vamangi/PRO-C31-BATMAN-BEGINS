class Man{
    constructor(){
        var options={
           isStatic:false,
           restitution: 0.5
         };
this.body=Bodies.rectangle(100,0,300,70,options)
World.add(world,this.body)
this.image=loadImage("walking_8.png")

    }

display(){

   
    image(this.image,400,370,300,400);

    
}

}
