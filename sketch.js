var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke("purple");
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(mnAngle);
  stroke("pink");
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke("pink");
  arc(0,0,275,275,0,mnAngle);

  push();
  rotate(hrAngle);
  stroke("grey");
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke("grey");
  arc(0,0,250,250,0,hrAngle);

  drawSprites();
}