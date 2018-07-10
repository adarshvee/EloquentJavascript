function filter(array, test) {
  passed = [];
  for (let el of array) {
    if (test(el)) passed.push(el);
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));

// Using in-built method
console.log(SCRIPTS.filter(script => script.living));
