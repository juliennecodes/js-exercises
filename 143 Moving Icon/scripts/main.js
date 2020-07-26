//so request animation frame involves,
//elapsed time - .25 seconds
//movement of the element - 50px to the right
//movement of the element has to incorporate timeout i.e  50px / .25 seconds

let android = document.querySelector(".jsAndroid");
let apple = document.querySelector(".jsApple");
//------------------------------------------------------------------------------
let timeZero;
let elapsedTime;
let movement;
function moveRight(timeStamp){
  if (timeZero === undefined){
    timeZero = timeStamp;
  }

  elapsedTime = timeStamp - timeZero;
  //this is used to calculate how much to move the element

  //at a rate of 32px / 1000ms
  movement = 32 * (elapsedTime / 1000);
  android.style.left = `${movement}px`;

  if(elapsedTime < 3000){
    window.requestAnimationFrame(moveRight);
  }
}

window.requestAnimationFrame(moveRight);
//------------------------------------------------------------------------------
// let timeZero;
// let elapsedTime;
// let movement;
// function moveRight(timeStamp){
//   if (timeZero === undefined){
//     timeZero = timeStamp;
//   }
//
//   elapsedTime = timeStamp - timeZero;
//   //this is used to calculate how much to move the element
//
//   //at a rate of 64px / 1000ms
//   movement = 64 * (elapsedTime / 1000);
//   apple.style.left = `${movement}px`;
//
//   if(elapsedTime < 3000){
//     window.requestAnimationFrame(moveRight);
//   }
// }
//
// window.requestAnimationFrame(moveRight);

//------------------------------------------------------------------------------
// let timeZero;
// let elapsedTime;
// let movement;
// function moveDiagonal(timeStamp){
//   if (timeZero === undefined){
//     timeZero = timeStamp;
//   }
//
//   elapsedTime = timeStamp - timeZero;
//   //this is used to calculate how much to move the element
//
//   //at a rate of 64px / 1000ms
//   movement = 64 * (elapsedTime / 1000);
//   apple.style.bottom = `${movement}px`;
//   apple.style.left = `${movement}px`;
//
//   if(elapsedTime < 3000){
//     window.requestAnimationFrame(moveDiagonal);
//   }
// }
//
// window.requestAnimationFrame(moveDiagonal);
//------------------------------------------------------------------------------
// let timeZero;
// let elapsedTime;
// let movement;
// function moveDiagonal(timeStamp){
//   if (timeZero === undefined){
//     timeZero = timeStamp;
//   }
//
//   elapsedTime = timeStamp - timeZero;
//   //this is used to calculate how much to move the element
//
//   //at a rate of 10 revolutions / 1000ms
//   movement = 64 * (elapsedTime / 1000);
//   movement = Math.sin()
//   apple.style.bottom = `${movement}px`;
//   apple.style.left = `${movement}px`;
//
//   if(elapsedTime < 3000){
//     window.requestAnimationFrame(moveDiagonal);
//   }
// }
//
// window.requestAnimationFrame(moveDiagonal);
