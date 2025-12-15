// 1.String object

// 1.1 Write a script to determine whether the entered string is palindrome or not. Ask the
// user whether to consider case of the entered string or not, handle both cases in your
// script i.e. RADAR NOON MOOM are palindrome.
// Note: raDaR is not a palindrome if user requested considering case of entered string.

// var res = prompt("Enter text to check palindrome: ");
// while (!res) {
//   var res = prompt("Enter text to check palindrome: ");
// }
// var flag = true;
// for (var i = 0; i < res.length; i++) {
//   if (res.charCodeAt(i) != res.charCodeAt(res.length - 1 - i)) {
//     document.write(`<h1>The entered string "${res}" is not palindrome<h1/>  `);
//     flag = false;
//     break;
//   }
// }
// if (flag) document.write(`<h1>The entered string "${res}" is palindrome<h1/> `);

// var res = prompt("Enter text to check palindrome: ");
// while (!res) {
//   var res = prompt("Enter text to check palindrome: ");
// }
// var caseSensitive = confirm("Do you want to consider case sensitivity?");
// var flag = true;
// var str = caseSensitive ? res : res.toLowerCase();
// palingdromeFlag = true;
// var arr = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//   //for each word in the array
//   for (var j = 0; j < arr[i].length; j++) {
//     if (arr[j].charCodeAt(j) != arr[j].charCodeAt(arr[j].length - 1 - j)) {
//       document.write(
//         `<h1>The entered string "${res}" is not palindrome<h1/>  `
//       );
//       palingdromeFlag = false;
//     }
//     break;
//   }
//   break;
// }
// if (palingdromeFlag)
//   document.write(`<h1>The entered string "${res}" is palindrome<h1/> `);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 1.2 write a script that accepts a string from user through prompt and count the number of
// ‘e’ characters in it.

// var res = prompt("Enter Text to count the Number of 'e': ");
// while (!res || !isNaN(res)) {
//   var res = prompt("Enter Text to count the Number of 'e': ");
// }
// res = res.toLowerCase();
// var counter = 0;
// for (var i = 0; i < res.length ; i++) {
//   if (res.charAt(i) === "e") counter++;
// }
// console.log(counter);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 1.3  Write a script that reads from the user his info; validates and displays it with a
// welcoming message.

// var namePattern = /^[A-Za-z]{3,}$/;
// var mobielPattern = /^(010|011|012|015)[0-9]{8}$/;
// var phonePattern = /^[0-9]{8}$/;
// var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// do {
//   var uName = prompt("Enter your Name: ");
//   if (uName == null) break;
// } while (!namePattern.test(uName) || uName.trim() === "");

// do {
//   var uMobile = prompt("Enter your Mobile Number: ");
//   if (uMobile == null) break;
// } while (!mobielPattern.test(uMobile) || uMobile.trim() === "");

// do {
//   var uPhone = prompt("Enter your Phone Number: ");
//   if (uPhone == null) break;
// } while (!phonePattern.test(uPhone) || uPhone.trim() === "");
// do {
//   var uEmail = prompt("Enter your Email: ");
//   if (uEmail == null) break;
// } while (!emailPattern.test(uEmail) || uEmail.trim() === "");
// if (uName ) {
    
// }
// document.write(`
//     <h1>Welcome ${uName} </h1>
//     <p>Mobile Number: ${uMobile} </p>
//     <p>Phone Number: ${uPhone} </p>
//     <p>Email: ${uEmail} </p>
// `);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 2. Math Object

// 2.1 Write a script that ask the user to Enter the value of a circle’s radius in order to calculate
// its area as shown in fig.

// do {
//   var radius = parseFloat(prompt("Enter the radius of the circle: "));
// } while (!radius || radius <= 0);
// var area = Math.PI * Math.pow(radius, 2);

// document.write(`
//     <h1>Area of Circle</h1>
//     <p>The area of circle with radius ${radius} is ${area.toFixed(
//   2
// )} Area unit</p>
// `);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 2.2 Enter another value to calculate its square root and alert the result as shown in fig.

// var value;
// do {
//   value = prompt("Enter a value to calculate its square root: ");
// } while (!value);

// var sqrt = Math.sqrt(value);
// alert(`The square root of ${value} is ${sqrt.toFixed(2)}`);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 3. Array Object

// 3.1 Fill an array of 3 elements from the user, and apply each of the following mathematical
// operations on it (+, *, /). Format the output as shown in Fig.

// var arr = [];
// var i = 0;
// do {
//   var element = prompt(`Enter element ${i + 1}: `);
//   if (!element) continue;
//   arr.push(element);
//   i++;
// } while (arr.length < 3);

// document.write(`
//     <h1>Array operations</h1>

//     <h2>summation: </h2>
//     <p>${arr[0]} + ${arr[1]} + ${arr[2]} = ${
//   Number(arr[0]) + Number(arr[1]) + Number(arr[2])
// }</p>

//     <h2>Multiplication: </h2>
//     <p>${arr[0]} * ${arr[1]} * ${arr[2]} = ${arr[0] * arr[1] * arr[2]}</p>

//     <h2>Division: </h2>
//     ${
//       arr[1] == 0 || arr[2] == 0
//         ? `<p> Division by zero is not allowed </p>`
//         : `<p>${arr[0]} / ${arr[1]} / ${arr[2]} = ${
//             arr[0] / arr[1] / arr[2]
//           }</p>`
//     }

// `);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 3.2 Fill an array of 5 elements from the user, sort it in descending and ascending
// orders then display the output as shown in Fig.

var arr = [];
for (var i = 0; i < 5; i++) {
  var element = prompt(`Enter element ${i + 1}: `);
  while (!element || isNaN(element)) {
    var element = prompt(`Enter element ${i + 1}: `);
  }
  arr.push(element);
}

document.write(`
    <h1>Array Sorting</h1>
    <h2>you habe entered the values of:</h2>
    <p> ${arr.join(", ")} </p>
    <h2>Ascending Order:</h2>
    <p> ${arr
      .slice()
      .sort(function (a, b) {
        return a - b;
        })
        .join(", ")} </p>

    <h2>Descending Order:</h2>
    <p> ${arr
        .slice()
        .sort(function (a, b) {
          return b - a;
        }
        )
        .join(", ")} </p>
`);
