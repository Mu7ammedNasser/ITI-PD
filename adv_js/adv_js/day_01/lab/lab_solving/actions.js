//1. write a script that allows you to create a rectangle object that

// var rectangle = {
//   width: 10,
//   height: 20,
//   getArea: function () {
//     return this.width * this.height;
//   },
//   getPerimeter: function () {
//     return (this.width + this.height) * 2;
//   },
//   displayInfo: function () {
//     console.log(
//       ` width=${this.width}\n`,
//       `height = ${this.height}\n`,
//       `Area = ${this.getArea()}\n`,
//       `Perimeter = ${this.getPerimeter()}`
//     );
//   },
// };

//  rectangle.displayInfo();

//2.

/////////////////

var obj = {
  name: "menna",
  age: 25,

  getSetGen: function () {
    //create setter and getter by defien property
    for (const key in this) {
      if (typeof this[key] === "function") continue;

      let value = this[key];
      Object.defineProperty(this, key, {
        get: function () {
          console.log("validation here");

          return value; // value === obj.name === "menna"
        },
        set: function (newValue) {
          value = newValue;
        },
        enumerable: true,
        configurable: false,
      });
    }
  },
};

var user = { name: "nasser", age: 22 };

obj.getSetGen.call(user);
console.log(user.name); // "nasser"
user.name = "Mohamed";
console.log(user.name); // "Mohamed"
