//Can we use plain objects as a substitute for maps?
let ages = {Boris : 29, Liang : 22, Julia : 62};

console.log(`Julia is ${ages['Julia']}`);
//Julia is 62
console.log("Do we know Jack's age?", 'Jack' in ages);
//Do we know Jack's age? false
console.log("Do we know toString's age?", 'toString' in ages);
//Do we know toString's age? true

//To avoid this, we can create an object with null prototype

console.log("toString" in Object.create(null));
//false

//Let's try creating a new map using this idea.
let ages2 = Object.create(null);
ages2 = {Boris : 29, Liang : 22, Julia : 62};

console.log("Do we know toString's age?", 'toString' in ages2);
//Still getting it as true. Why?
//Posted this query in StackOverflow. Solution 1
let ages3 = Object.create(null);
Object.assign(ages3, {Boris : 29, Liang : 22, Julia : 62});
console.log("Do we know toString's age?", 'toString' in ages3);
//An alternative is to assign ages.Boris = 29 and so on

//Use map data structure
let ageMap = new Map();
ageMap.set("Boris", 39);
ageMap.set("Liang", 22);
ageMap.set("Julia", 62);

console.log(`Julia is ${ageMap.get('Julia')}`);
//Julia is 62
console.log("Do we know Jack's age?", 'Jack' in ageMap);
//Do we know Jack's age? false
console.log(ageMap.has("toString"));
//false
console.log("Is toString still in the map's prototype?", 'toString' in ageMap);
//true

//Object.keys method does not return properties from the prototype chain
console.log(Object.key("ages"));
//(3) ["Boris", "Liang", "Julia"]

//Similar behaviour is shown by hasOwnProperty method
console.log({x : 1}.hasOwnProperty("x"));
//true
console.log({x : 1}.hasOwnProperty("toString"));
//false
