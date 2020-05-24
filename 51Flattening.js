// Use the reduce method
// in combination with the concat method to
// “flatten” an array of arrays into
// a single array that has all the elements of the original arrays.

let cookies = ["chocolate-chip cookie", "linzer cookie", "macadamia and white chocolate cookie", "shortbread cookie", "biscotti", "hansel and gretel", "oreo"];

let cakes = ["chocolate cake", "blackforest cake", "swiss roll", "red velvet cake", "coffee cake"];

let puddings = ["custard", "chocolate mousse", "tapioca pudding", "ride pudding"];

//reduce method
//reduces an array into a single value
//array.reduce(function, optional start value);

//concat method
//merges two or more arrays
//array1.concat(array2);

//what of multiples?
let desserts = cookies.concat(cakes);

let desserts = cookies.concat(cakes, puddings);

//Okay, so multiples is
//array1.concat(array2, array3);

//------------------------------------------------------------------------------
//So flatten an array of arrays into a single array
let desserts = [cookies, cakes, puddings];

//Currently, desserts return
(3) [Array(7), Array(5), Array(4)];

//What you want is
(16) ["chocolate-chip cookie", "linzer cookie", "macadamia and white chocolate cookie", "shortbread cookie", "biscotti", "hansel and gretel", "oreo", "chocolate cake", "blackforest cake", "swiss roll", "red velvet cake", "coffee cake", "custard", "chocolate mousse", "tapioca pudding", "ride pudding"];

//How do you do that?

//I mean I can do that with the concat method alone.
//Where do I need reduce?

//Oh to combine the individual items like a sum but using words?
cookies.reduce(flatten);

function flatten(a, b){
  return a + ", " +  b;
}

function flattenArray(array){
  let flattened = array.reduce(flatten);

  console.log(flattened);
}

flattenArray(cookies);

//Okay, so you have an array that have arrays inside them
//first you concatenate the arrays
//then you flatten it

//CONCATENATING THE ARRAY
//currently
let desserts = [cookies, cakes, puddings];

//you want the desserts to be a single array instead of 3
let desserts = cookies.concat(cakes, puddings);

//now desserts return
(16) ["chocolate-chip cookie", "linzer cookie", "macadamia and white chocolate cookie", "shortbread cookie", "biscotti", "hansel and gretel", "oreo", "chocolate cake", "blackforest cake", "swiss roll", "red velvet cake", "coffee cake", "custard", "chocolate mousse", "tapioca pudding", "ride pudding"]

//FLATTEN ARRAY
function flattenDesserts(){
  let flattened = desserts.reduce(flatten);

  console.log(flattened);
}

//WRITING FLATTEN FUNCTION FOR REDUCE METHOD
function flatten(a, b){
  return a + ", " + b;
}

//making flatten arrays general
function flattenArray(array){
  let flattened = array.reduce(flatten);

  console.log(flattened);
}

//FLATTENING DESSERT
flattenArray(desserts);
