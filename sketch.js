let button;
let permissionGranted = false;
let cx, cy;
let cx2, cy2;
let cx3, cy3;
let cx4, cy4;
let radius = 100;
let kleur;
let bg = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // zorgt voor random positie voor snake2
  cx2 = floor(random(width));
  cy2 = floor(random(height));

  // zorgt voor random positie voor snake3
  cx3 = floor(random(width));
  cy3 = floor(random(height));

  // zorgt voor random positie voor snake4
  cx4 = floor(random(width));
  cy4 = floor(random(height));

  // Start in het midden van het scherm
  cx = width / 2;
  cy = height / 2;

  // DeviceOrientationEvent, DeviceMotionEvent, als dit bestaat dan weten we dat de user ios 13 gebruikt
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission == "function"
  ) {
    // ios 13+ device, background groen
    background(65);
    // creation en styling button
    button = createButton(
      "Klik om toegang tot 'Beweging' en 'Richting' te verlenen"
    );
    button.style("font-size", "24px");
    button.center();
    button.mousePressed(requestAccess);
  } else {
    // geen ios 13+ device, background rood
    background(220, 0, 0);
    textSize(32);
    textAlign(CENTER, TOP);
    text("Geen gyroscope gedetecteerd, open browser op telefoon", 0, 10, width);
  }
}

//functie die aangeroepen wordt wanneer gebruiker op de button klikt
function requestAccess() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      permissionGranted = true;
    } else {
      textSize(39);
      textAlign(CENTER, TOP);
      text("Toegang geannuleerd! Sluit browser compleet af en probeer opnieuw", 0, 10, width);
    }
    // haalt button weg na het klikken
    button.remove();
  });
}

// Dit is de snake
function snake() {
  //rotationX, rotationY
  const dx = constrain(rotationY, -8, 8);
  const dy = constrain(rotationX, -8, 8);
  cx += dx;
  cy += dy;

  // zodat het binnen het scherm blijft
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);

  // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
  let from = color(0, 255, 255, 40);
  let to = color(255, 255, 0, 40);
  bg = map(cx, 0, width, 0, 1);
  kleur = lerpColor(from, to, bg);
  fill(kleur);
  ellipse(cx, cy, 100, 100);
}

// Dit is snake 2
function snake2() {
  //rotationX, rotationY
  const dx = constrain(rotationX, -8, 8);
  const dy = constrain(rotationY, -8, 8);
  cx2 += dx;
  cy2 += dy;

  // zodat het binnen het scherm blijft
  cx2 = constrain(cx2, 0, width);
  cy2 = constrain(cy2, 0, height);

  // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
  let from = color(90, 255, 50, 40);
  let to = color(0, 255, 255, 40);
  bg = map(cx2, 0, width, 0, 1);
  kleur = lerpColor(from, to, bg);
  fill(kleur);
  ellipse(cx2, cy2, 125, 125);
}

// Dit is snake 3
function snake3() {
  //rotationX, rotationY
  const dx = constrain(rotationY, -4, 4);
  const dy = constrain(rotationX, -4, 4);
  cx3 += dx;
  cy3 += dy;

  // zodat het binnen het scherm blijft
  cx3 = constrain(cx3, 0, width);
  cy3 = constrain(cy3, 0, height);

  // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
  let from = color(255, 255, 50, 40);
  let to = color(0, 150, 0, 40);
  bg = map(cx3, 0, width, 0, 1);
  kleur = lerpColor(from, to, bg);
  fill(kleur);
  ellipse(cx3, cy3, 125, 125);
}

// Dit is snake 4
function snake4() {
  //rotationX, rotationY
  const dx = constrain(rotationX, -4, 4);
  const dy = constrain(rotationY, -4, 4);
  cx4 += dx;
  cy4 += dy;

  // zodat het binnen het scherm blijft
  cx4 = constrain(cx4, 0, width);
  cy4 = constrain(cy4, 0, height);

  // kleur change op basis van cx (bron: https://editor.p5js.org/L4W/sketches/ix5VBtvld)
  let from = color(0, 150, 255, 40);
  let to = color(90, 255, 50, 40);
  bg = map(cx4, 0, width, 0, 1);
  kleur = lerpColor(from, to, bg);
  fill(kleur);
  ellipse(cx4, cy4, 100, 100);
}

function draw() {
  if (permissionGranted) {
    snake();
    snake2();
    snake3();
    snake4();
  }
}

// colorpicker (bron: https://editor.p5js.org/JSproductions/sketches/Syzi1LGXm)
