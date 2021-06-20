let button;
let permissionGranted = false;
let on = false;
let kleur;
let bg = 0;
var food;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // random positie van slang
  x = floor(random(width));
  y = floor(random(height));
  
  x2 = floor(random(width));
  y2 = floor(random(height));
  
  x3 = floor(random(width));
  y3 = floor(random(height));
  
  x4 = floor(random(width));
  y4 = floor(random(height));
  
  food = new Food();
  food.setSize(25,25);
  food.create();

  // DeviceOrientationEvent, DeviceMotionEvent, als dit bestaat dan weten we dat de user ios 13 gebruikt
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission == "function"
  ) {
    // ios 13+ device
    background(46, 46, 45);
    textSize(128);
    textAlign(CENTER,TOP);
    fill(255,255,255);
    text("🧩Puzzel!", 0, 100, width);
    
    textSize(38);
    textAlign(CENTER, CENTER);
    fill(255,255,255);
    text("Navigeer de juiste slangvorm naar het snoepje door je telefoon te bewegen!", width/2-645/2, 450, [645]);
   
        
    textSize(31);
    textAlign(CENTER, CENTER);
    fill(255,255,255);
    textStyle(ITALIC);
    text("Tip: Tik om van vorm te veranderen, er zijn meerdere slangen", width/2-600/2, 575, [600]);
    
    // creation en styling button
    button = createButton("Klik hier om te starten!");
    button.style("font-size", "24px");
    button.center();
    button.mousePressed(requestAccess);
  } else {
    // geen ios 13+ device, background rood
    background(214, 32, 32);
    textSize(76);
    textAlign(CENTER,TOP);
    fill(255,255,255);
    text("❌HELAAS!", 0, 100, width);
    
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255,255,255);
    text("Geen gyroscope gedetecteerd.", width/2-400/2, 350, [400]);
    
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255,255,255);
    text("Open de browser op je telefoon en probeer opnieuw.", width/2-350/2, 450, [350]);
  }
}

//functie die aangeroepen wordt wanneer gebruiker op de button klikt
function requestAccess() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      permissionGranted = true;
      background(46, 46, 45);
      
    } else {
      textSize(39);
      textAlign(CENTER, TOP);
      fill(214, 32, 32);
      text("Je hebt de toegang afgewezen! Sluit browser compleet af en probeer opnieuw", width/2-500/2, 650, [510]);
    }
    // haalt button weg na het klikken
    button.remove();
  });
}

function mousePressed() {
  if (on) {
    on = false;
  } else {
    on = true;
  }
}

function draw() {
  if (permissionGranted) {
    mainSlang();
    secondSlang();
    thirdSlang();
    fourthSlang();
    food.display();  
    }
}

// colorpicker (bron: https://editor.p5js.org/JSproductions/sketches/Syzi1LGXm)
// bron https://editor.p5js.org/aferriss/sketches/H1oXWPu5G