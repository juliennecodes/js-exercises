//i is the iteration for each letter in a word
function countBs(word) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == "b") {
      console.log("B!")
    }
  }
}

//Now I'm going to add a b counter.
function countBs(word) {
  let b = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] == "b") {
      b += 1;
    }
  }
  return b;
}

// To make sure it only takes string
function countBs(word) {
  let b = 0;
  if (typeof word === "string") {

    for (i = 0; i < word.length; i++) {
      if (word[i] == "b" || word[i] == "B") {
        b += 1;
      }
    }
  }
  return b;
}

//Counting characters so it doesn't have to be b specific
function countChar(word, char) {
  let charCount = 0;
  if (typeof word === "string") {
    for (i = 0; i < word.length; i++) {
      if (word[i] == char) {
        charCount += 1;
      }
    }
  }

  return charCount;
}
