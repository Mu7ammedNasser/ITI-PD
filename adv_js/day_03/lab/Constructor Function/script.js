function Rectangle(width, height) {
  this.width = width;
  this.height = height;


  Rectangle.count++;
}

Rectangle.count = 0;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return `
Width = ${this.width}
Height = ${this.height}
Area = ${this.getArea()}
Perimeter = ${this.getPerimeter()}
`;
};

const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(5, 8);

console.log(rect1.toString());
console.log(rect2.toString());

console.log("Total Rectangles:", Rectangle.count);
