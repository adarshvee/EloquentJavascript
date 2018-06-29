//This snippet demos delete operator, and a few other object properties and methods
//The delete is used for deleting a property from an object
//The delete operator is not widely used, but it is available
let anObject = {left : 1, right : 2};
console.log(anObject.left);
// -> 1
delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject)
// true
console.log("right" in anObject)
// false
//Object.keys returns array of all property names
console.log(Object.keys(anObject))
//Object.assign to copy properties from one object to another
console.log(Object.assign(anObject, {up : 3, down : 2}))
