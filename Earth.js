class Earth
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r = r;
        this.image = loadImage("earth.png")
		this.body=Bodies.circle(this.x,this.y,this.r , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
            ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r*2, this.r*2);
			pop()
			
	}

}