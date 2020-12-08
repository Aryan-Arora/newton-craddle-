class bob
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:1,
			friction:0,
			frictionAir:0,
			slop:1,
			inertia:Infinity

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("lightblue")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}