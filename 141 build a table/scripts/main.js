// alert("Javascript!");

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
//create a row
document.createElement("tr");

//create a data cell
document.createElement("td");

//------------------------------------------------------------------------------
//putting table in the div class
//getting a reference to mountains
let mountains = document.querySelector(".mountains");

//create a table
let mountainsTable = document.createElement("table");

//attaching mountains table to mountains
mountains.appendChild(mountainsTable);

//------------------------------------------------------------------------------
//create headings
//headings is dictated by the mountain property

//getting a reference to a mountain
let mountainExample = MOUNTAINS[0];

let mountainPropertyNames = Object.keys(mountainExample);
//returns an array with three strings, name, height, and place

//create the first row
let mountainsHeadingsRow = document.createElement("tr");
mountainsTable.appendChild(mountainsHeadingsRow);

//create a number of rows that is the exact same length as the number of mountain properties
//attach the rows to the table
for(let i = 0; i < mountainPropertyNames.length; i++){
  mountainsHeadingsRow.appendChild(document.createElement("th"));
}

//fill in the headings with text nodes
let mountainsHeadings = mountainsHeadingsRow.children;

for(let i = 0; i < mountainsHeadings.length; i++){
  mountainsHeadings[i].innerText = mountainPropertyNames[i];
}

//------------------------------------------------------------------------------
let mountainRow1 = document.createElement("tr");
mountainsTable.appendChild(mountainRow1);

//create data cells
for (let i = 0; i < Object.keys(MOUNTAINS[1]).length; i++){
  mountainRow1.appendChild(document.createElement("td"));
}

//using mountain property names to extract information from a mountain object
//looping over object property AND placing it in the corresponding data cell
for (let i = 0; i < Object.keys(MOUNTAINS[1]).length; i++ ){
  //access the mountain object property
  //have to access the object
  // MOUNTAINS[1].mountainPropertyNames[i];
  //get the value
  //put the value in the data cell
  mountainRow1.children[i].innerText = MOUNTAINS[1][mountainPropertyNames[i]];
  //the data cells are mountainRow1.children
}

//------------------------------------------------------------------------------
//USE SQUARE BRACKETS INSTEAD OF DOT NOTATION WHEN YOU HAVE A STRING PROPERTY NAME
mountainRow1.children[0].innerText = MOUNTAINS[1].mountainPropertyNames[0];
mountainRow1.children[0].innerText = MOUNTAINS[1][mountainPropertyNames[0]];
//------------------------------------------------------------------------------
//Plain description for each row, needed for each mountain object
//create a row
//create data cells
//extract property value
//put property value inside a data cell

function putObjectDataInMountainsTable(mountain){
  let mountainRow = document.createElement("tr");
  mountainsTable.appendChild(mountainRow);

  createDataCells();
  putPropertyValueInDataCell();
}

function createDataCells(){
  for (let i = 0; i < Object.keys(mountain).length; i++){
    mountainRow.appendChild(document.createElement("td"));
  }
}

function putPropertyValueInDataCell(mountain){
  for (let i = 0; i < Object.keys(mountain).length; i++ ){
    mountainRow.children[i].innerText = mountain[mountainPropertyNames[i]];
  }
}
//VM1491:11 Uncaught ReferenceError: mountainRow is not defined
    // at createDataCells (<anonymous>:11:5)
    // at putObjectDataInMountainsTable (<anonymous>:5:3)
    // at <anonymous>:1:1
//------------------------------------------------------------------------------
//REDO
function putObjectDataInMountainsTable(mountain){
  let mountainRow = document.createElement("tr");
  mountainsTable.appendChild(mountainRow);

  createDataCells(mountainRow);
  putPropertyValueInDataCell(mountainRow);
}

function createDataCells(row){
  for (let i = 0; i < Object.keys(mountain).length; i++){
    row.appendChild(document.createElement("td"));
  }
}

function putPropertyValueInDataCell(row){
  for (let i = 0; i < Object.keys(mountain).length; i++ ){
    row.children[i].innerText = mountain[mountainPropertyNames[i]];
  }
}

//------------------------------------------------------------------------------
//REDO OF REDO
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
    row.children[i].innerText = mountain[mountainPropertyNames[i]];
  }
}

//You have to pass the argument to the function call inside too
putObjectDataInMountainsTable(MOUNTAINS[0]);
putObjectDataInMountainsTable(MOUNTAINS[1]);
putObjectDataInMountainsTable(MOUNTAINS[2]);
putObjectDataInMountainsTable(MOUNTAINS[3]);
putObjectDataInMountainsTable(MOUNTAINS[4]);
putObjectDataInMountainsTable(MOUNTAINS[5]);
putObjectDataInMountainsTable(MOUNTAINS[6]);

//------------------------------------------------------------------------------
for(i = 0; i < MOUNTAINS.length; i++){
  putObjectDataInMountainsTable(MOUNTAINS[i]);
}
//This was running an error I think
//when I put this code in the console, it wasn't rendering anything
//I also couldn't put in new codes in the console
//I think the console was too busy executing this task
//I think the problem was in declaring i = 0
//it's supposed to be let i = 0;

//------------------------------------------------------------------------------
function fillInTheTable(){
  for(let i = 0; i < MOUNTAINS.length; i++){
    putObjectDataInMountainsTable(MOUNTAINS[i]);
  }
}

fillInTheTable();
