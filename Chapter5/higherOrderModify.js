/* A function that takes in another function as paramter and modifies it
*/
function noisy(f) {
  return (...args) => {
    console.log("Calling with ", args);
    let result = f(...args);
    console.log("Called with ", args, " , returned ", result);
    return result;
  }
}

noisy(Math.min)(3, 2, 1);
//Calling with  (3) [3, 2, 1]
//Called with  (3) [3, 2, 1]  , returned  1
