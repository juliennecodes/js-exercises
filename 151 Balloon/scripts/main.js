// let balloon = document.querySelector(".jsBalloon");
// let body = document.body;
//
// window.addEventListener("keydown", modifyBalloon);
//
// function modifyBalloon(e){
//   if (e.key === "ArrowUp") inflate();
//   if (e.key === "ArrowDown") deflate();
// }
//
// function inflate(){
//   // console.log("inflate"); //okay so event listener works
//
//   //increase size by 10%
//   //get current size
//   // let balloonSize = balloon.style.fontSize;
//   //multiply current size by 110%
//   //assign new size to font size
// }
//
// function deflate(){
//   // console.log("deflate");
//   //decrease size by 10%
//   //get current size
//   //multiply current size by 90%
//   //assign new size to font size
//
// }
//
// //problem
// //getting the value of the font size is more complicated than I first thought
// //why is it returning a string?
// //and what is the hint about setting the font size property to the parent? why not just the element itself?
//
// //solution is getComputedStyle(element)?
// //How was I supposed to know that?!
//
// window.getComputedStyle(balloon.style.fontSize);
// //error - getComputedStyle argument has to be an element
// //returns an object with properties as numbers, whose values are property names?
//
// let balloonProperties = window.getComputedStyle(balloon);
// balloonProperties;
// //okay, so this is just returning the string of the property name
// //how is that helpful?
//
// balloonProperties.getPropertyValue("font-size");
// //oh what
// //so the balloon properties is an object with numbers for properties
// //and the value of those number properties are objects and not just strings?
//
// //ok so first and foremost, I have to get the current font size
// //however, it is in string right now
// //so I can't really add to the numerical value
//
// //I don't really know how it works but parseInt is the answer?
// //what's a radix?
//
// //maybe have provision for the length of the string pixel measurement
// //16px base is 10, but with 1, it is NaN, with 100, it is NaN
//

//------------------------------------------------------------------------------
//okay, easy solution is to set the font size to javascript

let balloon = document.querySelector(".jsBalloon");
let balloonSize = 16;
balloon.style.fontSize = `${balloonSize}px`;

window.addEventListener("keydown", modifyBalloon);

function modifyBalloon(event){
  if(balloonSize < 24) {
    if(event.key === "ArrowUp"){
      event.preventDefault();
      inflate();
    }

    if(event.key === "ArrowDown"){
      event.preventDefault();
      deflate(event);
    }
  }

  else pop();
}

function inflate(){
  // console.log("inflate");
  balloonSize *= 1.10;
  console.log(`${balloon.style.fontSize}`);
  balloon.style.fontSize = `${balloonSize}px`;

}

function deflate(){
  // console.log("deflate");
  balloonSize *= .90;
  balloon.style.fontSize = `${balloonSize}px`;
}

function pop(){
  balloon.innerHTML = "&#128165;";
}

//Question, I had in my code that if the balloonSize is less than 24
//call the inflate option, which it does, but that inflate function
//pushes it over the edge
//is the conditional check happening throughout? I thought it was just
//a one moment check then proceed to your code,
//not a constant monitor?

//oh nevermind, it does do a check and the code proceeds
//the last size of the balloon is 25 even though the check is on 24
