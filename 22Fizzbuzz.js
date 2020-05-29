for (number = 1; number <= 100; number++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }

  else if (number % 3 == 0) {
    console.log("Fizz");
  }

  else if (number % 5 == 0) {
    console.log("Buzz");
  }

  else {
    console.log(number);
  }
}

//Split the calculation of fizzbuzz from looping and logging

// Calculation of FizzBuzz
function isDivByThree(number) {
  return number % 3 === 0;
}

function isDivByFive(number) {
  return number % 5 === 0;
}

//Looping and logging
for (number = 1; number <= 100; number++){
  if (isDivByThree(number) && isDivByFive(number)) {
    console.log("Fizzbuzz");
  }

  else if (isDivByThree(number)) { console.log("Fizz");}

  else if (isDivByFive(number)) {console.log("Buzz");}

  else {
    console.log(number);
  }
}
