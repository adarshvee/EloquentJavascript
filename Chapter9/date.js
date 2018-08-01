console.log(new Date());
//Tue Jul 31 2018 16:45:42 GMT-0400 (Eastern Daylight Time)

console.log(new Date(2009, 11, 3));
//Thu Dec 03 2009 00:00:00 GMT-0500 (Eastern Standard Time)

//arguements - year, month (from 0), date, hour, min, sec, ms
console.log(new Date(1989, 4, 27, 12, 59, 59, 999 ))
//Sat May 27 1989 12:59:59 GMT-0400 (Eastern Daylight Time)

//Get number of ms from 1970
console.log((new Date()).getTime());
//1533070397889

//Another way to get this is Date.now
console.log((new Date()).getTime() == Date.now());
//true
