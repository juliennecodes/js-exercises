class Group {
  constructor() {
    this.items = [];
  }

  add(value){
    if (!this.items.includes(value)){this.items.push(value);}
  }

  delete(value){
    if (this.items.includes(value)){this.items.pop(value);}
  }

  has(value){
    if (this.items.includes(value)){return true;}
    else {return false;}
  }
}
//------------------------------------------------------------------------------
let g1 = new Group();
g1.add("cookies");
g1.add("red bean bread");
g1.add("taro sago");

//------------------------------------------------------------------------------
class GroupIterator {
  constructor(group){
    this.value = 0;
    this.group = group;
    //groupIterator creates an object with the properties of value and group
    //group is the object provided
    //in this case, g1Iterator.group is g1
    //g1.group is the actual array
    //maybe you should rename...
  }

  //g1 has a next method
  next(){
    if (this.value < this.group.items.length){
      // let value = {
      //     value: this.value,
      //     done: false
      //   };
      //
      //   value++;
      //
      //   return value;

      // console.log("just testing if the next method is working");
      this.value++;

      return {
        value: this.group.items[this.value],
        done: false
      }


      }

      else {
        return {
          done: true
        }

      }
  }
}
//------------------------------------------------------------------------------
// Group.prototype[Symbol.iterator] = function(){
//   return new GroupIterator(this)
// }
//I don't know what this does

//------------------------------------------------------------------------------
let g1Iterator = new GroupIterator(g1);

g1Iterator.next();

//------------------------------------------------------------------------------
//RESULTS
g1Iterator;
//returns
GroupIterator {value: 0, group: Group}


g1Iterator.group
//returns object with items property
Group {items: Array(3)}


g1Iterator.group.items
//returns array
(3) ["cookies", "red bean bread", "taro sago"]

//------------------------------------------------------------------------------
// //Wy doesn't it works? Isn't
// g1Iterator.group.items
// //this
// this.group.items
// //Note from the future, it works now. The problem was the code inside the if
// //condition
//------------------------------------------------------------------------------
g1Iterator.next();
//Okay, so the next method is working, it's the code inside that isn't

//------------------------------------------------------------------------------
//Okay, so the code works now
//but because return is ending the iteration, I'm having problems with incrementing
//If I add it before, the value starts at 1
//If I add it after, it doesn't get read.
