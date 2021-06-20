let x2, y2;

function secondSlang() {

  
  if (on) {
    //rotationX, rotationY
    const dx = constrain(rotationX, -3, 3);
    const dy = constrain(rotationY, -3, 3);
    x2 += dx;
    y2 += dy;
    // zodat het binnen het scherm blijft
    x2 = constrain(x2, 0, width);
    y2 = constrain(y2, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(90, 255, 50, 60);
    let to = color(0, 255, 255, 60);
    bg = map(x2, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x2, y2, 50, rotationY*10);
  } else {
    //rotationX, rotationY
    const dx = constrain(rotationX, -3, 3);
    const dy = constrain(rotationY, -3, 3);
    x2 += dx;
    y2 += dy;
    // zodat het binnen het scherm blijft
    x2 = constrain(x2, 0, width);
    y2 = constrain(y2, 0, height);

    // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
    let from = color(0, 255, 255, 60);
    let to = color(255, 255, 0, 60);
    bg = map(x2, 0, width, 0, 1);
    kleur = lerpColor(from, to, bg);
    fill(kleur);
    ellipse(x2 , y2 , 50, 100);
  }
}
