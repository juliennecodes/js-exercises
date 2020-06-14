const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//function that builds graph
function buildGraph(edges){
  //creates an empty object
  //empty object reference assigned to graph binding
  let graph = Object.create(null);

  // function inside a function
  // add edge, what's edge?
  function addEdge(from, to){
    //if the graph object with the property of from is null
    if (graph[from] == null){
      //assign the value of to to the graph from property
      graph[from] = [to];
    }
    // if the graph object property from has a value
    else {
      //add the value to in the array, which is the graph property from
      graph[from].push(to);
    }
  }

  //so map builds an array from the elements in roads
  //first element is alice's house to bob's house
  //they get split, so now, there is an array made up of
  //alice's house and bob's house
  //then the next element in roads get split
  //roads.map(r => r.split("-"))
  //creates an array (map doing) of arrays (split doing)
  //now there is an array made up of fourteen arrays

  //now the for of loop is looping over the array of arrays
  //let each of the splitArray of roadArrays undergo the addEdges function
  //one of the splitArrays is ["Alice's house", "Bob's house"]


  //So what this is doing is populating the graph object
  //by filling in its properties
  for (let [from, to] of edges.map(r => r.split("-"))){
    addEdge(from, to);
    addEdge(to, from);
  }
//------------------------------------------------------------------------------
for (let [from, to] of roadArray){
  addEdge(from, to);
  addEdge(to, from);
}

// edges.map(r => r.split("-")) boils down to
[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
//so [from, to] is [Alice's house, Bob's house]
//Oh, I didn't know you can have a meaningful variable for the individual
//element in a for loop
//oh wait, are the elements bound to the name or the order?
//I'm guessing order because why else would there be two addEdges
//if they produce the same result
//but why specify from and to if the names don't matter and it's the order that
//matters?
//I guess names do matter
//so you can have two parameters in one individual element?

//FIRST ARRAY INSIDE ROADARRAY
addEdge("Alice's house", "Bob's house");
addEdge("Bob's house", "Alice's house"); //??


addEdge("Alice's House", "Bob's House");
//returns
graph["Alice's house"] = ["Bob's house"];

addEdge("Bob's house", "Alice's house");
//returns
graph["Bob's house"] = ["Alice's house"];

//SECOND ARRAY INSIDE ROADARRAY
addEdge("Alice's house", "Cabin");
addEdge("Cabin", "Alice's house");

addEdge("Alice's house", "Cabin");
//returns
graph["Alice's house"] = ["Bob's house", "Cabin"]

addEdge("Cabin", "Alice's house");
//returns
graph["Cabin"] = ["Alice's house"];

//THIRD ARRAY INSIDE ROADARRAY
addEdge("Alice's House", "Post-Office");
addEdge("Post-Office", "Alice's House");

addEdge("Alice's House", "Post-Office");
//returns
graph["Alice's house"] = ["Bob's house", "Cabin", "Post-Office"];

addEdge("Post-Office", "Alice's House");
//returns
graph["Post-Office"] = ["Alice's House"];

//So what this is doing is populating the graph object
//by filling in its properties

//------------------------------------------------------------------------------
  //when the graph is filled, the filled up graph is returned
  return graph;
}

//so when you do this
const roadGraph = buildGraph(roads);
//you get this
roadGraph;
//is an object
  {
    ["Alice's House"]: ["Bob's House", "Cabin", "Post Office"],
    ["Bob's House"]: ["Alice's House", "Town Hall"],
    ["Cabin"]: ["Alice's House"],
    ["Daria's House"]: ["Ernie's House", "Town Hall"],
    ["Ernie's House"]: ["Daria's House", "Grete's House"],
    ["Farm"]: ["Grete's House", "Marketplace"],
    ["Grete's House"]: ["Ernie's House", "Farm", "Shop"],
    ["Marketplace"]: ["Farm", "Post Office", "Shop", "Town Hall"],
    ["Post Office"]: ["Alice's House", "Marketplace"],
    ["Shop"]: ["Grete's House", "Marketplace", "Town Hall"],
    ["Town Hall"]: ["Bob's House", "Daria's House", "Marketplace", "Shop"]
  }
  ﻿
​
//------------------------------------------------------------------------------
//village's state
class VillageState {

  constructor(place, parcels){
    //robot's current location
    this.place = place;
    //collection of undelivered parcels
    //each one of the parcels have a property of current location and a destination address
    this.parcels = parcels;
  }

  move(destination){
    //checks whether there is a road going from the current place to
    //the destination
    //if there is no road going from the current place to the destination
    if (!roadGraph[this.place].includes(destination)){
      //the old state is returned since moving from current place to
      //destination is not a valid move, there is no road, according
      //to the check
      return this;
    } else {
      //if there is a road going from the current place to the destination
      //create a new set of parcels
      //parcels that the robot is carrying need to be moved along to the
      //new destination

      let parcels = this.parcels.map(p => {
        //this.parcels is an array and contains an object, which map will use
        //to create a new array
        //p is parcels object
        //*this* is the object with robot's current location and parcels
        //if parcel's current location does not match robot's current location,
        //return parcel object
        //i.e {place: "Post Office", address: "Alice's House"}
        if (p.place != this.place) return p;
        //if parcel's current location does match the robot's current location,
        //return an object with the destination as the place and address
        //as the parcel's intended address
        //this is the parcel moving with the robot as the robot moves
        //to another destination
        return {place: destination, address: p.address};
      })
      //call to filter delivers parcels
      //makes a new array but only includes the parcels whose current
      //location does not match the intended address
      //therefore, those parcels, whose current location matches the
      //intended address, are dropped from the array of parcels
      //"delivered"
      .filter(p => p.place != p.address);

      //creates a new state with the destination as the
      //robot's new place
      //simulating the robot's movement
      return new VillageState(destination, parcels);
    }
  }
}

//------------------------------------------------------------------------------

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);

