let x = 100;
let y = 250;
let d = 200;
let score = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#17FACE");
  fill("#0700FC");
  ellipse(x, y, d, d);
  textSize(50);
  text(score, 200, 50);

  //if (mousePressed) {
  //  background (#17FACE);
  //}
}

function mouseClicked() {
  if (mouseX > x - d && mouseX < x + d) {
    if (mouseY > y - d && mouseY < y + d) {
      x = random(100, 700);
      y = random(100, 700);
      d = random(700, 200);
      score = score + 1;
    }
  }
}
