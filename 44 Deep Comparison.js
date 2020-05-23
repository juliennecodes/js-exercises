//== compares objects by identity.
let object1 = {value: 10};
let object2 = {value: 10};
let object3 = object1;
let valuex = 2 + 5;
let valuey = 21 / 3;

function compare(x, y){
  if (x == y) {
    console.log("same identity");
  }
  else {
    console.log("different identity");
  }
}
//object1 and object2, despite sharing the same properties
//are not equal.

//valuex and valuey are the same because they are simple
//data types. They are immutable and simple. They don't
//have complex structures. They are just pure value.

//deepEqual
//takes two values
//returns true only is they are the same value
//or objects with the same properties

function deepEqual(x, y){

  if (x.value == y.value) {
    return true;
  }

  else {
    return false;
  }
}
