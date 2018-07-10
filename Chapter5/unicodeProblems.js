//This program demonstarates the problems with Unicode in JS. Many common operations
//handle code points instead of character. Many unicode characters are made with two character points
//the charCodeAt returns code points. codePointAt returns the expected character.
let horseShoe = "🐴👟";
//undefined
console.log(horseShoe.length);
// 4
console.log(horseShoe[0]);
// �
undefined
console.log(horseShoe.charCodeAt(0));
//55357
console.log(horseShoe.codePointAt(0));
//128052
