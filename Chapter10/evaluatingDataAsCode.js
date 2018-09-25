//The eval method allows us to execute a String as code. However it might cause problems in predictability
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
//2
console.log(x);
//1

//A slightly better way is to use the Function constructor, which takes in two Strings
//The first is a comma seperated list of param, the second is the function body
//This method gives its own scope and does not ruin the outer scope.
let plusOne = Function("n", "return n+1;");
console.log(plusOne(4));
//5
//We use this is modules
