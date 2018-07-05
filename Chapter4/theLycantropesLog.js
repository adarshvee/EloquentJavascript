let journal = [];

function addEntry(events, squirell) {
  journal.push({events, squirell})
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);

//Function to calculate phi value
//Input is a 4 element array (not enforced), with the bit representation matching the frequebcy table
//For example, element 3 represents 11 in binary, and is 1 for squirell (first position), and 1 for pizza (second)
//This function takes in freq table for one event and calculates phi coefficient, which represents Correlation
function phi(table) {
  return (table[3] * table[0] - table[1] * table[2]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1])
   * (table[1] + table[3]) * (table[0] + table[2]))
}

//A more elegant way to write phi function, using expanded array as binding
function phi2([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01)/Math.sqrt((n10 + n11) * (n00 + n11) * (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1]))
//0.06859943405700354

//Function that takes in a specific event, looks through the entire journal, and returns the freq table
function extractTableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i=0; i < journal.length; i++) {
    let entry = journal[i];
    let index = 0;
    if (entry.events.includes(event)) index += 1; //event is true, squirrel to be checked. 2nd element of array
    if (entry.squirrel) index += 2; //Squirrel also true. 4th element of array
    table[index] += 1; //Increment count of appropriate cell by 1
  }
  return table;
}

console.log(extractTableFor("pizza", JOURNAL));
// (4) [76, 9, 4, 1]

//Function that looks through the entire journal to get list of unique events
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) events.push(event);
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));
//(26) ["carrot", "exercise", "weekend", "bread", "pudding", "brushed teeth", "touched tree", "nachos", "cycling",
//"brussel sprouts", "ice cream", "computer", "potatoes", "candy", "dentist", "running", "pizza", "work", "beer",
//"cauliflower", "lasagna", "lettuce", "television", "spaghetti", "reading", "peanuts"]

//Check correlation for every event
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(extractTableFor(event, JOURNAL)));
}

//Filter out lower correlations
for (let event of journalEvents(JOURNAL)) {
  let corr = phi(extractTableFor(event, JOURNAL));
  if (corr > 0.1 || corr < -0.1) {
    console.log(event + ":", corr);
  }
}

//Peanuts has a +ve corr, whereas brushing has negative. Extract days when he ate peanuts and did not brush
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}

console.log("Peanut teeth :", phi(extractTableFor("peanut teeth", JOURNAL)));
//Correlation : 1
