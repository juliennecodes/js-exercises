// class Box {
//   constructor(locked){
//     this.locked = locked;
//     _content: [];
//   }
//
//   unlock(){
//     this.locked = false;
//   }
//
//   lock(){
//     this.locked = true;
//   }
//
//   get content(){
//     if(this.locked) throw new Error("Locked!");
//     return this._content;
//   }
// }
//
// let box = new Box(true);

// function withBoxUnlocked(doSomething){
//   try {
//     console.log("I'm unlocking the box.");
//     box.unlock();
//     console.log(box);
//     doSomething();
//   } finally {
//     console.log("I'm locking the box again.");
//     box.lock();
//     console.log(box);
//   }
// }

let box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(doSomething){
  try {
    unlockTheBox();
    doSomething();
    console.log(`Box contains ${box.content}.`);
  } finally {
    lockTheBox();
  }
}

function unlockTheBox(){
  console.log("I'm unlocking the box.");
  box.unlock();
}

function lockTheBox(){
  console.log("I'm locking the box again.");
  box.lock();
}

//return when it resolves into a value
//no return needed for side effects

//What's the class version of box when there is a private property?
//Is it still in the constructor?

//I'm still not sure about catch
//Am I supposed to fix the error right away?
//Leave it as is?
