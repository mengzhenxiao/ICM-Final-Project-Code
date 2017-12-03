class LoadCircle {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2+100;
    this.r = 50;
  }

  show() {
    fill('#f08c8e');
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
  }
}

class LoadingCircle {
  constructor(r) {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2+100;
    this.r = r;
  }

  show() {
    noFill();
    stroke('#f1d0b5');
    strokeWeight(10);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
  }

  change() {
    if (this.r < 40) {
      this.r = this.r + 1;
    } else {
      this.r = 0;
    }
  }
}
