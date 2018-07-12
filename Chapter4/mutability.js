const score = {visitors : 0, home : 0};
//this is allowed
score.visitors = 1;
//This is not
score = {visitor : 1, home : 0};
//Uncaught TypeError: Assignment to constant variable.
