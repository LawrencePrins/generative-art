let x4, y4;

function fourthSlang() {

  
  if (on) {
    //rotationX, rotationY
    const dx = constrain(rotationX, -3, 3);
    const dy = constrain(rotationY, -3, 3);
    x4 += dx;
    y4 += dy;
    // zodat het binnen het scherm blijft
    x4 = constrain(x4, 0, width);
    y4 = constrain(y4, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 60);
    let to = color(90, 255, 50, 60);
    bg = map(x4, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    rect(x4-25, y4-50, 50, 100);
  } else {
    //rotationX, rotationY
    const dx = constrain(rotationY, -3, 3);
    const dy = constrain(rotationX, -3, 3);
    x4 += dx;
    y4 += dy;
    // zodat het binnen het scherm blijft
    x4 = constrain(x4, 0, width);
    y4 = constrain(y4, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 252, 219, 60);
    let to = color(189, 240, 233, 60);
    bg = map(x4, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x4 , y4 , 100, 100);
  }
}
