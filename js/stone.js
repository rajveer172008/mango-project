class stone{
   constructor(x,y,r)
   {
       var options={
       isStatic:false,
       restitution:0,
       friction:1,
       density:1.2
       }
      
      
     
      this.body=Bodies.circle(x,y,r,options);
      this.r=r;
      this.image=loadImage('images/stone.png');
      World.add(world,this.body);
    }
}
  display()
  {
      var stonePos=this.body.positions;
      push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
  }





