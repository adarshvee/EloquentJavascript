function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2017"));
//Mon Jan 30 2017 00:00:00 GMT-0500 (Eastern Standard Time)
