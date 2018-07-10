/*A simple function that shows how we can pass around functions in JS */

function repeatAction(action, times) {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
}

repeatAction(console.log, 3);

let labels = [];
repeatAction(i => {labels.push(`Unit ${i}`);}, 5);
console.log(labels);
