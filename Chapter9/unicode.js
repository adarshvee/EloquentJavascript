//JS does not deal well with other languages
//Also, regex works on code units instead of characters
console.log(/🍎{3}/.test("🍎🍎🍎"));
//false
console.log(/<.>/.test("<🌹>"));
//false
//Adding u indicator to regex makes it good for unicode
console.log(/<.>/u.test("<🌹>"))
//true
