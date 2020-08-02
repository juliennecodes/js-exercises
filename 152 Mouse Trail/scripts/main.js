let field = document.querySelector(".jsField");

field.addEventListener("mousemove", createTrail);
let previousX = 0;
let previousY = 0;
function createTrail(eObject){
  let xCoordinate = xCoordinateOf(eObject);
  let yCoordinate = yCoordinateOf(eObject);

  if ((Math.abs(xCoordinate - previousX) > 10 || Math.abs(yCoordinate - previousY) > 10)) {
    let trailElement = createTrailElement();
    assignCoordinates(trailElement, xCoordinate, yCoordinate);
    document.body.appendChild(trailElement);
    window.setTimeout(() => updateAlphaOf(trailElement), 50);
    previousX = xCoordinate;
    previousY = yCoordinate;
  }
}

function updateAlphaOf(trailElement) {
  let opacity = trailElement.style.opacity;
  opacity = opacity - 0.1;
  trailElement.style.opacity = `${opacity}`;
  if (trailElement.style.opacity > 0) {
    window.setTimeout(() => updateAlphaOf(trailElement), 50);
  } else {
    document.body.removeChild(trailElement);
  }
}

function xCoordinateOf(eObject){
  return eObject.pageX;
}

function yCoordinateOf(eObject){
  return eObject.pageY;
}

function createTrailElement(){
  let trailElement = document.createElement("img");
  trailElement.src = "images/dot.svg";
  trailElement.classList.add("jsTrailElement");
  trailElement.style.opacity = 1;
  return trailElement;
}

function assignCoordinates(element, xCoordinate, yCoordinate){
  element.style.left = `${xCoordinate}px`;
  element.style.top = `${yCoordinate}px`;
}
