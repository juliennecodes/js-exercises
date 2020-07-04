class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b){
  if (Math.random() < 0.2) {
    return a * b;
  }

  else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

//for(;;) version
function reliableMultiply(a, b){
  for (;;){
    try {
      return primitiveMultiply(a, b);
    }

    catch(e){
      console.log(e);
      //do you always have to do something with e?
      //can you leave the catch block empty?

      //I tried to comment out the console log and it still works
      //what's the purpose of catch, just to signal to the coder that
      //there is an error in this area and to fix it?

      //I tried to leave out catch block entirely but apparently, try needs
      //to be followed by either a catch or a finally
    }
  }
}

//While true version
function reliableMultiply(a, b){
  while (true) {
    try {
      return primitiveMultiply(a, b);
    }

    catch(e){
      console.log(e);
    }
  }
}

//So the lesson here is using the for(;;) construct?
//It runs the code and makes sure that the right scenario happens?
//It makes sure that the loop only ends when the error scenario does not happen
//This is achieved through the return being only in the try block?

//Right scenario is

//I'm probably thinking of try and catch block in the wrong way
//I'm only seeing it as an error handling aside thing but in this exercise, it's being
//used as a body of an actual function

//Okay so right scenario is
//primitiveMultiply multiplies the numbers and gets a value in return

//Error scenario is
//primitiveMultiply multiplies the numbers and a new error object is created

//wait, why create a new instance error object when all it does is give you
//a unique dialogue?
//can't you just give that unique dialogue to the generic error object?

//anyways, primitiveMultiply multiplies the numbers and a new error object is created

//in the context of the try block
//try tries the statements, which is to call the primitiveMultiply
//primitiveMultiply decides to act klunky and give an error

//wait, what comes first, throw or error?
//are exceptions and errors the same thing?

//anyways, an exception is raised, so you exit the try block and move to the
//catch block
//catch block does something with the exception

//then the loop starts the try catch block thing again

//it only exits when primitiveMultiply does not raise an exception, thus NOT
//triggering the catch block, meaning the try block can finish its code in peace
//the try block finishing its code without exception returns a value, thus
//breaking the loop?
