//Exercise 1 from Eloquent JS
/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
let hashes = ""
for (let counter = 1; counter <= 7; counter++ ) {
  hashes += "#";
  console.log(hashes);
}

//More efficient below :
/*
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
*/
