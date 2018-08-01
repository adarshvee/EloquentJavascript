// \b is to ensure that the regex match occurs only within the boundaries of an alphanumeric character
console.log(/cat/.test("concatenate"));
//true
console.log(/\bcat\b/.test("concatenate"));
//false
console.log(/\bcat\b/.test("the cat is out of the bag"));
//true

//Use or to match with multiple possible patterns
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
//true
console.log(animalCount.test("1 pig"));
//true
