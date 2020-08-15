let characterMap1 = `
############
#..........#
#....@...#.#
############
`;

class Player {
  constructor() {

  }
}

let characterLegends = {
  ".": "empty",
  "#": "wall",
  "@": Player,
  // "o" : Coin
}

// let rows = characterMap1.trim().split("\n").map(row => [...row]);
class World {
  constructor(map) {
    this.rows = map.trim().split("\n").map(row => [...row]);
    this.width = this.rows[0].length;
    this.height = this.rows.length;
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
                // characterLegends[characterLegendsProperty].create(new Position(x, y))
                return "empty"
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
