//Excercise 4 from EJS chapter 4
/*The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the
typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into
account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.*/
function deepEqual(v1, v2) {
  if (v1 === v2) return true;
  if (v1 == null || v2 == null  || typeof v1 != "object" || typeof v2 != "object") return false;
  let v1Keys = Object.keys(v1);
  let v2Keys = Object.keys(v2);
  if (v1Keys.length != v2Keys.length) return false;
  for (let key of v1Keys) {
    if (!v2Keys.includes(key) || !deepEqual(v1[key], v2[key])) return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
