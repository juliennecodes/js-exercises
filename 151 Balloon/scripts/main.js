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
  balloonSize *= 1.10;
  balloon.style.fontSize = `${balloonSize}px`;

}

function deflate(){
  balloonSize *= .90;
  balloon.style.fontSize = `${balloonSize}px`;
}

function pop(){
  balloon.innerHTML = "&#128165;";
}
