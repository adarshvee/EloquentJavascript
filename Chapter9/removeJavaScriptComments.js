//Attempting to write a function that removes all comments from JS file
//Attempt # 1
//[^] - any character not in empty string. Using . does not replace new lines
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /*2 */3"));
// → 1 + 3
console.log(stripComments("x = 10; //ten!"));
//x = 10;
console.log(stripComments("1 /*a */ + /* b */ 1"));
//1 1
//Because of backtracking, the engine first tries to match the full string and keeps repeating
//from the end. This identifies the last */, instead of each closing */
//This is because repetition operators are greedy. We can make them non-greedy by adding ? after these operators
function stripComments(code) {
  return code.replace(/\/\/.*?|\/\*[^]*?\*\//g, "");
}
//1  +  1