first;
//returns
{place: "Post Office",
 parcels: [{place: "Post Office", address: "Alice's House"}]
}


let next = first.move("Alice's House");

next.place;
// Alice's House
// robot's current location after move method was called
next.parcels;
// []
// the parcel's intended address matched the robot's current location,
// therefore, it was filtered out of the array,
// simulating the parcel being delivered
first.place;
// Post Office
// initial state stays intact
// new information is created from old information instead of new replacing the old

//------------------------------------------------------------------------------
//Persistent Data
let object = Object.freeze({value: 5});
object.value = 10;

object.value;
// 5
// even though the object.value is assigned 10 in another line, because
// the value is frozen to 5, the value remains 5

//------------------------------------------------------------------------------
//Simulation
//robot is a function
//takes VillageState object
function runRobot(state, robot, memory){

  for (let turn = 0;; turn ++){
    //if the current state has no more parcel objects inside the array
    if (state.parcels.length == 0) {
      //log that the delivery is done
      //how does the turn get calculated?
      //if you declare it 0, then doesn't it reset?
      //how is runRobot incorporated in a way that keeps the counter counting
      console.log(`Done in ${turn} turns.`);
      break;
    }


    let action = robot(state, memory);

    //object containing the direction it wants to move in
    state = state.move(action.direction);

    //memory value that will be given back when called
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

//------------------------------------------------------------------------------
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  //gives random index for the array
  return array[choice];
}


//this is a function
//it accepts state
//returns an object with direction property
//direction's value is an array with an index number
//state.place is robot's current location
//roadGraph[state.place] is a location with possible roads
//calling randomPick on the array means picking a random location from
//the possible roads location

function randomRobot(state){
  return {direction: randomPick(roadGraph[state.place])};
}

//------------------------------------------------------------------------------
//Creating a new state with some parcels
//random property is created
//apparently it's a static method
VillageState.random = function(parcelCount = 5){
  //parcels is an array
  let parcels = [];

  //i starts at 0, for as long as it is less than the parcel count,
  for (let i = 0; i < parcelCount; i++){
    //this is Object.keys(roadGraph)
    //["Alice's House", "Bob's House", "Cabin", "Daria's House", "Ernie's House", "Farm", "Grete's House", "Marketplace", "Post Office", "Shop", "Town Hall"]
    //when that array is called on randomPick,
    //randomPick picks a random element in the array
    //essentially, address becomes randomized
    let address = randomPick(Object.keys(roadGraph));

    let place;

    do {
      //works in conjunction with while
      //picks a random place
      place = randomPick(Object.keys(roadGraph));
    }
    //while place is the same location as address, do the do loop
    while (place == address);

    //a new place and a new address is created, which is the property
    //of a parcel
    //place is the current location
    //address is its intended address
    parcels.push({place, address});
  }

  //creates new parcels?
  return new VillageState("Post Office", parcels);
}

//just for reference
// roadGraph;
// //is an object
//   {
//     ["Alice's House"]: ["Bob's House", "Cabin", "Post Office"],
//     ["Bob's House"]: ["Alice's House", "Town Hall"],
//     ["Cabin"]: ["Alice's House"],
//     ["Daria's House"]: ["Ernie's House", "Town Hall"],
//     ["Ernie's House"]: ["Daria's House", "Grete's House"],
//     ["Farm"]: ["Grete's House", "Marketplace"],
//     ["Grete's House"]: ["Ernie's House", "Farm", "Shop"],
//     ["Marketplace"]: ["Farm", "Post Office", "Shop", "Town Hall"],
//     ["Post Office"]: ["Alice's House", "Marketplace"],
//     ["Shop"]: ["Grete's House", "Marketplace", "Town Hall"],
//     ["Town Hall"]: ["Bob's House", "Daria's House", "Marketplace", "Shop"]
//   }
//------------------------------------------------------------------------------
//MAIL TRUCK ROUTE
//this is the mail route
//supposedly, route that passes all the places in the village
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory){
  if (memory.length == 0){
    //assigns mailRoute to memory if there is no memory
    memory = mailRoute;
  }

  //returns an object
  //object has direction property, which is the first address because
  //mailRoute is an array made up of addresses
  //the memory mail route is then sliced starting at index 1
  //the result is a new array that includes elements from index 1 to the
  //last index
  //essentially, the first address is checked and removed from the array
  return {direction: memory[0], memory: memory.slice(1)};
}

