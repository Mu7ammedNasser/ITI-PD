function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot create object from Shape");
  }
}

function Rectangle(width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;

  Rectangle.count++;
}

Rectangle.count = 0;

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return `
Rectangle:
Width = ${this.width}
Height = ${this.height}
Area = ${this.getArea()}
Perimeter = ${this.getPerimeter()}
`;
};

function Square(side) {
  Rectangle.call(this, side, side); // width = height
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
  return `
Square:
Side = ${this.width}
Area = ${this.getArea()}
Perimeter = ${this.getPerimeter()}
`;
};

var r1 = new Rectangle(10, 20);
console.log(r1.toString());

var s1 = new Square(5);
console.log(s1.toString());

console.log("Total Rectangles Created:", Rectangle.count);
