function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = y;
      pixels[index+1] = 60;
      pixels[index+2] = 130;
    }
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
