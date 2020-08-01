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

function createTrail(eObject){
  let xCoordinate = xCoordinateOf(eObject);
  let yCoordinate = yCoordinateOf(eObject);

  let trailElement = createTrailElement();

  window.setTimeout(assignCoordinates(trailElement, xCoordinate, yCoordinate), 500);
}
