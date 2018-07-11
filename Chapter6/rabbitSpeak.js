/* A simple object that demonstrates this and a few other stuff */
function speak(line) {
  console.log(`The ${this.type} says "${line}"`);
}

whiteRabbit = {type : "white", speak};
redRabbit = {type : "red", speak};

whiteRabbit.speak("Hello there, I look better!");
//The white says "Hello there, I look better!"
redRabbit.speak("Only when I am not around!");
//The red says "Only when I am not around!"

//Every function (which are objects) has a call method, which will take in an object as a param.
//Any occurence of 'this' within the function will be replaced with this object
speak.call(whiteRabbit, "Well, she doesn't even exist :)");
//The white says "Well, she doesn't even exist :)"

//Let's be adventerous and see if we can override 'this' using the call method
whiteRabbit.speak.call(redRabbit, "Hehe. I am red impersonating white");
//The red says "Hehe. I am red impersonating white"

//this works differently when used with arrow functions
function normalize() {
  console.log(this.coords.map(n => n/this.length));
}
normalize.call({coords : [0, 2, 5], length : 5});
//[0, 0.4, 1]
//this will not work if we use function keyword inside the map function, as this would be null


let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  }
};

let greenRabbit = Object.create(protoRabbit);
greenRabbit.type = "green";
greenRabbit.speak("Hey I am new-born");

//A constructor that encapsulates object creation
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}


//Use a constructor, and JS automatically binds "this" and maps the return type
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says "${line}"`);
}

let wierdRabbit = new Rabbit("wierd");

console.log(Object.getPrototypeOf(Rabbit));
console.log(Rabbit.prototype);
console.log(Object.getPrototypeOf(Rabbit) == Rabbit.prototype)
//false

console.log(Object.getPrototypeOf(wierdRabbit) == Rabbit.prototype);
//true

//Use class notation
class RabbitClass {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  }
}

let killerRabbit = new RabbitClass("killer");
let blackRabbit = new RabbitClass("black");

//Using class keyword in expressions
let obj = new class{hello(){console.log("Hello!")}};
obj.hello();

//Overriding properties added to dervived classes
RabbitClass.prototype.teeth = "small";
console.log(killerRabbit.teeth);
//small

killerRabbit.teeth = "long, sharp and useful";
console.log(killerRabbit.teeth);
//long, sharp and useful
console.log(blackRabbit.teeth);
//small
console.log(RabbitClass.prototype.teeth);
//small
m
