class bob
{
	constructor(x,y,)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8
			
			}
	
		this.body=Bodies.circle(x, y,25, options)
		World.add(world, this.body);

		console.log(this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			ellipseMode(RADIUS);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(this.body.position.x,this.body.position.y,25,25);
			pop()
			
	}

}

