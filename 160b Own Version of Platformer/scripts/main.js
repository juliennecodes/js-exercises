let characterMap1 = `
############
#..........#
#....@...o.#
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
}

//returns strings describing what the characters are
//strings correspond to a square of a grid
function createWordMap(world) {
  return world.rows.map((row, y) => row.map(
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


//PROBLEM
//instead of depending on wordMap
//depend on the world object instead
//that way, you have access to the width and height properties
//width of table is worldObject width
//height of table is worldObject height

function translateWordMapToElementGridRepresentation(wordMap) {
  let wordMapTable = document.createElement("table");
  wordMapTable.style.width =
  wordMap.map(row => {
      let wordMapRow = document.createElement("tr");
      wordMapTable.appendChild(wordMapRow);
      row.map(type => {
          let element = createElementWithClassName("td", type);
          wordMapRow.appendChild(element);
        } //type
      ) //row.map
    } //row
  ) //wordMap.map
  return wordMapTable;
}



function createElementWithClassName(elementType, className) {
  let element = document.createElement(elementType);
  element.classList.add(className);
  return element;
}

let scale = 24;

function createDisplayContainer(world) {
  let display = document.createElement("div");
  display.classList.add("jsDisplay");
  display.style.width = `${world.width * scale}px`;
  display.style.height = `${world.height * scale}px`;
  return display;
}


let world1 = new World(characterMap1);
let wordMap1 = createWordMap(world1);
let world1GridRepresentation = translateWordMapToElementGridRepresentation(wordMap1);

let worldContainer = createDisplayContainer(world1);
worldContainer.appendChild(world1GridRepresentation);
document.querySelector("main").appendChild(worldContainer);
