let field = document.querySelector(".jsField");

field.addEventListener("mousemove", createTrail);

// function createTrail(event){
//   console.log(event.offsetX);
//   //get x coordinate
//   //get y coordinate
//   //arrange for the trailing elements
//     //get trailing elements
//     //assign x and y coordinate to trailing elements
//     //but have it on delay
//
// }

function xCoordinateOf(eObject){
  return eObject.offsetX;
}

function yCoordinateOf(eObject){
  return eObject.offsetY;
}


//Okay, what I'm thinking is that mousemove gives a set of current coordinates
//I think giving the coordinates is easy enough as you just set it on the
//trailing elements properties
//however, how do I do that in delay
//the closer ones to the cursor has less delay
//the further ones have more delay
//timestamp?
//so maybe capture a coordinate in a moment in time?
//and have that coordinate be assigned a second after it originally occurred?
//this would be easier if I understood setTimeout
//oh okay, so I sort of understand the debouncing timeout and how it is
//being cleared, okay, let me try just scheduling a delay

function createTrailElement(){
  let trailElement = document.createElement("img");
  trailElement.src = "images/dot.svg";
  trailElement.classList.add("jsTrailElement");
  return trailElement;
}

//okay, let's start with one trailing element
//so get the information first
//then assign the information 250 milliseconds after

function assignCoordinates(element, xCoordinate, yCoordinate){
  element.style.left = `${xCoordinate}px`;
  element.style.top = `${yCoordinate}px`;
}

// function createTrail(eObject){
//   // console.log(eObject.offsetX);
//
//   //get x coordinate
//   //get y coordinate
//   let xCoordinate = xCoordinateOf(eObject);
//   let yCoordinate = yCoordinateOf(eObject);
//
//   //arrange for the trailing elements
//   let trailElement = createTrailElement();
//   // assignCoordinates(trailElement, xCoordinate, yCoordinate);
//   window.setTimeout(assignCoordinates(trailElement, xCoordinate, yCoordinate), 500);
//     //get trailing elements
//     //assign x and y coordinate to trailing elements
//     //but have it on delay
// }

//testing setTimeout
// window.setTimeout(console.log("cake"), 10000); //I don't think this is working, it's displaying cake instantaneously
//I think the problem is that it doesn't take a function call?
//it takes a function
//but not a function call?

//let's test
function sayCake(){
  console.log("cake");
}

// window.setTimeout(sayCake, 5000);
//perfect
//this works

//now the problem is passing on arguments
//I need this
// assignCoordinates(trailElement, xCoordinate, yCoordinate);
//in setTimeout


function x(wordx){
  let word = wordx;
  setTimeout((word) => console.log(word), 5000 );
  // let word = wordx;
}
