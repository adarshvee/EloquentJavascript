let empty = {};

console.log(empty.toString());
//[object Object]

console.log(Object.getPrototypeOf(empty));
//object

console.log(Object.getPrototypeOf(empty) == Object.prototype)
//true

console.log(Object.getPrototypeOf(Object.prototype));
//null

function doNothing() {
  //
}

console.log(Object.getPrototypeOf(doNothing));
//ƒ () { [native code] }

let arr = [1, 2]
console.log(Object.getPrototypeOf(arr));
//[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]

console.log(Object.getPrototypeOf(Math.max) == Function.prototype)
//true

console.log(Object.getPrototypeOf([]) == Array.prototype)
// true
