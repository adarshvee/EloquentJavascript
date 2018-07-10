/*Demo a simple higher order function */
function greaterThan(n) {
  return m => m > n;
}

greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));
//true
