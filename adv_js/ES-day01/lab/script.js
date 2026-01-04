// 1)
let fName = "Mohamed";
let lName = "Nasser";
console.log(fName);
console.log(lName);

[fName, lName] = [lName, fName];

console.log(fName);
console.log(lName);

/**************************** */

// 2)

let arr = [5, 6, 8, 0, 9, 1, -9];

function findMinMax(...arr) {
  console.log(Math.max(...arr));
  console.log(Math.min(...arr));
}

findMinMax(...arr);
/**************************** */

//3)

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a
console.log(fruits.every((elm) => typeof elm == "string"));

// b
console.log(fruits.some((elm) => typeof elm == "string"));

// c

var newArr = fruits.filter((elm) => elm[0] == "s" || elm[0] == "b");
console.log(newArr);

// d

var newArr = fruits.map((elm) => (elm = `I like ${elm}`));
console.log(newArr);

newArr.forEach((elm) => console.log(elm));
