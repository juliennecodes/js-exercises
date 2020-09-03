let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

//TRAPEZOID
// cx.beginPath();
// cx.moveTo(20, 20);
// cx.lineTo(0, 50);
// cx.lineTo(80, 50);
// cx.lineTo(60, 20);
// cx.closePath()
// cx.stroke();

// function createTrapezoid(x, y){
//   cx.beginPath();
//   cx.moveTo(x, y);
//   cx.lineTo(x - 15, y + 45);
//   cx.lineTo(x + 60, y + 45);
//   cx.lineTo(x + 45, y);
//   cx.closePath();
//   cx.stroke();
// }

function createTrapezoid(x, y, horizontalShift, verticalShift){
  cx.beginPath();
  cx.moveTo(x, y);
  cx.lineTo(x - horizontalShift, y + verticalShift * 3);
  cx.lineTo(x + horizontalShift * 4, y + verticalShift * 3);
  cx.lineTo(x + horizontalShift * 3, y);
  cx.closePath();
  cx.stroke();
}

createTrapezoid(20, 20, 30, 30);
createTrapezoid(100, 400, 10, 20)

//RED DIAMOND
// function createDiamond(x, y){
//   cx.beginPath();
//   cx.moveTo(x, y);
//   cx.lineTo(x - 20, y + 20);
//   cx.lineTo(x, y + 40);
//   cx.lineTo(x + 20, y + 20);
//   cx.fillStyle = "red";
//   cx.fill();
// }

// function createDiamond(x, y, shift){
//   cx.beginPath();
//   cx.moveTo(x, y);
//   cx.lineTo(x - shift, y + shift);
//   cx.lineTo(x, y + shift * 2);
//   cx.lineTo(x + shift, y + shift);
//   cx.fillStyle = "red";
//   cx.fill();
// }

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

createDiamond(100, 10, 50, 20);

createDiamond(300, 200, 50, 50, "blue");

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

// function createZigZag(x, y, n){
//   cx.beginPath();
//   cx.moveTo(x, y);
//
//   for (let i = 0; i < n; i++){
//     if (i % 2 === 0){
//       cx.lineTo(x + 50, y+=10);
//     }
//
//     else {
//       cx.lineTo(x, y+=10);
//     }
//
//     n++;
//   }
//   cx.stroke();
// }

// createZigZag(150, 10, 5);

//SPIRAL
// function createSpiral(){
//   cx.beginPath();
//
// }

//STAR
//point is at the center
//it starts at the top, then go counterclockwise
//2 pi r is a circle
//so pi r is a half circle
//go at 2 pi r / 8
//each point is 2 pi r away from another point
//how does that translate to x y coordinates though?

//supply the function with a starting point
//from that starting point, go to the next point which is 2 pi r away
//this happens seven times so start at 0 and while it is less than 8
//fillStyle "yellow"
//fill()

//Math.cos( point in a circle in 2 * Math.PI language) - yields x coordinate
//Math.sin( point in a circle in 2 * Math.PI language) - yields y coordinate
//each point in a circle is one eight of a circle
//therefore increase the point by one eight of a circle, cosine will give x, sine will give y

//actually, let's do a practice run first

// cx.beginPath();
// cx.moveTo(0, 0);
// cx.lineTo(Math.cos(.25 * Math.PI), Math.sin(.25 * Math.PI));
// cx.lineTo(Math.cos(.5 * Math.PI), Math.sin(.5 * Math.PI));
// cx.lineTo(Math.cos(.75 * Math.PI), Math.sin(.75 * Math.PI));
// cx.lineTo(Math.cos(Math.PI), Math.sin(Math.PI));
// cx.lineTo(Math.cos(1.25 * Math.PI), Math.sin(1.25 * Math.PI));
// cx.lineTo(Math.cos(1.5 * Math.PI), Math.sin(1.5 * Math.PI));
// cx.lineTo(Math.cos(1.75 * Math.PI), Math.sin(1.75 * Math.PI));
// cx.lineTo(Math.cos(2 * Math.PI), Math.sin(2 * Math.PI));
// cx.stroke();

//how do you get an x coordinate from an angle?

// function createStar(points){
// let currentCos = 0;
// let currentSine = 0;
//
// cx.beginPath();
// cx.moveTo(300, 20);
//
// for(let i = 0; i < points; i++){
//
// }
//
// }

