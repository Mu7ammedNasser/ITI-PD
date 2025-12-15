// type conversion methods:

// var str = "25.33333%";
// var str2 = "25.3";

// console.log(Number(str)); //Number() tries to convert entire string
// console.log(Number(str2));
// console.log(typeof Number(str2));


// console.log(parseInt(str)); //25 extract integer part only
// console.log(typeof parseInt(str));

// console.log(parseFloat(str)); //25.3333 extracts decimal number
// console.log(parseFloat(str2)); //25.3


// var str3 = "2*5+20";
// console.log(Number(str3)); //NAN
// console.log(parseInt(str3)); //2 gts the first number
// console.log(eval(str3)); //30 number
// console.log(typeof eval(str3)); // number

// var str4 = "aaa+2*5+10";
// // console.log(eval(str4));    //Uncaught ReferenceError: aaa is not defined at eval
// console.log(parseInt(str4));  // tries to convert  xxxxxx NAN

// var str5 = "aaa5";
// console.log(parseInt(str5));  //NAN
// console.log(parseFloat(str5));//NAN


// var str6 = "123abc";
// console.log(parseInt(str6)); // reads numbers only from th start of the string

// var str7 = "12.5abc";
// console.log(parseFloat(str7)); //12.5


// var num = 5;
// console.log(String(num));
// console.log(typeof String(num));



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// STRING

// var strObj = new String("ahmed"); // string object (constructor)
// var strPrim = "ahmed";   //string primitive

// console.log(strObj);
// console.log(strObj.length)
// console.log(strObj[0])
// console.log(typeof strObj);  //Object


// console.log(strPrim);
// console.log(strPrim.length)
// console.log(strPrim[0])
// console.log(typeof strPrim);

// for (var i = 0; i < strObj.length; i++) {
//     console.log(strObj[i])   //String
// }

// console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz")

// for (var i = 0; i < strPrim.length; i++) {
//     console.log(strPrim[i])
// }


// var str1 = "alice";
// var str2 = new String("hamada");

// // a  l  i  c  e
// // 0  1  2  3  4

// // h  a  m  a  d  a
// // 0  1  2  3  4  5


// // 1- charAt() --> get character at index
// console.log(str1.charAt(2));  //i
// console.log(str1.charAt(5));  // "empty string"
// console.log(str2.charAt(2));  //m
// console.log(str2.charAt(6));  // "empty string"
// console.log(str1[2]);         //i
// console.log(str2[2]);         //m

// console.log(str2[6]);         //undefined
// console.log(str2[-1]);        //undefined
// console.log(str2.charAt(-1));  // "empty string"

// //str[]        --> undefined
// //str.charAt() --> "empty string"

// // 2- indexOf()  --> find index of char
// console.log(str1.indexOf("i")) //2
// console.log(str2.indexOf("m")) //2
// console.log(str2.indexOf("a")) // first matched char
// console.log(str2.indexOf("z")) // -1
// // [1,2,3,4,5]



// //3- case conversion
// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());


// // 4- trim() --> remove whitespaces
// var myString = "     ali          ";
// console.log(myString);
// console.log(myString.trim().toUpperCase());



// // 5- substring --> extract part of string

// // a  l  i  c  e
// // 0  1  2  3  4

// // h  a  m  a  d  a
// // 0  1  2  3  4  5

// console.log(str1.substring(1)) //from index 1 to end
// console.log(str1.substring(1, 4)) //from index 1 to 4 not include end

// console.log(str2.substring(1)) //from index 1 to end
// console.log(str2.substring(1, 4)) //from index 1 to 4 not include end



// // 6-slice() --> extract part of string with negative indices

// // a  l  i  c  e
// // 0  1  2  3  4
// //-5 -4 -3 -2 -1  -->

// console.log(str1.slice(-1)); //e
// console.log(str1.slice(-4, -1)) //lic



// // 7- split --> split string into array (separator , limit)

// var sentence = "hello my developers";
// console.log(sentence.split(" ")) // ['hello', 'my', 'developers']
// console.log(sentence.split(""));
// //['h', 'e', 'l', 'l', 'o', ' ', 'm', 'y', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's']

