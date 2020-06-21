// test: no

(function() {
  "use strict"

  let active = null

  const currentLocations = {
    "Alice's House": {x: 279, y: 100},
    "Bob's House": {x: 295, y: 203},
    "Cabin": {x: 372, y: 67},
    "Daria's House": {x: 183, y: 285},
    "Ernie's House": {x: 50, y: 283},
    "Farm": {x: 36, y: 118},
    "Grete's House": {x: 35, y: 187},
    "Marketplace": {x: 162, y: 110},
    "Post Office": {x: 205, y: 57},
    "Shop": {x: 137, y: 212},
    "Town Hall": {x: 202, y: 213}
  }
  const currentLocationKeys = Object.keys(currentLocations)

  const speed = 2

  class Animation {
    constructor(worldState, robot, robotState) {
      this.worldState = worldState
      this.robot = robot
      this.robotState = robotState
      this.turn = 0

      let outer = (window.__sandbox ? window.__sandbox.output.div : document.body), doc = outer.ownerDocument
      this.node = outer.appendChild(doc.createElement("div"))
      this.node.style.cssText = "position: relative; line-height: 0.1; margin-left: 10px"
      this.map = this.node.appendChild(doc.createElement("img"))
      this.map.src = "img/village2x.png"
      this.map.style.cssText = "vertical-align: -8px"
      this.robotElt = this.node.appendChild(doc.createElement("div"))
      this.robotElt.style.cssText = `position: absolute; transition: left ${0.8 / speed}s, top ${0.8 / speed}s;`
      let robotPic = this.robotElt.appendChild(doc.createElement("img"))
      robotPic.src = "img/robot_moving2x.gif"
      this.parcels = []

      this.text = this.node.appendChild(doc.createElement("span"))
      this.button = this.node.appendChild(doc.createElement("button"))
      this.button.style.cssText = "color: white; background: #28b; border: none; border-radius: 2px; padding: 2px 5px; line-height: 1.1; font-family: sans-serif; font-size: 80%"
      this.button.textContent = "Stop"

      this.button.addEventListener("click", () => this.clicked())
      this.schedule()

      this.updateView()
      this.updateParcels()

      this.robotElt.addEventListener("transitionend", () => this.updateParcels())
    }


    updateView() {
      let pos = currentLocations[this.worldState.currentLocation]
      this.robotElt.style.top = (pos.y - 38) + "px"
      this.robotElt.style.left = (pos.x - 16) + "px"

      this.text.textContent = ` Turn ${this.turn} `
    }

    updateParcels() {
      while (this.parcels.length) this.parcels.pop().remove()
      let heights = {}
      for (let {currentLocation, destination} of this.worldState.parcels) {
        let height = heights[currentLocation] || (heights[currentLocation] = 0)
        heights[currentLocation] += 14
        let node = document.createElement("div")
        let offset = currentLocationKeys.indexOf(destination) * 16
        node.style.cssText = "position: absolute; height: 16px; width: 16px; background-image: url(img/parcel2x.png); background-position: 0 -" + offset + "px";
        if (currentLocation == this.worldState.currentLocation) {
          node.style.left = "25px"
          node.style.bottom = (20 + height) + "px"
          this.robotElt.appendChild(node)
        } else {
          let pos = currentLocations[currentLocation]
          node.style.left = (pos.x - 5) + "px"
          node.style.top = (pos.y - 10 - height) + "px"
          this.node.appendChild(node)
        }
        this.parcels.push(node)
      }
    }

    tick() {
      let {direction, memory} = this.robot(this.worldState, this.robotState)
      this.worldState = this.worldState.move(direction)
      this.robotState = memory
      this.turn++
      this.updateView()
      if (this.worldState.parcels.length == 0) {
        this.button.remove()
        this.text.textContent = ` Finished after ${this.turn} turns`
        this.robotElt.firstChild.src = "img/robot_idle2x.png"
      } else {
        this.schedule()
      }
    }

    schedule() {
      this.timeout = setTimeout(() => this.tick(), 1000 / speed)
    }

    clicked() {
      if (this.timeout == null) {
        this.schedule()
        this.button.textContent = "Stop"
        this.robotElt.firstChild.src = "img/robot_moving2x.gif"
      } else {
        clearTimeout(this.timeout)
        this.timeout = null
        this.button.textContent = "Start"
        this.robotElt.firstChild.src = "img/robot_idle2x.png"
      }
    }
  }

  window.runRobotAnimation = function(worldState, robot, robotState) {
    if (active && active.timeout != null)
      clearTimeout(active.timeout)
    active = new Animation(worldState, robot, robotState)
  }
})()

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
let meadowfield = {
  "Alice's House": ["Bob's House", "Cabin", "Post Office"],
  "Bob's House": ["Alice's House", "Town Hall"],
  "Cabin": ["Alice's House"],
  "Daria's House": ["Ernie's House", "Town Hall"],
  "Ernie's House": ["Daria's House", "Grete's House"],
  "Farm": ["Grete's House", "Marketplace"],
  "Grete's House": ["Ernie's House", "Farm", "Shop"],
  "Marketplace": ["Farm", "Post Office", "Shop", "Town Hall"],
  "Post Office": ["Alice's House", "Marketplace"],
  "Shop": ["Grete's House", "Marketplace", "Town Hall"],
  "Town Hall": ["Bob's House", "Daria's House", "Marketplace", "Shop"]
}

