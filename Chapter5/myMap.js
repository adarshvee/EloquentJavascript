function map(array, transform) {
  let results = [];
  for (let el of array) {
    results.push(transform(el));
  }
  return results;
}

console.log(map(SCRIPTS, script => script.name));

//Using inbuilt function
console.log(SCRIPTS.map(script => script.name));
