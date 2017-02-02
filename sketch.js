function setup() {
  resizeCanvas(500,500);
  
}



function mouseClicked() {
  noStroke()
  ellipse(mouseX,mouseY,20,20);
  fill(random(255),random(255), random(255), random (255));
}