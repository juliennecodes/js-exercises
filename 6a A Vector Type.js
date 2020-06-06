//class Vec takes x and y parameters
//creates Vec class
class Vec {
  constructor(x, y){
    if (typeof x === "number" && typeof y === "number"){
      this.x = x;
      this.y = y;
    } //if
  } //constructor
} //class Vec

//Creating an instance of Vec
let vectorOne = new Vec(1, 5);
let vectorTwo = new Vec(15, 3);

//------------------------------------------------------------------------------
//TESTING
//For testing purposes, making sure a named function can be passed as a
//method value
function testFunction(){
  return "You assigned a named function";
}

//I didn't add a parenthesis to testFunction because plus would be a method
//and you have to call it to run the assigned function
Vec.prototype.test = testFunction;

vectorOne.x;
vectorOne.test();
//------------------------------------------------------------------------------
//Give the Vec prototype two methods, plus and minus
//Assigns plus method to Vec prototype
Vec.prototype.plus = plus;

//Assigns minus method to Vec prototype
Vec.prototype.minus = minus;

//------------------------------------------------------------------------------

function plus(vector){
  //return vector
  //vector has sum of two vector's x and y values
  let sumX = this.x + vector.x;
  let sumY = this.y + vector.y;

  let sumVector = new Vec(sumX, sumY);
  return sumVector;
}

function minus(vector){
  //return vector
  //vector has the difference between two vector's x and y values
  let diffX = this.x - vector.x;
  let diffY = this.y - vector.y;

  let diffVector = new Vec(diffX, diffY);
  return diffVector;
}

//trying out method
vectorOne.plus(vectorTwo);
//------------------------------------------------------------------------------
//Getter property
//computes the length of the distance of the point(x, y) from the origin (0, 0)

Vec.prototype.length = () => {
  return (this.x ** 2) + (this.y ** 2);
}
//why does it return Nan

Vec.prototype.length = () => {
  return  "just testing if a function can be assigned";
}

vectorOne.length();
//So this works, I guess the problem is in the passing of the objects?

Vec.prototype = {
  get length() {
    return (this.x ** 2) + (this.y ** 2);
  }
}

//Okay so the function is okay, I just have to figure out how to put the
//getter in the prototype instead of the Vec class
class Vec {
  constructor(x, y){
    if (typeof x === "number" && typeof y === "number"){
      this.x = x;
      this.y = y;
    } //if
  } //constructor

  get length() {
    return (this.x ** 2) + (this.y ** 2);
  }
} //class Vec

//------------------------------------------------------------------------------
Vec.prototype.length = function() {
  return (this.x ** 2) + (this.y ** 2);
};()
//So this works but you have to call it with parenthesis
vectorOne.length();
//I think this defeats the purpose of get, which is supposed to execute
//the function when you look up the property

//So get is iike a property that get dynamically evaluated and presented as if
//the value was inputted straight away?
//------------------------------------------------------------------------------
//How to attach it to the prototype...hmmm...where can I insert get?
Vec.prototype
