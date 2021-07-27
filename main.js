function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
canvas = createCanvas(500, 500);
canvas.center();
}

function draw() {
image(img, 0,0,500,500);
fill(#90ee90);
nofill(#90ee90);
stroke(#90ee90);
text("Dog", 30, 60);
rect(20, 50, 100, 100);
}
