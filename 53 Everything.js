//Use every as a function
//Every takes in an array
//Every takes in a predicate function as parameter

array.every(function);

let evens = [2, 4, 6, 8, 10];

let odds = [1, 3, 5, 7, 9];

let assorted = [1, 2, 3, 4, 5];

let big = [1, 3, 5, 7000, 9];

array.every(checkForEvens)

function checkForEvens(element){
  return element % 2 === 0;
}

function checkForOdds(element){
  return element % 2 != 0;
}

function checkForBig(element){
  if (element > 1000){
    return true;
  }

  else {
    return false;
  }
}

function testEvery(array, testFunc){
  return array.every(testFunc);
}

function testSome(array, testFunc){
  return array.some(testFunc);
}

//Converting test into higher order function
function testEvery(testFunc){
  return  function(array){
    return array.every(testFunc);
  }
}

let testEveryEvens = testEvery(checkForEvens);
let testEveryOdd = testEvery(checkForOdds)
let testEveryBig = testEvery(checkForBig);

//Lessons
//It might be better if instead of checkForCondition
//You named it isCondition or hasCondition


//Now for SOME

function testSome(testFunc){
  return function(array){
    return array.some(testFunc);
  }
}

let testSomeEvens = testSome(checkForEvens);
let testSomeOdds = testSome(checkForOdds);
let testSomeBig = testSome(checkForBig);
