//This would have been my solution if I abided by the requirement
//of using seven console logs
let row = "";

for (i = 0; i < 7; i++){
  row+= "#";
  console.log(row);
}

//I saw the solution though and know it's this
for (let line = "#"; line.length < 8; line += "#"){
  console.log(line);
}

//I guess my difficulty in understanding it is avoiding mutation
//I thought bindings grasping other values was a feature
//i.e

let binding = initial value;

binding is manipulated here in a code block, grasping to different values

return binding;

//Because I see the above pattern being used often in solutions and it
//is fairly intuitive to me

//The right solution is a much cleaner code but I don't get how I make
//the jump from the first solution to the book solution
//I get leaving the counter variable in the for loop
//but what is less intuitive for me is using the row binding in the initialize
//part

//------------------------------------------------------------------------------
function textForRow(numberOfHash){
  let row = "";

  for(i = 0; i < numberOfHash; i++){
    row+= "#";
  }
  console.log(row);
}

//Making seven calls for textForRow;
for(i = 1; i <= 7; i++){
  textForRow(i);
}

//Isn't using textForRow basically the first solution?
//but longer?
//Is it just to make sure that you know definitively how many hashes there are

//Is the lesson having a meaningful bindings?

//Possibly to have flexibility?
//Do stuff like this?
textForRow(2);
textForRow(3);
textForRow(5);
textForRow(5);
textForRow(3);
textForRow(2);
