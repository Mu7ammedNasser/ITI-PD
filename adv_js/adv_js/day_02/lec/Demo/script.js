//defien
// var person = {};
// Object.defineProperties(person,{
//     "name":{
//         get:function(){

//         },
//         set:function(){

//         }

//     },
//     "age":{

//     }

// })

//change caller value (this)
//array foreach  string
// var person = {
//     name:"menna",
//     age:25,
//     print:function(x){
//         console.log(this.name,this.age,x);
//     }
// }

// var obj = {
//     name:"hamada",
//     age:30,
// }

// //call apply    bind
// // person.print.call(obj,5,10);//immediate print()
// // person.print.apply(obj,[5,10]);
// var newFunc = person.print.bind(obj);
// console.log(newFunc);
// newFunc(10);
// newFunc(20);
// newFunc(30);

// var str = "menna";
// [].forEach.call(str,function(el){
//     console.log(el);
// });
//===================================
//self study
// var person = {
//     name:"menna",
//     age:25,
//     print:function(){
//         //change this value bind apply call
//         setTimeout(function(){
//             console.log(this.name,this.age);

//         }, 2000);
//     }
// }
// person.print();
//========================================

//class==> first class object function==>factory
function Employee(n, a, s, y) {
  //console.log(this);
  if (typeof n !== "string") {
    throw "error";
  }
  this.name = n;
  this.age = a;
  this.salary = s;
  //private member
  var year = y;
  this.getYear = function () {
    return year;
  };

  // this.print =function(){
  //     console.log(this.name,this.age);
  // }
  //return this
}
//define static Method
Employee.staticMethod = function () {
  //console.log("i am static Method");
};
Employee.counter = 0;
//call of static Method
Employee.staticMethod();

//by objects
Employee.prototype.print = function () {
  console.log(this.name, this.age);
};

var emp = new Employee("menna", 25, 2000, 1994); //name age salary
emp.print();
console.log(emp.getYear());
// //{constructor:Employee,name:menna,age:25}
var emp2 = new Employee("hamda", 30, 3000, 1995);
emp2.print();
console.log(emp2.getYear());

// delete emp2.name;
// //{}

// console.log(Employee.prototype);
//{object , constructor:Employee }
// console.log([].reverse());

//static MATH class
function myMath() {
  throw "this is not a constructor";
}
myMath.staticMethod = function () {
  console.log("hello");
};
myMath.staticMethod();
var n = new myMath();
