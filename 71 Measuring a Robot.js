function compareRobots (robot1, robot2){
  let tasks = generateTasks();

  let robot1StepsCollection = getStepsCollection(tasks, robot1);
  let robot2StepsCollection = getStepsCollection(tasks, robot2);

  let robot1Average = getAverage(robot1StepsCollection);
  let robot2Average = getAverage(robot2StepsCollection);

  console.log(`On average, ${robot1.name} delivers parcels in ${robot1Average} turns.`);
  console.log(`On average, ${robot2.name} delivers parcels in ${robot2Average} turns.`);

  if (robot1Average < robot2Average){return `${robot1.name} is faster than ${robot2.name}`;}
  else {return `${robot2.name} is faster than ${robot1.name}`;}

}

//------------------------------------------------------------------------------
//GENERATE TASKS
function generateTasks(){
  let tasks = [];

  while (tasks.length < 100) {
    tasks.push(VillageState.scenario());
  }

  return tasks;
}

//------------------------------------------------------------------------------
//GET ROBOT RESULT
function getStepsCollection(tasks, robot){
  let stepsCollection = [];

  for (let i = 0; i < tasks.length; i++){
    stepsCollection.push(
      // runRobot(tasks[i], robot1, []); //why does this not work and without comma it works?
      // because it is inside push?
      runRobot(tasks[i], robot, [])
    );
  }
  return stepsCollection;
}
//------------------------------------------------------------------------------
//GET AVERAGE FROM ROBOT RESULT
function getAverage(stepsCollection){
  let sum = stepsCollection.reduce((stepsA, stepsB) => {return stepsA + stepsB;})
  return sum / stepsCollection.length;
}

//------------------------------------------------------------------------------
//TESTING
// compareRobots(randomRobot, mailRouteRobot);
// compareRobots(goalOrientedRobot, mailRouteRobot);
// compareRobots(shortestRouteRobot, mailRouteRobot);
// compareRobots(shortestRouteRobot, goalOrientedRobot);
