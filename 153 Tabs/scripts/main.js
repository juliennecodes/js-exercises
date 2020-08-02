let body = document.querySelector("body");
let tabPanel = document.querySelector(".jsTabPanel");
let tabs = Array.from(document.querySelectorAll(".jsTab"));

//create a div (createElement)
//div has to be inserted before the tab panels (insertBefore)
//for each tab, create a button (createElement)
//button has to be labeled according to the data name of the tab (appendChild)

let tabButtonsDiv = document.createElement("div");

function createTabButtons(){
  for (let tab of tabs){
    let tabButton = createButtonWithInformation(tab);
    tabButton.classList.add("jsTabButton");
    tabButtonsDiv.appendChild(tabButton);
  }

  body.insertBefore(tabButtonsDiv, tabPanel);
}

function createButtonWithInformation(tab){
  let button = document.createElement("button");
  button.innerText = dataOf(tab);
  return button;
}

function dataOf(tab){
  return tab.getAttribute("data-tabname");
}

createTabButtons();
//------------------------------------------------------------------------------
//Attach a tab to a tabButton
//click tabButton[0], show tab[0], hide all other tabs
//click tabButton[1], show tab[1], hide all other tabs
let tabButtons = Array.from(document.querySelectorAll(".jsTabButton"));

//testing if event object gets passed without creating a parameter in the add event listener method
// tabButton[0].addEventListener("click", sayWord);
// function sayWord(e){
//   console.log(e.target);
// }

//specific situations
tabButtons[0].addEventListener("click", displayTabZero);
function displayTabZero(){
  tabs[0].style.display = "block";
  tabs[1].style.display = "none";
  tabs[2].style.display = "none";
}

tabButtons[1].addEventListener("click", displayTabOne);
function displayTabOne(){
  tabs[0].style.display = "none";
  tabs[1].style.display = "block";
  tabs[2].style.display = "none";
}

tabButtons[2].addEventListener("click", displayTabTwo);
function displayTabTwo(){
  tabs[0].style.display = "none";
  tabs[1].style.display = "none";
  tabs[2].style.display = "block";
}


//setting up default view
function defaultState(){
  tabs[0].style.display = "block";
  tabs[1].style.display = "none";
  tabs[2].style.display = "none";
}

defaultState();
