function Drop() {
  this.x = random(width);
  this.y = random(-500, -100);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 5, 50);
  
  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0.1, 0.4);
    this.yspeed = map(this.z, 0, 20, 4, 10);
    
    if (this.y > height) {
      this.y = random(-200,-50);
      this.yspeed = map(this.z, 0, 20, 5, 50);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 4);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}