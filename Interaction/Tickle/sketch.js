let message = 'tickle',
    font,
    bounds,
    fontsize = 60,
    x, y;

function preload() {
    // font = loadFont('');
}

function setup() {
    createCanvas(710, 400);

    // textFont(font);
    textSize(fontsize);

    bounds = font.textBounds(message, 0, 0, fontsize);
    x = width / 2 - bounds.w / 2;
    y = height / 2 - bounds.h / 2;
}

function draw() {
    background(240, 120);

    fill(0);
    text(message, x, y);
    bounds = font.textBounds(message, x, y, fontsize);

    if (
        mouseX >= bounds.x &&
        mouseX <= bounds.x + bounds.w &&
        mouseY >= bounds.y &&
        mouseY <= bounds.y + bounds.h
    ) {
        x += random(-5, 5);
        y += random(-5, 5);
    }
}