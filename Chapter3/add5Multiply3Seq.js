/*
Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3,
an infinite set of numbers can be produced. How would you write a function that, given a number,
tries to find a sequence of such additions and multiplications that produces that number?

For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice,
whereas the number 15 cannot be reached at all.
*/
//My solution below :
function findSol(target) {
  function find(current, historyText) {
    if (current == target) return historyText;
    else if (current > target) return null;
    else {
      return find(current + 5, `(${historyText} + 5)`) || find(current *3, `(${historyText} * 3)`);
    }
  }
  return find(1, "1");
}