// var sentence = "hello*my*developers";
// console.log(sentence.split("*")) //['hello', 'my', 'developers']
// console.log(sentence.split("*",1)); //['hello']
// console.log(sentence.split("*",2)); //['hello', 'my']


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// regular exp

// var emailRgx = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
// console.log(emailRgx.test("hello@"));

// do {
//     var res = prompt("enter your email");
//     console.log(res)
// } while (emailRgx.test(res) === false)

// https://ihateregex.io/expr/email/

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Math OBJECT (static class)

// console.log(Math.pow(2,2));
// console.log(Math.sqrt(16));

// console.log(Math.max(10,20,30));
// console.log(Math.min(10,20,30));

// // console.log(Math.max(1,2,11,12,18))

// console.log(Math.random())
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10))


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// ARRAY

// var arr1 = ["apple" , "banana"];
// var arr2 = new Array("orange" , "watermelon" , "mango")

// console.log(arr1);
// console.log(arr2);

// console.log(typeof arr1);
// console.log(typeof arr2);

// console.log(arr1.length)
// console.log(arr2.length)



// // [NON-MUTATING] ARRAY METHODS

// // 1-concat --> combine arrays [return new array]
// var concatArr = arr1.concat(arr2);
// console.log(concatArr);
// console.log(arr1);
// console.log(arr2);


// // 2-join --> array to string (return string)
// var joinArray = arr1.join(" ");
// console.log(joinArray);
// console.log(arr1);


// // 3-slice --> extract portion [return new array] {not include end}
// var slicedArr = arr2.slice(0,2) // 0 1 
// console.log(slicedArr)
// console.log(arr2);


// // 4- toString() --> convert to string
// console.log(arr2.toString());
// console.log(arr2)

// // ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ


// // [MUTATING] ARRAY METHODS

// // 1-pop() --> remove last element [modify original array]  (return removed element)
// var lastFruit = arr2.pop();
// console.log("last element : " , lastFruit);
// console.log(arr2);

// // 2-push() -->add to end [modify original array]
// arr2.push("strawberry");
// console.log(arr2)


// // 3-shift() --> remove first element [modify original array] (return removed element)
// var firstFruit = arr2.shift();
// console.log("first element : " , firstFruit);
// console.log(arr2)


// // 4-unshift --> add to beginning [modify original array]
// arr2.unshift("mango");
// console.log(arr2)



// // 5-splice() add/remove elements (start , count element to delete , added element)
// console.log("arr2 before" , arr2)
// var deletedElement = arr2.splice(1,2 , "hello");
// console.log(deletedElement);
// console.log(arr2);
// console.log("arr2 after" , arr2)


// // ['mango', 'watermelon', 'strawberry']
// //  0                1             2

// // splice(start = 1 , 2 ,  added element)
// // ["mango" , "hello"]


// // 6-reverse() [modify on original array]
// console.log(arr2.reverse())
// console.log(arr2);


// // 7-sort() [modify on original array]
// var numbers = [1,7,4,5,9,3];
// console.log(numbers.sort());
// console.log(numbers);

// var nums = [1,4,15,11,5,6,9];
// console.log(nums.sort());



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// REFERENCE VS VALUE COPYING

// DEEP COPY
var x = 5;
var y = x;    // y gets a copy of x's value
console.log(y); //5

x = 10;       //doesn't affect on y
console.log(y);


// SHALLOW COPY
var original =[200,300,600];
var arrCopy = original;    //arrCopy references same array as rr

console.log(arrCopy);

original.push("hamada");
console.log(arrCopy);


var newArr= [];  //DEEP COPY

for(i=0 ; i<original.length ; i++){
    newArr.push(original[i])
}
console.log(newArr);


original.push("hello");
console.log(original);
console.log(newArr);




var str1= new String("hello");
var str2 = new String("hello");

console.log(str1.valueOf == str2.valueOf);
console.log(str1 === str2)




// prompt --> enter word
// confirm --> case sensitive ? or no?

// RADAD  
// raDAr --> no  , yes


// prompt 
// helloeeeee
// 6

// [1,2,3]

// i[0] + i[1] + i[2]

// for(i = 0 ; i < arrCopy.length ; i++){
//     // sum
//     //multi
//     //div
// }

// [11,5,1]
// ascending