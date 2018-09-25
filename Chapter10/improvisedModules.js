//Until 2015, JS did not have a way to define modules. People used workarounds. Such as
const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
    name(number) {return names[number];},
    number(name) {return names.indexOf(name);}
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
//Sunday