class VillageState {
  constructor(village, currentLocation, parcels) {
    this.village = village;
    this.currentLocation = currentLocation;
    this.parcels = parcels;
  }

  isAccessibleFromCurrent(place){
    return meadowfield[this.currentLocation].includes(place);
  }

  isCollected(parcel){
    return parcel.currentLocation === this.currentLocation
  }

  isNotDeliverable(parcel){
    return parcel.currentLocation !== parcel.destination
  }

  move(newPlace) {
    if (this.isAccessibleFromCurrent(newPlace)){
      let parcels = this.parcels.map(parcel => {
        if (this.isCollected(parcel)) return {currentLocation: newPlace, destination: parcel.destination};
        else return parcel;
      }).filter(parcel => this.isNotDeliverable(parcel));

      return new VillageState(this.village, newPlace, parcels);
    }
  } //move

  static scenario(parcelCount = 5){
    let parcels = [];

    for (let i = 0; i < parcelCount; i++) {
      let destination = randomPick(Object.keys(meadowfield));
      let currentLocation;

      do {currentLocation = randomPick(Object.keys(meadowfield));}
      while (currentLocation === destination);

      parcels.push({currentLocation, destination});
    }

    return new VillageState(meadowfield, "Post Office", parcels);
  }// static scenario
} //VillageState

//------------------------------------------------------------------------------
function runRobot(villageState, robot, memory){
  for (let turn = 0;; turn++) {
    if (villageState.parcels.length === 0) {
      console.log(`${robot.name} delivers parcels in ${turn} turns`);
      // break;
      return turn;
    }

    let deliver = robot(villageState, memory); //{direction: memory[0], memory: memory.slice(1)}
    villageState = villageState.move(deliver.direction);
    memory = deliver.memory; //memory.slice(1)
  }
}

//------------------------------------------------------------------------------
//RANDOM ROBOT
function randomPick(possibleChoices) {
  let i = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[i];
}

