var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

// Chessboard
let binding = 8;
let counter = 0;

while (counter < binding) {
  if (counter === 0 || counter % 2 === 0) {
    console.log(" # # # #");
  } else {
    console.log("# # # # ");
  }

  counter++;
}
