//exercise 3
//First Part
/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
let output = "";
for (let i = 1; i <=8; i++) {
  for (let j = 1; j <= 8; j++) {
    if (i % 2 == j % 2) output += " ";
    else output += "#";
  }
  output += "\n";
}
console.log(output)
//Part 2
/*
When you have a program that generates this pattern, define a binding size = 8 and change the program 
so that it works for any size, outputting a grid of the given width and height.
*/
let output = "";
const SIZE = 8;
for (let i = 1; i <=SIZE; i++) {
  for (let j = 1; j <= SIZE; j++) {
    if (i % 2 == j % 2) output += " ";
    else output += "#";
  }
  output += "\n";
}
console.log(output)
