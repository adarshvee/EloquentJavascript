//the string.replace function can take in a regex as arguement.
//The first match is replaced
console.log("Borobudur".replace(/[ou]/,"a"));
//Barobudur
//Using g at the end of the regex replaces all instances of the pattern
console.log("Borobudur".replace(/[ou]/g, "a"))
//Barabadar

//The power of replace is that we can refer to the matched text. Assume we have a list of names seperated by newline
console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Phillip".replace(/(\w+), (\w+)/g, "$2 $1"))
/*
Barbara Liskov
John McCarthy
Phillip Wadler
*/

//It is possible to pass a function as the second arguement. For each match, the function's return value is used to
//replace
let s = "the cia and the fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
            str => str.toUpperCase()));
//the CIA and the FBI

//one more example
let stock = "1 lemon, 3 cabbages and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { //singular when 1 is left
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
//no lemon, 2 cabbages and 100 eggs