//------------------------------------------------------------------------------
//PATHFINDING
function findRoute(graph, from, to){
  //work is an array
  //array is made up of an object with property of at and route
  //work list is an array of places that should be explored next
  //the route that got the robot there is the route
  let work = [{at: from, route: []}];


  for (let i = 0; i < work.length; i++){
    //this assigns the work array object to a new object with the
    //shape of at and route
    let {at, route} = work[i];

    //roadGraph[at] is an array made up of addresses
    //this is all the available places possible from the starting point (at)
    //for each one of those addresses,
    for (let place of graph[at]) {
      //if one of the addresses is the goal, a finished route can be returned
      //how does route.concat(place) represent a finished route?
      if (place == to) return route.concat(place);
      //if work is the places that should be explored next, this code
      //is supposed to represent places that are not yet explored
      //if the place is not included in the places that should be explored
      if (!work.some(w => w.at == place)){
        //add the object to the works array, which is a list of places
        //that should be explored next
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

//just for reference
// roadGraph;
// //is an object
//   {
//     ["Alice's House"]: ["Bob's House", "Cabin", "Post Office"],
//     ["Bob's House"]: ["Alice's House", "Town Hall"],
//     ["Cabin"]: ["Alice's House"],
//     ["Daria's House"]: ["Ernie's House", "Town Hall"],
//     ["Ernie's House"]: ["Daria's House", "Grete's House"],
//     ["Farm"]: ["Grete's House", "Marketplace"],
//     ["Grete's House"]: ["Ernie's House", "Farm", "Shop"],
//     ["Marketplace"]: ["Farm", "Post Office", "Shop", "Town Hall"],
//     ["Post Office"]: ["Alice's House", "Marketplace"],
//     ["Shop"]: ["Grete's House", "Marketplace", "Town Hall"],
//     ["Town Hall"]: ["Bob's House", "Daria's House", "Marketplace", "Shop"]
//   }

function goalOrientedRobot({place, parcels}, route){
  //if the route list is empty,
  if (route.length) == 0 {
    //take the first undelivered parcel in the set
    let parcel = parcels[0];

    //if the parcel is not picked up
    if (parcel.place != place) {
      //plot a route towards it
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      //if the parcel is picked up
      //create a route towards the delivery address
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  //return an object with one less address in the route array
  return {direction: route[0], memory: route.slice(1)};
}
//------------------------------------------------------------------------------
