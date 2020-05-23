//List is a nested set of objects.
//The first object holds a reference to the second.
//The second holds a reference to the third.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

//Write a function arrayToList that builds up a list structure like the
//one shown when given [1,2,3] as an argument.
let x = [1, 2, 3];

function arrayToList(array){
  let list = {
    value: x,
    rest: {
      value:y,
      rest: {
        value:z,
        rest:null
      }
    }
  }
}

//I looked at the solution, I couldn't get it

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--){
    list = {value: array[i], rest: list};
  }

  return list;
}

//So for nested structures. where the information in the
//inner layers is needed for the outer layers, you start
//the loop with the last value
//you do this by doing the starting value as array.length - 1
//and you move the process by counting down instead of up
//instead of the usual i++, you have i--

//Write a function that produces an array from a list
function listToArray(list){
  let array = [];

  array[0] = list.value;
  array[1] = list.rest.value;
  array[2] = list.rest.rest.value;

  return array;
}

function listToArray(list){
  let array = [];

  for (let node = list; node; none = node.rest){
    array.push(node.value);
  }

  return array;
}
