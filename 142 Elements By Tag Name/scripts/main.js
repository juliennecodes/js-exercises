//function takes a node and a tag name
//return an array containing all descendant element nodes with the given tag name

// function byTagName(node, tagName){
//   return node.getElementsByTagName(tagName);
// }
//
byTagName(document.body, "h1").length;
byTagName(document.body, "span").length;

let paragraph = document.querySelector("p");
byTagName(paragraph, "span").length;

//Oh, you're supposed to make your own version of getElementsByTagName. ok
function byTagName(node, tagName){
  let descendants = node.children; //I think this only returns immediate though
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

let descendants = [];

function getDescendants(node){
  if (hasChildren(node)){
    for (let nodeChild of node.children){
      getDescendants(nodeChild)
    }
  }

  else {
    descendants.push(node)
  }

  return descendants;
}

//why nodes? Can't I think of them as elements?
//what additional meaning does node bring that element doesn't indicate?

function hasChildren(x){
  return x.children.length > 0;
}

//------------------------------------------------------------------------------
//Redo with descendants instead of direct children
function byTagName(node, tagName){
  let descendants = getDescendants(node); //I think this only returns immediate though
  let wantedTags = [];

  for(let descendant of descendants){
    if(descendant.nodeName.toLowerCase() === tagName){
      wantedTags.push(descendant);
    }
  }

  return wantedTags;
}
//------------------------------------------------------------------------------
//Problem
//because descendants is a global binding, every getDescendants call adds onto it
