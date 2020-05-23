// Fizzbuzz
let number = 0;
let counter = 0;
while (counter < 100) {
  number += 1;

  if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else if (number % 3 === 0 && number % 5 === 0) {
    console.log("Fizzbuzz");
  } else {
    console.log(number);
  }
  counter += 1;
}
