// //1- Try the following piece and write the answer

// const { StrictMode } = require("react");

// //a)
// var y;
// console.log(y);
// //b)
// console.log(y);
// //c)
// var x=10;
// var y = 20;
// console.log(y*x-2);
// //d)
// var y;
// console.log(typeof y);
// //e)
// var x = "1";
// var y = 2;
// console.log(x+y);
// //f)
// var x = 1;
// var y = true;
// console.log(x+y);

// 2- Ask the user to enter a message then display it using the different html
// heading tags (from <h1> to <h6>) using Loops. DO NOT write the header
// element explicitly in your script!
do{
    var message = prompt("Enter Your Name Please:");
}while(!message)


for (var i = 1; i <= 6; i++) {
  document.writeln(`<h${i}>${message}</h${i}>`);
}

// 3- Write a script that takes from the user n values and returns their sum, stop
// receiving values from user when he enters 0 or sum exceeds 100, check that
// the entered data is numeric and inform the user with the total sum of the
// entered values.

// var sum = 0;

// while (sum < 100) {
//   var res = prompt("Enter a number to add (enter 0 to stop):");
//   if (isNaN(res) || !res) {
//     console.log("Please enter a valid numeric value.");
//     continue;
//   }
//   sum += Number(res);
//   if (res == 0) {
//     console.log("You entered 0, to stop input.");
//     console.log("Total sum: " + sum);
//     break;
//   }
// }
// if (res >= 100) {
//   console.log("Sum exceeded 100.");
//   console.log("Total sum: " + sum);
// }

// 4- On contact page prompt user to enter his name, make sure that name is string,
// and let the user enter his birth year and make sure that it is a number, and it is
// less than 2010, and then calculate his age. For each prompt if user input valid
// show him next prompt, if not valid show him the same prompt again until user
// enters it correctly (use loops). And after validating user input, write all user
// input on the page in that format:
// Name: ahmed
// Birth year: 1981
// Age: 30

// var uName = "";
// var bYear = 0;
// while (!isNaN(uName)) {
//   uName = prompt("Please enter your name:");
//   if (!isNaN(uName)) {
//     console.log("ENTER A VALID NAME PLEASE!");
//     continue;
//   }
// }

// var currentYear = new Date().getFullYear();
// do {
//   bYear = prompt("Please enter your birth year:");
//   if (bYear > 2010) {
//     console.log("Enter a valid birth year greater than 2010 please!");
//     continue;
//   } else if (isNaN(bYear)) {
//     console.log("ENTER A VALID NUMBER PLEASE!");
//     continue;
//   }
// } while (isNaN(bYear) || !bYear || bYear > 2010 || bYear < 1900);

// console.log(`Name = ${uName}`);
// console.log(`Birth year = ${bYear}`);
// console.log(`Age = ${currentYear - bYear}`);
