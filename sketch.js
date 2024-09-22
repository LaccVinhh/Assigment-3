let img;
let img_2;
let list;

var currentSpacship = 1;
var spaceship, spaceship_1, spaceship_2;
let x = 500;
let y = 350;

let radius = 100;
let rotateEnabled = true;

let numDashes2 = 15;
let dashLength2 = 30;
let ratationAngle2 = 0;

let numDashes3 = 10;
let dashLength3 = 27;
let ratationAngle3 = 0;

let numDashes4 = 25;
let dashLength4 = 15;
let ratationAngle4 = 0;

let numDashes5 = 25;
let dashLength5 = 10;
let ratationAngle5 = 0;

let numDashes6 = 20;
let dashLength6 = 22;
let ratationAngle6 = 0;

let particleTexture;
let particleSystem;

let speedX = 0.1;
let speedY = 0.1;

let power = 5;
let smoke = 30;
let smokeLength = 3;
let smokeX = 490;
let smokeY = 385;

const dots =[];
let isMoving = true;



function preload() {
   img = loadImage ('/Images/Main_Background.png');
   img_2 = loadImage ('/Images/Planet_1.png');
   spaceship_1 = loadImage ('/Images/Spaceship_1.png');
   spaceship_2 = loadImage ('/Images/Spaceship_2.png');
   particleTexture = loadImage('/Images/Smoke.png');
   list = loadImage('/Images/List.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  
  particleSystem = new ParticleSystem(
    0,
    createVector(smokeX, smokeY),
    particleTexture
  );

  for (let i = 0; i < 15; i++) {
    dots.push(new Dot(1));
    dots.push(new Dot(2));
    dots.push(new Dot(3));
    dots.push(new Dot(4));
  }

}

function draw() {
  background(50);
  image (img, 0, 0, width ,height ,0 ,0 ,img.width, img.height, COVER);
  image (img_2, 300, 200, 90, 90);

 

  // Dots
    for(const dot of dots) {
      if(isMoving) {
        dot.move();
      }
      dot.draw();
    }
  //Planet
  
  push();
  translate(345,245);
  if(rotateEnabled){
    ratationAngle2 += radians(0.7);
  }
  let dashAngle2 =(TWO_PI / numDashes2);
  stroke(200, 57, 91);
  strokeWeight(3);
  noFill();
  for (let i=0 ; i < numDashes2; i++){
  let startAngle = i * dashAngle2 + ratationAngle2;
  let endAngle = startAngle + dashLength2 / radius;
  arc(0,0, radius * 2 , radius * 2, startAngle,endAngle);
  }
  pop();

  push();
  translate(345,245);
  if(rotateEnabled){
    ratationAngle3 -= radians(0.5);
  }
  let dashAngle3 =(TWO_PI / numDashes3);
  stroke(200, 57, 91);
  strokeWeight(3);
  noFill();
  for (let i=0 ; i < numDashes3; i++){
  let startAngle = i * dashAngle3 + ratationAngle3;
  let endAngle = startAngle + dashLength3 / radius;
  arc(0,0, radius * 1.5 , radius * 1.5, startAngle,endAngle);
  }
  pop();

  push();
  smooth();
  fill(116,105,182);
  ellipse(100,windowHeight-50,500,500);
  pop();
  
  push();
  translate(100,windowHeight-50);
  if(rotateEnabled){
    ratationAngle4 -= radians(0.1);
  }
  let dashAngle4 =(TWO_PI / numDashes4);
  stroke(173,136,198);
  strokeWeight(8);
  noFill();
  for (let i=0 ; i < numDashes4; i++){
  let startAngle = i * dashAngle4 + ratationAngle4;
  let endAngle = startAngle + dashLength4 / radius;
  arc(0,0, radius * 4.9 , radius * 4.9, startAngle,endAngle);
  }
  pop();

  push();
  smooth();
  fill(225,175,198);
  ellipse(100,windowHeight-50,250,250);
  pop();
  
  push();
  translate(100,windowHeight-50);
  if(rotateEnabled){
    ratationAngle5 += radians(0.3);
  }
  let dashAngle5 =(TWO_PI / numDashes4);
  stroke(173,136,198);
  strokeWeight(5);
  noFill();
  for (let i=0 ; i < numDashes5; i++){
  let startAngle = i * dashAngle5 + ratationAngle5;
  let endAngle = startAngle + dashLength5 / radius;
  arc(0,0, radius * 2.4 , radius * 2.4, startAngle,endAngle);
  }
  pop();

  push();
  smooth();
  fill(116,105,182);
  ellipse(100,windowHeight-50,125,125);
  pop();

  push();
  translate(100,windowHeight-50);
  if(rotateEnabled){
    ratationAngle6 += radians(0.3);
  }
  let dashAngle6 =(TWO_PI / numDashes6);
  stroke(173,136,198);
  strokeWeight(10);
  noFill();
  for (let i=0 ; i < numDashes6; i++){
  let startAngle = i * dashAngle6 + ratationAngle6;
  let endAngle = startAngle + dashLength6 / radius;
  arc(0,0, radius * 7 , radius * 7, startAngle,endAngle);
  }
  pop();



  if(keyIsDown(68)){
    x = min(windowWidth - 160, x + power); 
    for (const dot of dots) {
      dot.updateDeltaX(dot.deltaX - 0.1);
    }

    smokeX = min(windowWidth - 160, smokeX + power); 
    particleSystem.origin.x = smokeX; 
  }

  if(keyIsDown(65)){
    x = max(0, x - power); 
    for (const dot of dots) {
      dot.updateDeltaX(dot.deltaX + 0.1);
    }

    smokeX = max(0, smokeX - power);
    particleSystem.origin.x = smokeX; 
  }

  if(keyIsDown(87)){
    y =  max(0, y - power);

    smokeY = max(0 + 35, smokeY - power)
    particleSystem.origin.y = smokeY; 
  }

  if(keyIsDown(83)){
    y = min(windowHeight - 110, y + power);

    smokeY = min(windowHeight - 75, smokeY + power); 
    particleSystem.origin.y = smokeY; 
  }

  if (keyIsDown(68)) { 
    smokeLength = 2; 
  } else {
    smokeLength = 3; 
  }

  if (keyIsDown(65)) { 
    smokeLength = 10; 
  } else {
    smokeLength = 3; 
  }


  if (keyIsDown(UP_ARROW)) { 
    speedX = min(0.8, speedX + 0.5); 
    speedY = min(2, speedY + 0.5); 
    smoke = min(35, smoke + 5); 
    power = 10;
    
  }

  if (keyIsDown(DOWN_ARROW)) { 
    speedX = max(0.1, speedX - 0.5);
    speedY = max(0.1, speedY - 0.5); 
    smoke = max(30, smoke - 5); 
    power = 5;
  }


  let dx = map(0, 0, width, -0.1, -0.8);
  let wind = createVector(dx, 0);

  particleSystem.applyForce(wind);
  particleSystem.run();
  for (let i = 0; i < 2; i++) {
    particleSystem.addParticle();
  }

  var spaceship;

  if (currentSpacship === 1){
    spaceship = spaceship_1;
  } else if (currentSpacship === 2){
    spaceship = spaceship_2;
  } 

  image (spaceship, x, y, 160, 105);

  if (keyIsDown(49)){
    currentSpacship = 1;
  } else if (keyIsDown(50)){
    currentSpacship = 2;
  }

  if(keyIsDown(80)){
    image(list,windowWidth-720,windowHeight-410);
    list.resize(700,0);
  }

  push();
  fill(255,255,255);
  textSize(30);
  textFont("Protest Guerrilla");
  text("Hold P to see Moving List",windowWidth-350,windowHeight-10);
  
  pop();
  
}

class Dot {
  constructor(layer){
    this.layer = layer;
    this.x = random(width);
    this.y = random(height);
    this.deltaX = -layer * 1;
    this.deltaY = 0;
    }

    move(){
      this.x += this.deltaX;
      this.y += this.deltaY;

      this.x = wrap(this.x, 0, width);
      this.y = wrap(this.y, 0, height);
    }

    draw(){
      if(this.layer == 1){
        fill(239, 156, 102, 200); 
      } else if (this.layer == 2){
        fill(200, 207, 160, 200); 
      } else if (this.layer == 3){
        fill(120, 171, 168, 200); 
      } else {
        fill(252, 220, 148, 200);
      }
      noStroke();
      circle(this.x, this.y, 60 / (8 - this.layer));
    }

    updateDeltaX(value){
      this.deltaX = value;
    }

    
}


function wrap (value, min, max) {
  if (value < min) {
    return max;
  } else if (value > max){
    return min;
  }
  return value;
}

class ParticleSystem {
  constructor(particleCount, origin, textureImage) {
    this.particles = [];
    this.origin = origin.copy();
    this.img = textureImage;
    for (let i = 0; i < particleCount; ++i) {
      this.particles.push(new Particle(this.origin, this.img));
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let particle = this.particles[i];
      particle.run();

      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  applyForce(dir) {
    for (let particle of this.particles) {
      particle.applyForce(dir);
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.origin, this.img));
  }
}

class Particle {
  constructor(pos, imageTexture) {
    this.loc = pos.copy();

    let xSpeed = randomGaussian() * speedX;
    let ySpeed = randomGaussian() * speedY;

    this.velocity = createVector(xSpeed, ySpeed);
    this.acceleration = createVector();
    this.lifespan = smoke;
    this.texture = imageTexture;
    
  }

  run() {
    this.update();
    this.render();
  }

  render() {
    
    image(this.texture, this.loc.x, this.loc.y);
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  isDead() {
    return this.lifespan <= 0.0;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.loc.add(this.velocity);
    this.lifespan -= smokeLength;
    this.acceleration.mult(0);
  }
}
