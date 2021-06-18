let x2, y2;

function secondSlang() {
  let x, y;
  
  if (on) {
    //rotationX, rotationY
    const dx = constrain(rotationY, -4, 4);
    const dy = constrain(rotationX, -4, 4);
    x2 += dx;
    y2 += dy;
    // zodat het binnen het scherm blijft
    x2 = constrain(x2, 0, width);
    y2 = constrain(y2, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 40);
    let to = color(90, 255, 50, 40);
    bg = map(x2, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x2, y2, 50, 150);
  } else {
    //rotationX, rotationY
    const dx = constrain(rotationY, -4, 4);
    const dy = constrain(rotationX, -4, 4);
    x2 += dx;
    y2 += dy;
    // zodat het binnen het scherm blijft
    x2 = constrain(x2, 0, width);
    y2 = constrain(y2, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 150, 255, 40);
    let to = color(90, 255, 50, 40);
    bg = map(x2, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x2 , y2 , 150, 150);
  }
}
