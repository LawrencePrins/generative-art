function Food(x = 0, y = 0) {

    this.foodLocation = function () {
      this.x = random(width);
      this.y = random(height);
    };
  
    this.display = function () {
      fill(255, 203, 59);
      ellipse(this.x, this.y, this.foodWidth, this.foodHeight);
    };
  
    this.create = function () {
      this.foodLocation();
      createVector(this.x, this.y);
      this.display();
    };
  
    this.revealLocation = function () {
      let location = {
        x: this.x,
        y: this.y,
      };
      return location;
    };
  
    this.setSize = function (w, h) {
      this.foodWidth = w;
      this.foodHeight = h;
    }
   
    this.revealSize = function () {
      let size = {
        width: this.foodWidth,
        height: this.foodHeight,
      };
      return size;
    };
  }