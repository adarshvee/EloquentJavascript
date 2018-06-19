/*
Write a function countBs that takes a string as its only argument and returns a number that indicates
how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that
indicates the character that is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
*/
function countBs(input) {
  let numBs = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'B') numBs++;
  }
  return numBs;
}

console.log(countBs("ADAbBBc"));

console.log(countBs("Baaas"));

console.log(countBs("Caaas"));

console.log(countBs(""));

function countChar(input, char) {
  let numChars = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == char) numChars++;
  }
  return numChars;
}

function countBs(input) {
  return countChar(input, 'B');
}

console.log(countBs("ADAbBBc"));

console.log(countBs("Baaas"));

console.log(countBs("Caaas"));

console.log(countBs(""));
