let v = 1.0 / 9.0;
let kernel = [[v, v, v], [v, v, v], [v, v, v]];

function preload() {
    img = loadImage('https://raw.githubusercontent.com/Easycker/Manyoushuu/main/Image/Assets/Lenna.png');
}

function setup() {
    createCanvas(1000, 500);
    noLoop();
}

function draw() {
    image(img, 0, 0);

    edgeImg = createImage(img.width, img.height);
    edgeImg.loadPixels();

    for (let x = 1; x < edgeImg.width; x++) {
        for (let y = 1; y < edgeImg.height; y++) {
            let sum = 0;

            for (kx = -1; kx <= 1; kx++) {
                for (ky = -1; ky <= 1; ky++) {
                    let xpos = x + kx;
                    let ypos = y + ky;

                    let val = red(img.get(xpos, ypos));
                    sum += kernel[kx+1][ky+1] * val;
                }
            }

            edgeImg.set(x, y, color(sum));
        }
    }

    edgeImg.updatePixels();
    image(edgeImg, img.width, 0);
}