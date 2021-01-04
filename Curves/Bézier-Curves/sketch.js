function setup() {
    createCanvas(150, 200);
}

function draw() {
    background(255);
    noFill();
    stroke(0);
    beginShape();
    vertex(30, 70);
    bezierVertex(25, 25, 100, 50, 50, 100);
    bezierVertex(20, 130, 75, 140, 120, 120);
    endShape();

    ellipse(25, 25, 5, 5);
    ellipse(100, 50, 5, 5);
    ellipse(20, 130, 5, 5);
    ellipse(75, 140, 5, 5);
}