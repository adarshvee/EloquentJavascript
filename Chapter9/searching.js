//JS has a search method that expects regex and returns the index of match
//There is not offset parameter though
console.log("  word".search(/\S/));
//2
console.log("  ".search(/\S/));
//-1

//Similarly, there is no offset param for the exec mehod, but there is a workaround
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
//4
console.log(pattern.lastIndex);
//5 - the lastIndex property is updated after a match. It is 0 when initially created

//Difference between global and sticky
//Sticky expects a match at the next lastIndex itself. Global looks for matches starting from the lastIndex
let global = /abc/g;
console.log(global.exec("xyz abc"));
//["abc", index: 4, input: "xyz abc", groups: undefined]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
//null

//Using shared regex for diff expressions may cause issues due to updating of lastIndex
let digit = /\d/g;

console.log(digit.exec("here it is : 1"));
//"1", index: 13, input: "here it is : 1", groups: undefined]
console.log(digit.exec("and now: 1"))
//null
//The first exec updates the index, and the second tries to continue with the updated lastIndex
