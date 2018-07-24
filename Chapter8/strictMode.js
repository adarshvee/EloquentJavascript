//When you do not use strict mode, JS automatically creates a global binding
function canYouSpotTheBug() {
  for (i = 0; i < 10; i++) {
    console.log("Hey");
  }
}
canYouSpotTheBug();
//Prints Hey 10 times
  function canYouSpotTheProblem() {
    "use strict";
    for (k = 0; k < 10; k++) {
      console.log("Hey");
    }
  }

canYouSpotTheProblem();
//Uncaught ReferenceError: k is not defined
