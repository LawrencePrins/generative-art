let x, y;

function mainSlang() {
  if (on) {
    let foodLocation = food.revealLocation();

    let foodSize = food.revealSize();
    let foodWidth = foodSize.width;
    let foodHeight = foodSize.height;
    let foodX = foodLocation.x - foodWidth / 2;
    let foodY = foodLocation.y - foodHeight / 2;
    let myWidth = 120;
    let myHeight = 120;
    let myX;
    let myY;
    let myXend;
    let myYend;
    let foodXend = foodX + foodWidth;
    let foodYend = foodY + foodHeight;

    let foodDimensions = {
      topleft: { x: foodX, y: foodY },
      topright: { x: foodX + foodWidth, y: foodY },
      bottomleft: { x: foodX, y: foodY + foodHeight },
      bottomright: { x: foodX + foodWidth, y: foodY + foodHeight },
    };

    //rotationX, rotationY
    const dx = constrain(rotationY, -4, 4);
    const dy = constrain(rotationX, -4, 4);
    x += dx;
    y += dy;

    // zodat het binnen het scherm blijft
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    myX = x - 75;
    myY = y - 75;

    myXend = myX + myWidth;
    myYend = myY + myHeight;

    let snakeDimensions = {
      topleft: { x: myX, y: myY },
      topright: { x: myX + myWidth, y: myY },
      bottomleft: { x: myX, y: myY + myHeight },
      bottomright: { x: myX + myWidth, y: myY + myHeight },
    };

    if (
      foodDimensions.topleft.x >= snakeDimensions.topleft.x &&
      foodDimensions.topright.x <= snakeDimensions.topright.x &&
      foodDimensions.topleft.y >= snakeDimensions.topleft.y &&
      foodDimensions.bottomleft.y <= snakeDimensions.bottomleft.y
    ) {
      food.foodLocation();
    }

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 40);
    let to = color(90, 255, 50, 40);
    bg = map(x, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    rect(myX, myY, myWidth, myHeight);
  }
    
    
    
    
    
    
   else {
    //rotationX, rotationY
    const dx = constrain(rotationY, -4, 4);
    const dy = constrain(rotationX, -4, 4);
    x += dx;
    y += dy;
    // zodat het binnen het scherm blijft
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 40);
    let to = color(90, 255, 50, 40);
    bg = map(x, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x, y, 60, 120);
  }
}
