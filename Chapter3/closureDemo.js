function wrapValue(n) {
  let local = 2;
  return () => local;
}

let wrap1 = wrapValue(2);
let wrap2 = wrapValue(3);
console.log(wrap1());
