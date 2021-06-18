let x3, y3;

function thirdSlang() {
  if (on) {
    //rotationX, rotationY
    const dx = constrain(rotationY, -4, 4);
    const dy = constrain(rotationX, -4, 4);
    x3 += dx;
    y3 += dy;
    // zodat het binnen het scherm blijft
    x3 = constrain(x3, 0, width);
    y3 = constrain(y3, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 40);
    let to = color(90, 255, 50, 40);
    bg = map(x3, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x3, y3, 150, 150);
  } else {
    //rotationX, rotationY
    const dx = constrain(rotationY, -4, 4);
    const dy = constrain(rotationX, -4, 4);
    x3 += dx;
    y3 += dy;
    // zodat het binnen het scherm blijft
    x3 = constrain(x3, 0, width);
    y3 = constrain(y3, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 40);
    let to = color(90, 255, 50, 40);
    bg = map(x3, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    rect(x3-75 , y3-40, 150, 80);
  }
}
