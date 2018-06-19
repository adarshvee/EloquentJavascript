const power = function(base, exponent) {
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

//Arrow function notation below

const anotherPower = (base, exponent) => {
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result = result * base;
  }
  return result;
}
