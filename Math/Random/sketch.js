var spot = {
    x : 100,
    y : 50
};
  
var col = {
    r : 100,
    g : 0,
    b : 50
};
  
function setup() {
    createCanvas(600, 400);
    background(255);
}
  
function draw() {
    spot.x = random(0, width);
    spot.y = random(0, height);
    
    col.r = random(100, 199);
    col.b = random(100, 199);
  
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(spot.x, spot.y, 10, 10);
}