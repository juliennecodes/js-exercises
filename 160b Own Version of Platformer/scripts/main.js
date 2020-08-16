let characterMap1 = `
############
#..........#
#....@...#.#
############
`;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 0.5;
    this.height = 1;
  }

  static create(x, y){
    return new Player(x,y);
  }
}

let characterLegends = {
  ".": "empty",
  "#": "wall",
  "@": Player,
  // "o" : Coin
}

//------------------------------------------------------------------------------
// let rows = characterMap1.trim().split("\n").map(row => [...row]);
class World {
  constructor(map) {
    this.rows = map.trim().split("\n").map(row => [...row]);
    this.width = this.rows[0].length;
    this.height = this.rows.length;
    this.player = [];
  }

  get createWordMap() {
    return this.rows.map((row, y) => row.map(
        (token, x) => {
          for (let characterLegendsProperty of Object.keys(characterLegends)) {
            if (token === characterLegendsProperty) {
              //characterLegends[characterLegendsProperty] is type
              if (typeof characterLegends[characterLegendsProperty] === "string") {
                return characterLegends[characterLegendsProperty];
              } else {
                //revisit this
                // this.player.push(playercharacterLegends[characterLegendsProperty].create(x, y));
                this.player.push(Player.create(x, y));
                //later, if you add more types, add checks to make sure that it is a player, or a lava, or a coin and create instances appropriately
                return "empty";
              }
            }
          } //for
        }
      ) //row.map
    ) //this.rows map
  } //createTypeMap

}

let scale = 24;

function createElementGridRepresentation(world){
  let grid = document.createElement("table");
  grid.style.width = `${world.width * scale}px`;
  let wordMap = world.createWordMap;

  wordMap.map(row => {
      let wordMapRow = document.createElement("tr");
      wordMapRow.style.height = `${scale}px`;
      grid.appendChild(wordMapRow);
      row.map(type => {
          let element = createElementWithClassName("td", type);
          wordMapRow.appendChild(element);
        } //type
      ) //row.map
    } //row
  ) //wordMap.map
  return grid;
}

function createElementWithClassName(elementType, className) {
  let element = document.createElement(elementType);
  element.classList.add(className);
  return element;
}

function createDisplayContainer(world) {
  let display = document.createElement("div");
  display.classList.add("jsDisplay");
  display.style.width = `${world.width * scale}px`;
  display.style.height = `${world.height * scale}px`;
  return display;
}


let world1 = new World(characterMap1);
let world1GridRepresentation =  createElementGridRepresentation(world1);

let worldContainer = createDisplayContainer(world1);
worldContainer.appendChild(world1GridRepresentation);
document.querySelector("main").appendChild(worldContainer);

//------------------------------------------------------------------------------
function putPlayerInWorld(world){
  let player = world.player[0];
  let playerRepresentation = createElementWithClassName("div", "player");
  playerRepresentation.style.width = `${player.width * scale}px`;
  playerRepresentation.style.height = `${player.height * scale}px`;
  playerRepresentation.style.top = `${player.y * scale}px`;
  playerRepresentation.style.left = `${player.x * scale}px`;
  playerRepresentation.style.zIndex = "1";
  world1GridRepresentation.appendChild(playerRepresentation);
}

putPlayerInWorld(world1);

//------------------------------------------------------------------------------
//I think I have to adjust the event listener function
function move(world, e){
  let player = world.player[0];

  if (e.key === "ArrowLeft"){
    player.x -= 1;
  }

  if (e.key === "ArrowRight"){
    player.x += 1;
  }
}

function updatePlayer(world){
  document.querySelector(".player").remove();
  let player = world.player[0];
  let playerRepresentation = createElementWithClassName("div", "player");
  playerRepresentation.style.width = `${player.width * scale}px`;
  playerRepresentation.style.height = `${player.height * scale}px`;
  playerRepresentation.style.top = `${player.y * scale}px`;
  playerRepresentation.style.left = `${player.x * scale}px`;
  playerRepresentation.style.zIndex = "1";
  world1GridRepresentation.appendChild(playerRepresentation);
}

// function movePlayer(world){
//   //make the changes in the back
//   move(world1);
//   //give the changes an appearance in the front
//   updatePlayer(world1);
// }


function movePlayer(world, e){
  return function(e){
    move(world, e);
    updatePlayer(world);
  }
}

let playerMove = movePlayer(world1);

window.addEventListener("keydown", playerMove);
//It works!

//I had a slight error, earlier, I didn't include the event object in the function move so
//there was no way for the e.key to work because there was no event object being passed down
//Remember to pass the proper arguments down when dealing with nested functions

//Next part, behaviour with walls or maybe should I do up arrow?

//------------------------------------------------------------------------------
//ERROR LOGS AND COMMENTS
//Now to make it move.

//Parts
//event listener for keydowns on left and right arrows
//keydown on left, move player's x coordinate in the -, -12? or - 1 * half of scale, or just scale? let's do scale first
//keydown on right, move player's x coordinate in the +, +12?

//maybe do up later, I don't know what to do with gravity just yet, it's not as straightforward

//okay, so keydown for left arrow, player.x -= -1,
//maybe do the scale in the update, the update takes the x property and multiplies it there

//keydown for the right arrow, player.x += 1;
