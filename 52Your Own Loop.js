// Write a higher-order function loop that provides something like a for
// loop statement.
// It takes a value, a test function, an update function, and a body function.
// Each iteration, it first runs the test function on the current loop value
// and stops if that returns false.
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and starts
// from the beginning.

//Plain
function hof(value, testFunc, updateFunc, bodyFunc){
  for(iteration){
    testFunc(iteration){
      //only continues when it returns true
      if(true){
        bodyFunc(value){
          let value = transform the value
        };

        updateFunc(value){
          return value;
        }
      }
    }

  }
}

function assessJail(array, testEvil, goToJail, getName){
  for (element of array){
    testEvil(element.evil){
      if(element.evil > 7){
        getName(element){
          let name = element.name;

          getName(){
            console.log(name + " is headed for jail.");
          }
        }
      }
    }
  }
}

function hof(value, testFunc, bodyFunc, updateFunc){
  for(element of value){
    if(testFunc(element)){
      bodyFunc();

      updateFunc();
    }
  }
}
