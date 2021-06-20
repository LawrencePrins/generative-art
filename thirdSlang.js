let x3, y3;

function thirdSlang() {
  if (on) {
    //rotationX, rotationY
    const dx = constrain(rotationY, -3, 3);
    const dy = constrain(rotationX, -3, 3);
    x3 += dx;
    y3 += dy;
    // zodat het binnen het scherm blijft
    x3 = constrain(x3, 0, width);
    y3 = constrain(y3, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(255, 255, 50, 60);
    let to = color(0, 150, 0, 60);
    bg = map(x3, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x3, y3, 100, 100);
  } else {
    //rotationX, rotationY
    const dx = constrain(rotationY, -3, 3);
    const dy = constrain(rotationX, -3, 3);
    x3 += dx;
    y3 += dy;
    // zodat het binnen het scherm blijft
    x3 = constrain(x3, 0, width);
    y3 = constrain(y3, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(90, 255, 50, 60);
    let to = color(0, 255, 255, 60);
    bg = map(x3, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    rect(x3-50 , y3-50 , 100, 100);
  }
}
