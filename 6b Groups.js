class Group {
  //creates an empty group
  constructor() {
    this.group = [];
  }

  //add method
  //adds value to group but only
  //if it isn't already a member
  add(value){
    if (!this.group.includes(value)){
      this.group.push(value);
    }
  }

  //delete method
  //delete removes its argument from the group,
  //if it was a member
  delete(value){
    if (this.group.includes(value)){
      this.group.pop(value);
    }
  }

  //has method
  //returns a boolean indicating whether the argument is a member of the group
  has(value){
    if (this.group.includes(value)){
      return true;
    }
    else {
      return false;
    }
  }

  //static method
  //takes an iterable object as argument
  //creates a group that contains all the values produced by iterating over it
  static from(iterable){
    let newGroup = new Group();

    for(let element of iterable){
      newGroup.push(element);
    }

    return newGroup;
  }
}

let g1 = new Group();

g1.add(12);
g1.add("cookies");
