class Tank {
  constructor(x, y, width, height) {
      var options = {
        isStatic:true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
   
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
         //if(keyIsDown(LEFT_ARROW) && angle > -2.3) {
          //angle -= 0.5;
          //Matter.Body.setAngle(Tank.body, angle);
        //}
        //if(keyIsDown(RIGHT_ARROW) && angle < 0.5) {
            //angle += 0.05;
            //Matter.Body.setAngle(Tank.body, angle);
        //}
        fill("cyan");
        rotate(angle);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this. height);
        pop();
        rect(90, 557, 140, 20);
        rect(90, 537, 118, 20);
        rect(72, 500, 80, 50);
    }


}