function randomRobot(villageState) {
  return {direction: randomPick(meadowfield[villageState.currentLocation])};
}
//------------------------------------------------------------------------------
//MAILROUTE ROBOT
let mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function mailRouteRobot(villageState, memory) {
  if (memory.length === 0){
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

//------------------------------------------------------------------------------
//PATHFINDING
function findRoute(from, destination) {
  let exploredPlaces = [{at: from, route: []}];
  for (let i = 0; i < exploredPlaces.length; i++) {
    let {at, route} = exploredPlaces[i];
    for (let possiblePlace of meadowfield[at]) {
      if (possiblePlace === destination) return route.concat(possiblePlace);
      if (!exploredPlaces.some(p => p.at == possiblePlace)) {
        exploredPlaces.push({at: possiblePlace, route: route.concat(possiblePlace)});
      }
    }
  }
}

function goalOrientedRobot({villageState, currentLocation, parcels}, route) {
  if (route.length === 0) {
    let parcel = parcels[0];

    if (parcel.currentLocation !== currentLocation) {
      route = findRoute(currentLocation, parcel.currentLocation);
    }

    else {
      route = findRoute(currentLocation, parcel.destination);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}
//------------------------------------------------------------------------------
//Parcel gathering robot
function parcelGatheringRobot({village, currentLocation, parcels}, route){
  if (route.length === 0){
    let gatherRoute =
                        findRoute("Post Office", parcels[0].currentLocation)
                        .concat(findRoute(parcels[0].currentLocation, parcels[1].currentLocation))
                        .concat(findRoute(parcels[1].currentLocation, parcels[2].currentLocation))
                        .concat(findRoute(parcels[2].currentLocation, parcels[3].currentLocation))
                        .concat(findRoute(parcels[3].currentLocation, parcels[4].currentLocation));

    let deliveryRoute =
                        findRoute(parcels[4].currentLocation, parcels[0].destination)
                        .concat(findRoute(parcels[0].destination, parcels[1].destination))
                        .concat(findRoute(parcels[1].destination, parcels[2].destination))
                        .concat(findRoute(parcels[2].destination, parcels[3].destination))
                        .concat(findRoute(parcels[3].destination, parcels[4].destination));

    route = gatherRoute.concat(deliveryRoute);
  }

  return {direction: route[0], memory: route.slice(1)};
}
//------------------------------------------------------------------------------
//shortestRouteRobot
function shortestRouteRobot({village, currentLocation, parcels}, route){
    if (route.length === 0){
        if (haveUncollectedParcels(currentLocation, parcels)){
          let routes = findParcelRoutes(currentLocation, parcels);
          route = findShortestRoute(routes);
        }

        else {
          let routes = findDeliveryRoutes(currentLocation, parcels);
          route = findShortestRoute(routes);
        }
    }

  return {direction: route[0], memory: route.slice(1)};
}

//------------------------------------------------------------------------------
// function findRoutes(destination, currentLocation, parcels){
//   return function(currentLocation, parcels){
//     let routes = [];
//     for (let parcel of parcels){
//       if (parcel.currentLocation !== currentLocation){
//         routes.push(findRoute(currentLocation, destination));
//       }
//     }
//     return routes;
//   }
// }
//
// let findParcelRoutes = findRoutes(parcel.currentLocation);
// let findDeliveryRoutes = findRoutes(parcel.destination);

function findParcelRoutes(currentLocation, parcels){
    let routes = [];
    for (let parcel of parcels){
      if (parcel.currentLocation !== currentLocation){
        routes.push(findRoute(currentLocation, parcel.currentLocation));
      }
    }
    return routes;
}

function findDeliveryRoutes(currentLocation, parcels){
    let routes = [];
    for (let parcel of parcels){
      routes.push(findRoute(currentLocation, parcel.destination));
    }
    return routes;
}

function findShortestRoute(routes){
  return routes.reduce((a, n) => {if (a <= n){return a;} else {return n;}});
}

function haveUncollectedParcels(currentLocation, parcels){
  return parcels.some(parcel => parcel.currentLocation !== currentLocation);
}

//------------------------------------------------------------------------------
// runRobot(VillageState.scenario(), randomRobot);
// runRobot(VillageState.scenario(), mailRouteRobot, []);
// runRobot(VillageState.scenario(), goalOrientedRobot, []);
// runRobot(VillageState.scenario(), parcelGatheringRobot, []);
// runRobot(VillageState.scenario(), shortestRouteRobot, []);

// runRobotAnimation(VillageState.scenario(), randomRobot, []);
// runRobotAnimation(VillageState.scenario(), mailRouteRobot, []);
// runRobotAnimation(VillageState.scenario(), goalOrientedRobot, []);
// runRobotAnimation(VillageState.scenario(), parcelGatheringRobot, []);
// runRobotAnimation(VillageState.scenario(), shortestRouteRobot, []);
