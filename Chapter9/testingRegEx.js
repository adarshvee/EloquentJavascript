let re1 = new RegExp("abc");
let re2 = "/abc/";

console.log(re1.test("abcde"));
//true
console.log(re2.test("abxde"));
//TypeError : re2.test is not a function
//The error is thrown because RegEx is not declared within String. It is declared as below

console.log(/abc/.test("abxde"));
//False

console.log(/[0123456789]/.test("in 1992"));
//true
console.log(/[0-9]/.test("in 1992"));
//true
