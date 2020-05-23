// Write a range function that takes two arguments, start and end
//Return an array containing all the numbers from start up to and including end

//So you have an array from start number to end numbers
//You add the numbers in the array
//You return the numbers in the array
let start = 1;
let end = 5;


function range(start, end) {

  //Getting the counter length
  let counter = end - start;
  let numbers = new Array;

  //Return an array containing all the numbers from start to end
  for (i = 0; i <= counter; i++){
    numbers[i] = start;
    start++;
  }

  return numbers;
}

//Sum function
function sum(array) {
  let sum = 0;

  for(i = 0; i < array.length; i++){
    sum = sum + array[i];
  }

  return sum;
}

// Sum with step
function range(start, end, step) {

  //Getting the counter length
  let counter = end - start;
  let numbers = new Array;

  //Return an array containing all the numbers from start to end
  for (i = 0; i <= counter; i++){
    numbers[i] = start;
    start+=step;
  }

  return numbers;
}
