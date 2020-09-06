let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");
// can you have more than one context object in a canvas?

class Box{
  constructor(startX, startY, width, height){
    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
  }

  static create(startX, startY, width, height){
    return new Box(startX, startY, width, height);
  }
}

let box = Box.create(20, 20, 320, 320);

console.log(box);

function displayBox(box){
  // let cx = canvas.getContext("2d");
  cx.beginPath();
  cx.moveTo(box.startX, box.startY);
  cx.lineTo(box.startX, box.height);
  cx.lineTo(box.width, box.height);
  cx.lineTo(box.width, box.startY);
  cx.closePath();
  cx.stroke();
}

displayBox(box);

class Ball{
  constructor(centerX, centerY, size){
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

  static create(positionX, positionY, size){
    return new Ball(positionX, positionY, size);
  }

  redraw(positionX, positionY, size){
    this.remove();
    // return new Ball(positionX, positionY, this.size);
    // is *this* still available after it gets removed?
    return new Ball(positionX, positionY, size);
  }
}

// let ballA = Ball.create(50, 320, 50);
// let ballB = Ball.create(300, 245, 100);
let ballA = Ball.create(50, 295, 50);

function displayBall(ball){
  // let cx = canvas.getContext("2d");
  cx.beginPath();
  cx.arc(ball.centerX , ball.centerY, ball.radius, 0, 2 * Math.PI);
  cx.fillStyle = "black";
  cx.fill();
}

// displayBall(ballA);
// displayBall(ballB);
displayBall(ballA);

//so you'll have two parters for animation
//one for display
//one for changing the position?

function moveBall(ball, xMovement, yMovement){
  let newCenterX = ball.centerX + xMovement;
  let newCenterY = ball.centerY + yMovement;
  return Ball.create(newCenterX, newCenterY, ball.size);
}

let movedBallA = moveBall(ballA, 50, 50);
displayBall(movedBallA);

//how do you remove previous drawing? so you can display a new one?
//------------------------------------------------------------------------------
