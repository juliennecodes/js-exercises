let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

//TRAPEZOID
function createTrapezoid(x, y, horizontalShift, verticalShift){
  cx.beginPath();
  cx.moveTo(x, y);
  cx.lineTo(x - horizontalShift, y + verticalShift * 3);
  cx.lineTo(x + horizontalShift * 4, y + verticalShift * 3);
  cx.lineTo(x + horizontalShift * 3, y);
  cx.closePath();
  cx.stroke();
}

createTrapezoid(100, 20, 30, 30);
createTrapezoid(100, 400, 10, 20)

//RED DIAMOND
function createDiamond(startPointX, startPointY, horizontalShift, verticalShift, colour = "red"){
    let x = startPointX;
    let y = startPointY;

    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x - horizontalShift, y + verticalShift);
    cx.lineTo(x, y + verticalShift * 2);
    cx.lineTo(x + horizontalShift, y + verticalShift);
    cx.fillStyle = colour;
    cx.fill();
}

createDiamond(200, 10, 50, 20);
createDiamond(200, 200, 50, 50, "blue");

//ZIGZAG
// function createZigZag(x, y){
//   cx.beginPath();
//   cx.moveTo(x, y); //
//   cx.lineTo(x + 50, y + 10); //1
//   cx.lineTo(x, y + 20); //2
//   cx.lineTo(x + 50, y + 30 ); //3
//   cx.lineTo(x, y + 40); //4
//   cx.lineTo(x + 50, y + 50); //5
//   cx.stroke();
// }
//
// createZigZag(150, 10);

function createZigZags(startPointX, startPointY, numberOfZigZags, horizontalShift, verticalShift){
  let x = startPointX;
  let y = startPointY;

  cx.beginPath();
  cx.moveTo(x, y);

  for(let currentZigZagCount = 1; currentZigZagCount <= numberOfZigZags; currentZigZagCount++){
    if (isEven(currentZigZagCount)) {
      cx.lineTo(x, y + verticalShift * currentZigZagCount);
    }

    else {
      cx.lineTo(x + horizontalShift, y + verticalShift * currentZigZagCount);
    }
  }

  cx.stroke();
}

function isEven(x){
  return x % 2 === 0;
}

createZigZags(300, 100, 10, 50, 10);
createZigZags(300, 300, 20, 50, 5);
//STAR
function toRadians(degrees) {
return degrees * Math.PI / 180;
}
// Math.sin(toRadians(180));

function createStar(radius, startX = 500, startY = 50){
  let angle = 0;
  cx.translate(startX, startY); //Oh it affects future context translation even if it is inside a function?
  cx.beginPath();
  cx.moveTo(radius * Math.cos(toRadians(angle)), radius * Math.sin(toRadians(angle)));

  for(let i = 0; i < 8; i++){
    angle+= 45;
    cx.quadraticCurveTo(0, 0, radius * Math.cos(toRadians(angle)), radius * Math.sin(toRadians(angle)) );
  }

  cx.fillStyle = "hsl(41, 100%, 53%)";
  cx.fill();
  cx.translate(-startX, -startY);
  //I guess this works?
  //create a temporary move so that the start point of the shape can remain 0,0?
  //but put it back so future shapes can have a normalized coordinate system?

  //Is it better to create new context objects for each shape or should I keep working on the same context for all created shapes?
}

createStar(50);
createStar(25, 500, 350);
createStar(85, 500, 500);
//how do you create skips in the argument? can you give an argument for first and third but not second?

//SPIRAL
function createSpiral(radius, radiusIncrease, piIncrease, startPointX = 0, startPointY = 0, loops = 50){
  let start = 0;
  let end = 1;

  cx.translate(startPointX, startPointY);

  cx.beginPath();
  for(let i = 0; i < loops; i++){
    cx.arc(100, 100, radius, start, end);
    radius = radius * radiusIncrease;
    start = end;
    end = end * piIncrease;
  }

  cx.stroke();

  cx.translate(-startPointX, -startPointY);
}

// createSpiral(5, 1.1, 1.1);
// createSpiral(1, 1.25, 1.08);
createSpiral(1, 1.05, 1.08, 600, 0);
createSpiral(1, 1.05, 1.08, 600, 200, 100);
createSpiral(2, 1.05, 1.08, 600, 400);
createSpiral(5, 1.1, 1.08, 800, 0);
