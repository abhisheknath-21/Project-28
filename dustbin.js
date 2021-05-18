class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          restitution :0,        
          friction: 0.5,
          density:1.2,                     
      }      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;   
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }                    
    display(){                                          

        var dustbinpos=this.body.position;
        push()     
        translate(dustbinpos.x, dustbinpos.y);                                                                
        imageMode(CENTER)
        fill("white");
        image(this.image,0,0,this.width, this.height);
        pop() 
    }
  };