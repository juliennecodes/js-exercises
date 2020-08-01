let field = document.querySelector(".jsField");

field.addEventListener("mousemove", createTrail);

function xCoordinateOf(eObject){
  return eObject.offsetX;
}

function yCoordinateOf(eObject){
  return eObject.offsetY;
}

function createTrailElement(){
  let trailElement = document.createElement("img");
  trailElement.src = "images/dot.svg";
  trailElement.classList.add("jsTrailElement");
  return trailElement;
}


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
