var drops = [];
                                   //BY - Arindam Das Modak
function setup() {
  createCanvas(1310, 58);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i< drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
