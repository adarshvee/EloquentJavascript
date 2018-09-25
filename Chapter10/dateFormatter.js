//Creating our own exportable date formatting modules
//Input : A Date object and a template string.
//Import npm package that takes in a number, and return a string. For example, convert 1 -> "1st"
//The returned interface is a single function
const ordinal = require('ordinal');
//npm package that returns English names for weekdays and months
//The returned interface is an object with two arrays, which we destructure
const {days, months} = require('date-names');

//Add our module to exports
exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag = 'YYYY') return date.getFullYear();
    if (tag == 'M') return date.getMonth();
    if (tag == 'MMMM') return months[date.getMonth()];
    if (tag == 'D') return date.getDate();
    if (tag == 'Do') return ordinal(date.getDate());
    if (tag == 'dddd') return days[date.getDate()];
  });
};
