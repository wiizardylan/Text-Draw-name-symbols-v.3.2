
let nameField
// creating global variable to store our text
let mySymbols;
// store an array representation of our text
let mySymbolsArray;
// store the current 'index' of our array of text
let textCounter = 0;
let c;
let nameValue;

function setup() {
  /* var element = document.getElementById('wrapper');
  var positionInfo = element.getBoundingClientRect();
  var height = positionInfo.height;
  var width = positionInfo.width; */

  createCanvas(windowWidth, windowHeight*3);

  nameField = createInput('')
  nameField.attribute('placeholder', 'your name')
  nameField.position(100, 100)
  nameField.size(200, 30)

   c = color(random(0, 255), random(0, 255), random(0, 255))
  
  // changing the framerate so it draws more slowly
  frameRate(10);
  
  background(255);
  

  // horizontally and vertically center the text
  textAlign(CENTER, CENTER);
  
}

function draw() {
  background(220,0);
  
  let x = mouseX;
  let y = mouseY;
  let name = nameField.value();
  storeItem(name,'');
  console.log(getItem(name));
 
  let symbols = '☻♡☮✈︎❤︎𝄞✉✿? ✶❖☛☺☀˚ ^ ❀⋆*°❁⟡☆★♡✴☘︎♬𖦹✦◆︎◈✮✧⊹ ! '
  
    // splitting the text letter-by-letter into an array
    myNameArray = name.split('');
    mySymbolsArray = symbols.split('');

    textArray = name + symbols;
  
  // only when the mouse is pressed...
  if(mouseIsPressed) {
    // draw 'hello world!'
    
    // isolate our rotation to the text being drawn
    push();
    textSize(40);
    // move to our new position
    translate(x, y);
    // rotate random amount around that new position
    rotate(random(-PI,PI));
    fill(getRandomColour())
    // drawing whatever is at the 'textCounter' index of the array
    // using modulus to 'wrap' back around after hitting the end of the text
    text(textArray[textCounter % textArray.length], 0, 0);    
    pop();
    
  }

  // increasing the counter each frame
  // so the next letter can be drawn
  textCounter = textCounter + 1;
  
}

function getRandomColour() {
  const r = random(145, 255);
  const g = random(145, 255);
  const b = random(145, 255);
  return color(r, g, b);
}

function mousePressed() {
  // reset
  textCounter = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}