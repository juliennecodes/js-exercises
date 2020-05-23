//Takes an Array
//produces a new array that has the same elements in the reverse order
function reverse(array){
  let x = 0;
  let revArray = new Array;

  for(i = array.length - 1; i >= 0; i--){
    revArray[x] = array[i];
    x++;
  }

  return revArray;
}

//modifying the Array
function reverseAIP(array){
  let x = 0;
  let revArray = new Array;

  for(i = array.length - 1; i >= 0; i--){
    revArray[x] = array[i];
    x++;
  }

  for(i = 0; i < array.length; i++){
    array[i] = revArray[i];
  }

  return array;
}
