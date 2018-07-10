
function repeatAction(action, times) {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
}

function unless(test, then) {
  if (!test) then();
}

repeatAction(n => {
  unless(n % 2 == 0, () => {console.log(n, " is odd");})
} ,3)
