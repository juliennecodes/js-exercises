let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

//------------------------------------------------------------------------------
//OBJECTS
class Box {
  constructor(startX, startY, width, height) {
    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
  }

  static create(startX, startY, width, height) {
    return new Box(startX, startY, width, height);
  }
}

class Ball {
  constructor(centerX, centerY, size) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.size = size;
    this.radius = size / 2;
    this.top = centerY - this.radius;
    this.bottom = centerY + this.radius;
    this.left = centerX - this.radius;
    this.right = centerX + this.radius;
    this.speedX = 0;
    this.speedY = 10;
  }

  static create(positionX, positionY, size) {
    return new Ball(positionX, positionY, size);
  }
}
//------------------------------------------------------------------------------
let boxA = Box.create(20, 20, 320, 320);
let ballA = Ball.create(50, 295, 50);
//------------------------------------------------------------------------------
//DISPLAYS & ANIMATION
// function updateDisplay(box, ball) {
//   cx.clearRect(box.startX, box.startY, box.width, box.height);
//   displayBox(box);
//   displayBall(ball);
// }
//
// function displayBox(box) {
//   cx.beginPath();
//   cx.moveTo(box.startX, box.startY);
//   cx.lineTo(box.startX, box.height);
//   cx.lineTo(box.width, box.height);
//   cx.lineTo(box.width, box.startY);
//   cx.closePath();
//   cx.stroke();
// }
//
// function displayBall(ball) {
//   cx.beginPath();
//   cx.arc(ball.centerX, ball.centerY, ball.radius, 0, 2 * Math.PI);
//   cx.fillStyle = "black";
//   cx.fill();
// }
//
// function moveBall(ball, timePassed) {
//   let xMovement = ball.speedX * timePassed;
//   let yMovement = ball.speedY * timePassed;
//   let newCenterX = ball.centerX + xMovement;
//   let newCenterY = ball.centerY + yMovement;
//   return Ball.create(newCenterX, newCenterY, ball.size);
// }


//------------------------------------------------------------------------------
//starts up the display
displayBox(boxA);
displayBall(ballA);

//testing animation
// let movedBallA = moveBall(ballA);
// updateDisplay(boxA, movedBallA);

//------------------------------------------------------------------------------
//so how do you add movement
//and how is that movement scaled by incorporating time passed?

//------------------------------------------------------------------------------
//ANIMATION STUFF
//okay, so let's think things through
//so requestAnimationFrame
//performs an animation
//calls a specified function to update an animation before a repaint

let lastTime = null;

function frame(time) {
  if (lastTime != null) {
    updateAnimation(Math.min(100, time - lastTime) / 1000);
    //so this function should move the object
    //is it also responsible for the display changing?
    //how can I pass the box and the ball?
    //updateAnimation should move the ball given the time argument

  }
  lastTime = time;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function updateAnimation(timePassed) {
  let newBall = moveBall(timePassed, ball);
  //how do you pass the ball?

  updateDisplay(boxA, newBall);
}

function updateDisplay(box, ball) {
  cx.clearRect(box.startX, box.startY, box.width, box.height);
  displayBox(box);
  displayBall(ball);
}

function displayBox(box) {
  cx.beginPath();
  cx.moveTo(box.startX, box.startY);
  cx.lineTo(box.startX, box.height);
  cx.lineTo(box.width, box.height);
  cx.lineTo(box.width, box.startY);
  cx.closePath();
  cx.stroke();
}

function displayBall(ball) {
  cx.beginPath();
  cx.arc(ball.centerX, ball.centerY, ball.radius, 0, 2 * Math.PI);
  cx.fillStyle = "black";
  cx.fill();
}

function moveBall(ball, timePassed) {
  let xMovement = ball.speedX * timePassed;
  let yMovement = ball.speedY * timePassed;
  let newCenterX = ball.centerX + xMovement;
  let newCenterY = ball.centerY + yMovement;
  return Ball.create(newCenterX, newCenterY, ball.size);
}
