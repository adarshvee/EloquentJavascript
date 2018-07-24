/*JS does not explicitely provide a way to catch exceptions specifically.
But we can hack-around that.
*/
class InputError extends Error{};

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toUpperCase() == "right") return "R";
  throw new InputError("Invalid direction : " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You choose", dir);
    break;
    catch(e) {
      if (e instanceof InputError) {
        console.log("Not a valid direction, try again");
      }
      else {throw e;}
    }
  }
}
