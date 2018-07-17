// 3rd Exercise in chapter 5
/*
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns
true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions,
one using a loop and one using the some method.
*/
function every1(arr, pred) {
  for (let el of arr) {
    if (!pred(el)) return false;
  }
  return true;
}

function every2(arr, pred) {
  return !arr.some(element => !pred(element));
}

console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
