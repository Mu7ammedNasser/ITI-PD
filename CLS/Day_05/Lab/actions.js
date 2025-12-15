// 1- Make a function that takes date string as a parameter, and returns the Day
// name (Saturday, Sunday,…) of the given date.

// function getDayNAme(dateString) {
//   var arr = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var date = new Date(dateString);
//   return arr[date.getDay()];
// }

// console.log(getDayNAme(prompt("Enter a date string to get the day name:")));

// 4.1. Create a function that accepts only 2 parameters and throw exception if number of
// parameters either less than or exceeds 2 parameters

// function checkparameter(x, y) {
//   if (arguments.length !== 2) {
//     throw "this is toooooo much";
//   } else {
//     console.log("suitable number of params");
//   }
// }

// checkparameter(10, 30);
// checkparameter(10, 20, 30);

// 4.2. Write your own function that can add n values ensure that all passing parameters are
// numerical values only

// function sumInt() {
//   sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== 'number') throw "all numbers should be numaric";
//     else {
//       sum += arguments[i];
//     }
//   }
//   return sum;
// }

// console.log(sumInt());

// 4.3. Write a function that takes any number of parameters and returns them reversed using
// array’s reverse function.

// function reverse() {
//   for (var i = arguments.length; i >= 0; i--) {
//     console.log(arguments[i]);
//   }
// }

// reverse(20, 60, 80, 40, 50, 2, 5, 8, 96, 5);
