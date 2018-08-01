\\Regex to test the datetime format 01-39-2010 14:20
let datetime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(datetime.test("01-39-2010 14:20"));
//true
console.log(datetime.test("01-Jan-2010 14:20"));
//false

// Use ^ for not
let notBinary = /[^01]/;
console.log(notBinary.test("01010001110101"));
//false
console.log(notBinary.test("01010190010101"));
//true

//+ sign for repeated term
console.log(/'\d+'/.test("'234'"))
//true

//Square bracket for any of the characters to match
console.log(/'[\D]'/.test("'234'"))
//true
console.log(/'\d*'/.test("'234'"))
//true
console.log(/'\d*'/.test("''"))
//true

//? for 0 or 1 time
let neighbor = /neighbou?r/
console.log(neighbor.test('neighbor'));
//true
console.log(neighbor.test('neighbor'));
//true
console.log(neighbor.test('neighbouur'));
//False

//{} to say how many times a pattern must occur
let dateRegEx = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(dateRegEx.test("01-39-2010 14:20"));
//true

//() for grouping subexpressions. Last character "i" to make regex case insensitive 
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohooooohoohooo"));
//true
