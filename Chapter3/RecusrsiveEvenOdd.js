/*Excercise 2
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/
function recursiveEvenOrOdd(number) {
  if (number == 0) return 'Even';
  else if (number == 1) return 'Odd';
  else return recursiveEvenOrOdd(number - 2);
}
console.log(recursiveEvenOrOdd(50));
//Even
console.log(recursiveEvenOrOdd(75));
//Odd
console.log(recursiveEvenOrOdd(-1));
//Stack overflow error

/* Fix error for negative numbers */
function recursiveEvenOrOdd(number) {
  if (number == 0) return 'Even';
  else if (number == 1) return 'Odd';
  else return number > 0 ? recursiveEvenOrOdd(number - 2) : recursiveEvenOrOdd(number + 2);

}
