const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
//------------------------------------------------------------------------------
let mountains = document.querySelector(".mountains");
let mountainsTable = document.createElement("table");
mountains.appendChild(mountainsTable);
//------------------------------------------------------------------------------
let mountainX = MOUNTAINS[0];
let mountainPropertyNames = Object.keys(mountainX);

let mountainsHeadingsRow = document.createElement("tr");
mountainsTable.appendChild(mountainsHeadingsRow);

for(let i = 0; i < mountainPropertyNames.length; i++){
  mountainsHeadingsRow.appendChild(document.createElement("th"));
}

let mountainsHeadings = mountainsHeadingsRow.children;
for(let i = 0; i < mountainsHeadings.length; i++){
  mountainsHeadings[i].innerHTML = mountainPropertyNames[i];
}

//------------------------------------------------------------------------------
function putObjectDataInMountainsTable(mountain){
  let mountainRow = document.createElement("tr");
  mountainsTable.appendChild(mountainRow);

  createDataCells(mountain, mountainRow);
  putPropertyValueInDataCell(mountain, mountainRow);
}

function createDataCells(mountain, row){
  for (let i = 0; i < Object.keys(mountain).length; i++){
    row.appendChild(document.createElement("td"));
  }
}

function putPropertyValueInDataCell(mountain, row){
  for (let i = 0; i < Object.keys(mountain).length; i++ ){
    row.children[i].innerHTML = mountain[mountainPropertyNames[i]];
    if (typeof mountain[mountainPropertyNames[i]] === "number"){
      row.children[i].style.textAlign = "right";
    }
  }
}

//------------------------------------------------------------------------------
function fillInTheTable(){
  for(let i = 0; i < MOUNTAINS.length; i++){
    putObjectDataInMountainsTable(MOUNTAINS[i]);
  }
}

fillInTheTable();

//------------------------------------------------------------------------------
//Right-align cells that contain number values by setting their style
//get reference to elements that have number values

//get reference to td
//if content is number
//set style to right align

// function isNumber(x){
//   return typeof x === "number";
// }
//
// function rightAlignNumbers(){
//   let mountainsData = mountainsTable.getElementsByTagName("td");
//   for (let mountainData of mountainsData){
//     if (isNumber(mountainData.innerHTML)){
//       mountainData.style.color = "green";
//     }
//   }
// }
//
// rightAlignNumbers();

//This didn't work because innerText and innerHTML converts the data into a string
//The time to check if the data is a number is when the data is being put
//in the data cell, not after
//after, when innerText and innerHTML gets their hand on the data, it becomes a string
