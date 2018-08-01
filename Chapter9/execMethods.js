//Apart from the test method, there is also an "exec" method that either returns null If there is no match, or an object containing
//information about the match if there is a match
let match = /\d+/.exec("One two 100");
console.log(match);
//["100", index: 8, input: "One two 100", groups: undefined]
console.log(match.index);
//8

console.log("one two 100".match(/\d+/));
//["100", index: 8, input: "one two 100", groups: undefined]

//When you have groups in regex, the matching text for the groups is displayed too
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
//(2) ["'hello'", "hello", index: 9, input: "she said 'hello'", groups: undefined]

//When a group is matched multiple times, only the last one us held
console.log(/bad(ly)?/.exec("bad"));
["bad", undefined, index: 0, input: "bad", groups: undefined]
//(ly) does not have a match above
console.log(/(\d)+/.exec("123"));
//["123", "3", index: 0, input: "123", groups: undefined]
