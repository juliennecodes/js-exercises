let canvas = document.querySelector("canvas");
// let cx = canvas.getContext("2d");

// can you have more than one context object in a canvas?

// function createBox(startX, startY, width, height){
//   let cx = canvas.getContext("2d");
//   cx.beginPath();
//   cx.moveTo(startX, startY);
//   cx.lineTo(startX, height);
//   cx.lineTo(width, height);
//   cx.lineTo(width, startY);
//   cx.closePath();
//   cx.stroke();
//
// }
//
// // createBox(0, 0, 50, 100);
// createBox(20, 20, 320, 320);


//lesson - I think it's better to use an object so you don't have to keep track of what values you gave to a function call.
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
  let cx = canvas.getContext("2d");
  cx.beginPath();
  cx.moveTo(box.startX, box.startY);
  cx.lineTo(box.startX, box.height);
  cx.lineTo(box.width, box.height);
  cx.lineTo(box.width, box.startY);
  cx.closePath();
  cx.stroke();
}

displayBox(box);
