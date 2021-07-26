let state = 1;
let speed = 1;
let espeed = 1;
let a = 0;
let b = 0;
let c = 0;


let enemyXspeed;
let enemyYspeed;

let enemyYspeed1;

let enemyXPos = 250;
let enemyYPos = 250;

let enemyYPos1 = 25;

let enemyXdirection = 1;
let enemyYdirection = 1;

let enemyYdirection1 = 1;

let myYPos = 0;
let myXPos = 0;

let enemyTop1, enemyLeft1, enemyRight1, enemyBottom1;

let myRight,
  myLeft,
  myTop,
  myBottom,
  enemyTop,
  enemyLeft,
  enemyRight,
  enemyBottom;

var time = 0;
var milliseconds = 0;
var seconds = 0;

let fail;
let _fail;
let rectstart;

let wall1;
let goal;

class wall {
  constructor(x, y, r, g, b) {
    this.xPos = x;
    this.yPos = y;
    // this.width = w;
    // this.hight = h;
    this.rValue = r;
    this.gValue = g;
    this.bValue = b;
  }
}

// Images and Sounds

let boo;

let boosound;
let startsound;
let deathsound;


function preload() {

boo = loadImage("p5soundimage/boo.png")

boosound = loadSound("p5soundimage/boosound.mp3");
startsound = loadSound("p5soundimage/startsound.mp3");
deathsound = loadSound("p5soundimage/deathsound.mp3");
}

startsound.play();

deathsound.play();

boosound.play();

function setup() {  
  createCanvas(1200, 600);
  background(0);
  rectMode(CENTER);
  
  // goal line
  goal = new wall(1150, 500, 252, 248, 3);
  _goal = new wall(1150, 500, 138, 75, 62);
  __goal = new wall(1150, 500, 41, 179, 154);

  rectstart = new wall(600, 300, 0, 0, 0);
  menub = new wall(450, 380, 255, 255, 255);
  menuc = new wall(600, 380, 255, 255, 255);
  menud = new wall(750, 380, 255, 255, 255);

  // enemy squares for level 1
  enemySquare1 = new wall(200, 150, 255, 255, 0);
  enemySquare2 = new wall(50, 50, 255, 255, 0);
  enemySquare3 = new wall(50, 50, 255, 255, 0);
}
// enemy squares for level 2
// enemySquare1_2 = new wall(200, 150 , 255, 255, 0)
// enemySquare2_2 = new wall(50, 50 , 255, 255, 0)
// enemySquare3_2 = new wall(50, 50 , 255, 255, 0)

