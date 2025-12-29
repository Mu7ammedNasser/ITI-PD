//literal creation
//anynmous object
// var obj = new Object();
// console.log(obj);//object

// var obj2 = {};
// obj2.name = "hamada";//set
// obj2.age = 25;//set
// console.log(obj2);
// document.write(obj2.name.toUpperCase());//get // [object Object]

// var person = {
//     name:"menna",
//     age:30
// }

// //subscribe notation
// var key = "age";
// person["salary"] = 2000;
// //console.log(person[key])//get
// console.log(person);

// var person = {
//     name:"hamada",
//     age:25,
//     printInfo:function(){
//         console.log("hello iam person");
//     }

// }

// //person.printInfo();
// //delete proprety
// // delete person.name;
// // console.log(person);

// //loop object
// for (var key in person) {
//     console.log(person[key]);//key datatype string
// }
// //

// //check on property
// console.log("salary" in person);
// console.log(person.hasOwnProperty("name"));

// //object static methods
// var arrKey = Object.keys(person);
// var arrValues = Object.values(person);
// var arrEntries = Object.entries(person);
// var arr = [];
// arr.reverse();
// var arr = Array.from("menna");//static method

//////////////////////////////////
// var obj = {name:"hamada",age:25};
// // var obj2 = {name:"hamada",age:25};
// var ObjCopy = {};
// for (var key in obj) {
//     ObjCopy[key] = obj[key];

// }
// console.log(ObjCopy);
// // var ObjCopy = obj;
// ObjCopy.salary = 2000;
// console.log(ObjCopy);
// console.log(obj == obj2);

//this keyword function caller

// var person = {
//     name: "hamada",
//     age: 25,
//     printInfo: function () {
//         //this ==>person
//         //this pattern
//         var _this = this;
//         setTimeout(function () {
//             console.log(_this.name, _this.age);

//         }, 2000)

//         //parameter
//         // setTimeout(function(x){
//         // console.log(x);
//         //   console.log(x.name,x.age);//undefiend

//         // },2000,this);

//     }

// }

// person.printInfo();

// function test(){
//     console.log(this);
// }

// test();

// var div = document.querySelector("div");
// div.addEventListener("click",function(){
//     console.log(this);
// })

// setTimeout(function(){
//     console.log(this);
// },2000);

// var x = 10;
// console.log(x);
// console.log(window.x);

////////clousre////////

// var counterAdd = (function() {
//     var counter = 0;//
//     // var x = 20;
//     // console.log(x);

//     return function () {
//         counter += 1;
//         return counter;
//     }
// })();

//  console.log(counterAdd());//1
//  console.log(counterAdd());//2
// //  var x = creatCounter();
// console.log(counterAdd());
// console.log(counterAdd());

//////////define
//static method
var person = { name: "menna", age: 25 };
//data
// Object.defineProperty(person,"name",{
//     value:"menna",
//     writable:false,
//     configurable:false,
//     enumerable:true
// });
//accessor
(function () {
  var data = person.name;
  Object.defineProperty(person, "name", {
    get: function () {
      return this["name"];
    },
    set: function (value) {
      data = value;
    },
    configurable: false,
    enumerable: true,
  });
})();

person.name = "hamada"; //set
console.log(person.name); //get
// delete person.name;
// for (const key in person) {
//     console.log(key);

// }
// console.log(person);
// //Object.defineProperties();

// var obj = {
//     name:"menna",
//     age:25,
//     getSetGen:function(){
//         //create setter and getter by defien property

//     }
// }
// obj.getSetGen();

//factory constructor creation
