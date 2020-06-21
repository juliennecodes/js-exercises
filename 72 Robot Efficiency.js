//Robot Efficiency
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

//runRobot(VillageState.scenario(), shortestRouteRobot, []);
//runRobotAnimation(VillageState.scenario(), shortestRouteRobot, []);