function draw() {
  //enemy and player controls
  enemyXPos += enemyXspeed * enemyXdirection;
  enemyYPos += enemyYspeed * enemyYdirection;

  if (enemyXPos < 12.5 || enemyXPos > 800) {
    enemyXdirection *= -1;
  }
  if (enemyYPos < 12.5 || enemyYPos > 587.5) {
    enemyYdirection *= -1;
  }

  // PLAYER
  rect(myXPos, myYPos, 50, 50);

  if (keyIsDown(UP_ARROW)) {
    myYPos -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    myYPos += speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += speed;
  }

  myLeft = myXPos - espeed;
  myRight = myXPos + espeed;
  myTop = myYPos - espeed;
  myBottom = myYPos + espeed;

  enemyLeft = enemyXPos - 25;
  enemyRight = enemyXPos + 25;
  enemyTop = enemyYPos - 25;
  enemyBottom = enemyYPos + 25;

  if (a == 1) {
    window.location.reload();
    a = 0;
  } else if (b == 1) {
    window.location.reload();
    b = 0;
  } else if (c == 1) {
    window.location.reload();
    c = 0;
  }

  if (state == 1) {
    background(255, 0, 0);
    //menu border
    fill(rectstart.rValue, rectstart.gValue, rectstart.bValue);
    rect(rectstart.xPos, rectstart.yPos, 500, 300);

    //level buttons
    fill(menub.rValue, menub.gValue, menub.bValue);
    rect(menub.xPos, menub.yPos, 120, 60);

    fill(menuc.rValue, menuc.gValue, menuc.bValue);
    rect(menuc.xPos, menuc.yPos, 120, 60);

    fill(menud.rValue, menud.gValue, menud.bValue);
    rect(menud.xPos, menud.yPos, 120, 60);

    fill(255, 255, 255);
    textSize(50);
    text("Menu", 550, 200);

    fill(0, 0, 0);
    textSize(25);
    text("Level 1", 410, 390);

    fill(0, 0, 0);
    textSize(25);
    text("Level 2", 560, 390);

    fill(0, 0, 0);
    textSize(25);
    text("Level 3", 705, 390);
  }

  // level 1
  if (state == 2) {
    if (myRight > 1075) {
      fill(0);
      textSize(30);
      text("YOU WON!!", 950, 150);
      milliseconds = millis();
      seconds = milliseconds / 1000;
      if (seconds > 8) {
        state = 1;
        enemyXPos = 250;
        enemyYPos = 250;
        myYPos = 0;
        myXPos = 0;
        a = 1;
      }
    }
    // goal for level 1
    fill(goal.rValue, goal.gValue, goal.bValue);
    rect(goal.xPos, goal.yPos, 100, 1000);

    enemyXspeed = 2;
    enemyYspeed = 1.5;

    background(0, 255, 0, 25);

    //enemy square 1
    rect(enemyXPos, enemyYPos, 25, 25);

    // enemy squares 2
    fill(enemySquare1.rValue, enemySquare1.gValue, enemySquare1.bValue);
    rect(enemySquare1.xPos, enemyYPos1, 50, 50);

    if (enemyYPos1 < 12.5 || enemyYPos1 > 587.5) {
      enemyYdirection1 *= -1;
    }

    enemyYspeed1 = 3;

    enemyYPos1 += enemyYspeed1 * enemyYdirection1;
    //collision
    enemyLeft1 = enemyYPos1 - 25;
    enemyRight1 = enemyYPos1 + 25;
    enemyTop1 = enemyYPos1 - 25;
    enemyBottom1 = enemyYPos1 + 25;


    if (
      myBottom < enemyTop ||
      myRight < enemyLeft ||
      myLeft > enemyRight ||
      myTop > enemyBottom
    ) {
    } else {
      fail = 1;
    }
    
    if (
      myBottom < enemyTop1 ||
      myRight < enemyLeft1 ||
      myLeft > enemyRight1 ||
      myTop > enemyBottom1
    ) {
    } else {
      fail = 1;
    }
    
    if (fail == 1) {
        deathsound.play();
      state = 1;
      message = "Menu";
      myXPos = 380;
      myYPos = 80;
      enemyXPos = 50;
      enemyYPos = 50;
      fail = 0;
    }
  }

  //level 2
   if (state == 3) {
    if (myRight > 1075) {
      fill(230, 54, 128);
      textSize(30);
      text("NICE!!", 950, 150);
      $milliseconds = millis();
      $seconds = $milliseconds / 1000;
    
    if ($seconds > 7) {
      state = 1;
      enemyXPos = 250;
      enemyYPos = 250;
      myYPos = 50;
      myXPos = 50;
      b = 1;
    }
  }
  // goal for level 2
  fill(_goal.rValue, _goal.gValue, _goal.bValue);
  rect(_goal.xPos, _goal.yPos, 100, 1000);

  enemyXspeed = 4;
  enemyYspeed = 3;

  background(0,0, 255, 20);

  rect(enemyXPos, enemyYPos, 25, 25);

  if (
    myBottom < enemyTop ||
    myRight < enemyLeft ||
    myLeft > enemyRight ||
    myTop > enemyBottom
  ) {
  } else {
    _fail = 1;
  }
  if (_fail == 1) {
      deathsound.play();
    state = 1;
    message = "Menu";
    myXPos = 250;
    myYPos = 250;
    enemyXPos = 50;
    enemyYPos = 50;
    _fail = 0;
    }
  }

  //level 3
  else if (state == 4) {
    if (myRight > 1075) {
        boosound.play();
        image(boo, 100, 50, 1200, 600);
      fill(250);
      textSize(30);
      text("YOU MADE IT!!", 950, 150);
      $$milliseconds = millis();
      $$seconds = $$milliseconds / 1000;
      if ($$seconds > 8){
        state = 1;
        enemyXPos = 250;
        enemyYPos = 250;
        myYPos = 50;
        myXPos = 50;
        c=1;
      }
    }

    fill(__goal.rValue, __goal.gValue, __goal.bValue);
    rect(__goal.xPos, __goal.yPos, 100, 1000);
    
    enemyXspeed = 5;
    enemyYspeed = 8;

    background(0, 10);

    rect(enemyXPos, enemyYPos, 25, 25);

  
    // creating a conditional if enemy square hits our square
    // then it would go back to level 1

    if (
      myBottom < enemyTop ||
      myRight < enemyLeft ||
      myLeft > enemyRight ||
      myTop > enemyBottom
    ) {
    } else {
      fail = 1;
    }
    if (fail == 1) {
        deathsound.play();
      state = 1;
      message = "Menu";
      myXPos += 50;
      myYPos += 50;
      enemyXPos = 50;
      enemyYPos = 50;
      fail = 0;
    }
  }
}
  
function mouseClicked() {
  if (mouseX > 390 && mouseX < 510 && mouseY < 410 && mouseY > 350) {
    state = 2;
    speed = 4;
    espeed = 4;
    message = "Level 1";
  } 
  else if (mouseX > 540 && mouseX < 660 && mouseY < 410 && mouseY > 350) {
    state = 3;
    speed = 5;
    espeed = 5;
    message = "Level 2";
  } 
  else if (mouseX > 690 && mouseX < 810 && mouseY < 410 && mouseY > 350) {
    state = 4;
    speed = 6;
    espeed = 6;
    message = "Level 3";
  }
}
