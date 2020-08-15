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
//ERROR LOGS AND COMMENTS
//I had a minor hitch. It said player.create was not a function.
//I forgot to put static in front of the method

//I appended the player into the grid
//However, I called it later so it is the last element and instead of being inside the grid,
//it is outside of it
//z index?
//I still don't know how the x and y coordinate fit

//I tried z index, it is still being rendered on the bottom

//Okay, after looking at the code, use x as left value, use y as top value

//It works!

//Now to make it move.