//ACTUAL STAR
function toRadians(degrees) {
return degrees * Math.PI / 180;
}
// Math.sin(toRadians(180));

// function createStar(radius, startX = 250, startY = 50){
//   let angle = 0;
//   cx.translate(startX, startY); //Oh it affects future context translation even if it is inside a function?
//   cx.beginPath();
//   cx.moveTo(radius * Math.cos(toRadians(angle)), radius * Math.sin(toRadians(angle)));
//
//   for(let i = 0; i < 8; i++){
//     angle+= 45;
//     cx.quadraticCurveTo(0, 0, radius * Math.cos(toRadians(angle)), radius * Math.sin(toRadians(angle)) );
//   }
//
//   cx.fillStyle = "hsl(41, 100%, 53%)";
//   cx.fill();
//
// }

// //this looks messed up, how do you create a starting point without translating the coordinate system?
// function createStar(radius, startX = 250, startY = 50){
//   let angle = 0;
//   cx.beginPath();
//   cx.moveTo(startX, startY);
//
//   for(let i = 0; i < 8; i++){
//     angle+= 45;
//     cx.quadraticCurveTo(0, 0, radius * Math.cos(toRadians(angle)), radius * Math.sin(toRadians(angle)) );
//   }
//
//   cx.fillStyle = "hsl(41, 100%, 53%)";
//   cx.fill();
//
// }

function createStar(radius, startX = 250, startY = 50){
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
}

createStar(50);
createStar(25, 350, 350);
createStar(85, 400, 100);

//SPIRAL
//so spiral creates a circle
//but the radius keeps increasing incrementally so it doesn't close
//this creates a circle

// cx.beginPath();
// cx.arc(100, 100, 25, 0, 6.25);
// center=(50,50) radius=40 angle=0 to 7
// //how is 6.25 an angle, 2 pi r is 360?
// cx.stroke();
//don't forget the stroke, previous method is just the skeleton, it doesn't draw it yet
//like this is where the shape would be if it had stroke

// function createSpiral(){
//   let radius = 1;
//   let start = 0;
//   let end = .35;
//
//   cx.translate(500, 500);
//   cx.beginPath();
//   cx.moveTo(0, 0);
//
//   for(let i = 0; i < 100; i++){
//     cx.arc(0, 0, radius, start, end);
//
//
//   }
//
//   cx.stroke();
// }
//
// createSpiral()

// cx.beginPath();
// cx.arc(100, 100, 25, 0, 1);
// cx.arc(100, 100, 25.1, 1, 2);
// cx.arc(100, 100, 25.2, 2, 3);
// cx.stroke();

//increase radius incrementally
//make previous endpoint be the new startpoint

// function createTightSpiral(){
//   let radius = 1;
//   let start = 0;
//   let end = 1;
//   let increment = 1;
//
//   cx.beginPath();
//
//
//   for(let i = 0; i < 100; i++){
//     console.log(`${i}: ${radius}`);
//     console.log(`${i}: ${start}`);
//     console.log(`${i}: ${end}`);
//     cx.arc(100, 100, radius, start, end);
//     radius = radius + .5;
//     start = end;
//     end = end + increment;
//
//   }
//
//   cx.stroke();
// }
//
// createTightSpiral();


// function createSpiral(){
//   let radius = 1;
//   let start = 0;
//   let end = 1;
//   let increment = .2;
//
//   cx.beginPath();
//   for(let i = 0; i < 100; i++){
//     console.log(`${i}: ${radius}`);
//     console.log(`${i}: ${start}`);
//     console.log(`${i}: ${end}`);
//     cx.arc(100, 100, radius, start, end);
//     radius = radius + increment;
//     start = end;
//     end = end + increment;
//   }
//
//   cx.stroke();
// }

function createSpiral(radius, radiusIncrease, piIncrease){
  let start = 0;
  let end = 1;

  cx.beginPath();
  for(let i = 0; i < 50; i++){
    cx.arc(100, 100, radius, start, end);
    radius = radius * radiusIncrease;
    start = end;
    end = end * piIncrease;
  }

  cx.stroke();
}

createSpiral(5, 1.1, 1.1);
