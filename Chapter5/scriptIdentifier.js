//Program to manipulate the SCRIPTS.js file

//Function to calculate average
function average(array) {
  return array.reduce((a, b) => a + b)/array.length;
}

//Average of living scripts, reads like a pipeline
console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
//Average of dead scripts, reads like a pipeline
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

//Function to identify the script used based on the ASCII code of the Chinese_characters
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      }
      ))
      {
          return script;
      }
  }
  return null;
}
console.log(characterScript(121));
//{name: "Latin", ranges: Array(31), direction: "ltr", year: -700, living: false, …}

//Function to categorize a collection based on given conditions
function countBy(items, groupName) {
  let counts = [];
  for (item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count : 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
//0:{name: false, count: 2}
//1:{name: true, count: 3}

//A function that uses countBy to say what scripts are written
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");
  let total = scripts.reduce((n, {count}) => n+count, 0);
  if (total == 0) return "No scripts found";
  return scripts.map(({name, count}) => {return `${Math.round(count * 100/total)}% ${name}`;}).join(", ");
}
