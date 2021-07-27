function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
canvas = createCanvas(500, 500);
canvas.center();
}

function draw() {
image(img, 0,0,500,500)
}