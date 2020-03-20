function setup() {
  createCanvas(600, 200);
  background(220);
}

function draw() {
  noStroke();
  fill(122, 188, 188);
  rect(0,0, width/3, height);
  fill(187, 220, 220);
  rect(width/3,0, width/3, height);
  fill(217, 235, 235);
  rect(width*2/3,0, width/3, height);
  fill(255,255,255);
  ellipse(width/6, height/2, 100);
  ellipse(width/2, height/2, 100);
  ellipse(width*5/6, height/2, 100);

  if(mouseX<width/3){
    fill(234, 236, 110);
    arc(width/6, height/2, 100, 100, 0, PI, CHORD);
    fill(110, 236, 112);
    arc(width/6, height/2, 100, 100, PI, 0, CHORD);
    fill(0);
    text("1/2", 0+70, height-70);
  }

  if(mouseX<width*2/3 & mouseX>width/3) {
    point1 = 0;
    point2 = radians(360/3);
    point3 = radians(360*2/3);
    fill(234, 236, 110);
    arc(width/2, height/2, 100, 100, point1, point2, PIE);
    fill(110, 236, 112);
    arc(width/2, height/2, 100, 100, point2, point3, PIE);
    fill(236, 110, 234);
    arc(width/2, height/2, 100, 100, point3, point1, PIE);
    fill(0);
    text("1/3", width*1/3+65, height-100);
  }
  if(mouseX>width*2/3) {
    point1 = 0;
    point2 = radians(360/4);
    point3 = radians(360*1/2);
    point4 = radians(360*3/4);
    fill(234, 236, 110);
    arc(width*5/6, height/2, 100, 100, point1, point2, PIE);
    fill(110, 236, 112);
    arc(width*5/6, height/2, 100, 100, point2, point3, PIE);
    fill(236, 110, 234);
    arc(width*5/6, height/2, 100, 100, point3, point4, PIE);
    fill(110, 171, 236);
    arc(width*5/6, height/2, 100, 100, point4, point1, PIE);
    fill(0);
    text("1/4", width*2/3+70, height-70);
  }

}
