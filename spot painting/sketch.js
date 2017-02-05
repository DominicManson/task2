function setup() {
  resizeCanvas(500,500);
  
}

var ball = new Ball();

function draw(){
  ball.draw();
  ball.update();
  
}


function Ball() {
  this.position = new p5.Vector(5,5);
  this.vector = new p5.Vector(5,5);
  this.radius = 10;

}
this.draw = function() {
  ellipse(this.position.x,this.position.y,this.radius,this.radius);
 
}

this.update = function(){
  this.position.add(this.vector);
  fill(random(255),random(255), random(255), random (255));
}

