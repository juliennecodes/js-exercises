class PGroup {
  constructor(){
    this.items = [];
  }

  add(item) {
    let newGroup = new PGroup;
    newGroup.items = this.items.concat(item);
    return newGroup;
  }

  delete(item){
    let newGroup = new PGroup;
    newGroup.items = this.items.filter(i => i !== item);
    return newGroup;
  }

  has(item){
    return this.items.includes(item);
  }

  static get empty(){
    return new PGroup();
  }
}
