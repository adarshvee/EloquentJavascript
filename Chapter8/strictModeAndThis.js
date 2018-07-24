//When you do not use strict mode, "this" refers to the global object
function Person(name) {this.name = name;}
let ferdinand = Person("Ferdinand"); //The missed new operator is the error here
console.log(name);
//Ferdinand
console.log(ferdinand);
//undefined

"use strict"
function Human(name) {this.name = name;}
let stephen = Human("Stephen");
//Uncaught TypeError: Cannot set property 'name' of undefined
