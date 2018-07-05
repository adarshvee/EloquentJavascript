/* This program demonstrates the use of REST parameters.
In Java, these are called varargs where the number of parameters can vary
*/
function max(...numbers){
  let max = -Infinity;
  for (num of numbers) {
    if (num > max) max = num;
  }
  return max;
}
console.log(max(4,-3,5,2,7,4))
//7
