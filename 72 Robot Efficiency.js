//Robot Efficiency
//So the parcel gathering robot had a few shortcomings
//It stuck to a route that gathers parcel even if another parcel is close by
//It also stuck to the route even if it already gathered the parcel

//So a nicer feature would be
//it checks if a parcel is not at the robot's currentLocation, therefore is uncollected
//it picks up that package
//is there a way to check if a package is close by?
//maybe spider route detect a package?

//------------------------------------------------------------------------------
//Plain description
//Robot gathers parcels
//Robot delivers parcels

//Robot gathers parcels
  //get the routes from current location to parcel.currentLocation
  //put the routes in an array
  //compare the length of the routes
  //reduce it to the shortest route
  //if routes are equal in length, then choose the first one
  //return the shortest route

  //use the shortest route to complete delivery object *aside* move continues until there are no more places in the route
  //end result is the robot moving to the newPlace, which is the parcel.currentLocation

  //repeat the loop of choosing the shortest route
  //collect another parcel

  //repeat the loop of choosing the shortest route
  //collect another parcel

  //loop continues until there are no more parcels that are not in the robot's currentLocation
  // if (parcel.currentLocation !== currentLocation){
  //
  //   //find the route to the closest parcel
  //   //create routes array but make it empty
  //   //do a loop to find the route for every parcel
  //   //function inside loop should return a route
  //   //concatenate the routes to an empty routes array
  //   //reduce the routes array to one route
  //   //assign route as the shortest route
  //   //do I need to return the route explicitly or do I just assign it?
  //
  //   //use that to pass on a route for the robot to move to the newPlace
  //
  //   //loop continues until all parcels are collected
  //
  // }

  //when parcels are collected, start delivering

  //Robot delivers parcels
    //robot finds route for parcel.destination
    //robot does this for all parcels
    //route gets put in an array
    //routes array gets reduced to one route, which is the shortest
    //route gets assigned the value of the shortest route

    //shortest route used to complete the delivery object used for move, robot moves to newPlace to deliver parcel

    //loop continues as long as there are parcels that are in the robot's current location

    // if (parcels.currentLocation === currentLocation){
    //   //find shortest route to parcel.destination
    // }

//------------------------------------------------------------------------------
// findParcelRoutes(currentLocation, parcels){
//   if (parcels.currentLocation !== currentLocation){
//     let routes = [];
//
//     for (let parcel of parcels){
//       routes.concat(findRoute(currentLocation, parcel));
//     }
//
//     return routes;
//   }
//   //does the above return only make it available within that code block?
//   //that makes sense because the outside code block doesn't have access to the
//   //inner block, therefore, you have to explicitly make it available
//   //does the above return only make it available within that code block//do I need to explicitly return routes here too?
//   return routes;
// }
// //this should get the routes for all the undelivered parcels
//
// findShortestRoute(routes){
//   routes.reduce((a, n) => {if (a < n){return a;} else {return n;}});
// }
//
// //testing reduce
// // let x = [7, 3, 5];
// // // reducer = (accumulator, currentValue) => accumulator + currentValue;
// // x.reduce((a, n) => {if (a < n){return a;} else {return n;}});
//

//------------------------------------------------------------------------------
function shortestRouteRobot({village, currentLocation, parcels}, route){
    // console.log("route is " + route);
    // console.log("route length is " + route.length);

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

    // console.log("route is " + route);

  return {direction: route[0], memory: route.slice(1)};
}

//------------------------------------------------------------------------------
function findParcelRoutes(currentLocation, parcels){
    let routes = [];
    for (let parcel of parcels){
      //ugh this was the missing code, I forgot to only collect the routes for
      //the uncollected parcels
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
//------------------------------------------------------------------------------
//runRobot(VillageState.scenario(), shortestRouteRobot, []);
runRobotAnimation(VillageState.scenario(), shortestRouteRobot, []);
