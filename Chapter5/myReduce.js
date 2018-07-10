function reduce(array, combine, start) {
  let current = start;
  for (let el of array) {
    current = combine(current, el);
  }
  return current;
}
//Reduce for finding sum
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0))
//Reduce for finding maximum element
console.log(reduce([1, 3, 2,  4, 5], (a, b) => a > b ? a : b, 0))

//Using in-built function
[1, 2, 3, 4, 5].reduce((a, b) => a + b, 0)
//15
[10, 5, 122, 4, 2].reduce((a, b) => a > b ? a : b, 0)
//122

//Reduce to find the script with most characters
function characterCount(script) {
  //Destructure the range array, add it to the total char count and return reduced value
  return script.ranges.reduce((a, [from, to]) => a + to - from, 0);
}

//Reduce using character count function and ternary comaprision
SCRIPTS.reduce((curr, next) => characterCount(next) > characterCount(curr) ? next : curr );
