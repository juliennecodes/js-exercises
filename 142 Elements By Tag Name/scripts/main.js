function byTagName(node, tagName){
  let descendants = getChildren(node);
  let wantedTags = [];

  for(let descendant of descendants){
    if(descendant.nodeName.toLowerCase() === tagName){
      wantedTags.push(descendant);
    }
  }
  return wantedTags;
}
//------------------------------------------------------------------------------
function hasChildren(x){
  return x.children.length > 0;
}

function getChildren(node){
  let children = [];

  if (hasChildren(node)){
    let nodeChildren = Array.from(node.children);
    for(let nodeChild of nodeChildren){
      children.push(nodeChild);
      if(hasChildren(nodeChild)){
        getChildrenOfChildren(children);
      }
    }//for
  }//if has children

  return children;
}//get getChildren

function getChildrenOfChildren(childrenArray){
  for(let child of childrenArray){
    let nodeChildren = getChildren(child);
    for(let child of nodeChildren){
      childrenArray.push(child);
    }
  }
}
//------------------------------------------------------------------------------
let body = document.body;
byTagName(body, "h1");

byTagName(body, "h1")[0];

byTagName(body, "span");
