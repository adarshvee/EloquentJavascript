function multiplier(factor) {
  return number => number * factor;
}
let thrice = multiplier(3);
console.log(thrice(10));
