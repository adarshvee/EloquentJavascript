//Version 1 of object.
let day1 = {
            squirrel : false,
            events : ["work", "touched tree", "pizza", "running"]
          };
console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
//Can dynamically add properties like below
day1.wolf = false;
console.log(day1.wolf);
// -> false

//Version 2 to represent the Journal
let journal = [
  {
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running"]
  },
  {
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running"]
  },
  {
    squirrel : true,
    events : ["peanuts", "touched tree", "pizza", "running"]
  }
]
