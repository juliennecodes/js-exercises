//Problem
//because descendants is a global binding, every getDescendants call adds onto it

//Redo with descendants instead of direct children
function byTagName(node, tagName){
  let descendants = getDescendants(node);
  let wantedTags = [];

  for(let descendant of descendants){
    if(descendant.nodeName.toLowerCase() === tagName){
      wantedTags.push(descendant);
    }
  }

  return wantedTags;
}
//------------------------------------------------------------------------------
//recursion?
//a way to explore nested structures?


function x(node, descendants){
  if (hasChildren(node)){
    descendants.concat(Array.from(node.children))// this is an error because it returns an HTML collection, I'm not sure if that is an array or not
    for (let nodeChild of Array.from(node.children)){
      x(nodeChild);
    }
  }

  else {
    descendants.push(node);
  }

}

//why nodes? Can't I think of them as elements?
//what additional meaning does node bring that element doesn't indicate?

function hasChildren(x){
  return x.children.length > 0;
}


//------------------------------------------------------------------------------
//how to keep global binding private
//have a function that returns the array
//so declare array
//do stuff with array
//return array

function getDescendants(node){
  let descendantsArray = [];

  //do stuff to fill descendants
  //result should be elements filling up descendants
  x(node, descendantsArray);

  return descendantsArray;
}

byTagName(document.body, "h1");

//------------------------------------------------------------------------------
//I don't think the descendantsArray is being passed properly
//an error shows up
// main.js:24 Uncaught TypeError: Cannot read property 'concat' of undefined
//     at x (main.js:24)
//     at x (main.js:26)
//     at getDescendants (main.js:56)
//     at byTagName (main.js:6)
//     at main.js:61
