function Book(
  title,
  numOfChapters,
  author,
  numOfPages,
  publisher,
  numofCopies
) {
  if (
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof publisher !== "string"
  ) {
    throw new Error("Title, Author and publisher must be strings");
  }

  this._title = title;
  this._numOfChapters = numOfChapters;
  this._author = author;
  this._numOfPages = numOfPages;
  this._publisher = publisher;
  this._numofCopies = numofCopies;
}

function Box(height, width, length, material, content) {
  if (!Array.isArray(content)) {
    throw new Error("Content must be an array of books");
  }

  this._height = height;
  this._width = width;
  this._length = length;
  this._numOfBooks = content.length;
  this._volume = width * height * length;
  this._material = material;
  this._content = content;
}
{
  Box.prototype.bookExist = function (title) {
    return this._content.some(function (book) {
      return book._title == title;
    });
  };

  Box.prototype.addBook = function (book) {
    if (this.bookExist(book._title)) return "book already exit";
    this._content.push(book);
    this._numOfBooks++;
  };

  Box.prototype.removeBook = function (title) {
    var flag = false;
    for (var i = 0; i < this._content.length; i++) {
      if (this._content[i]._title == title) {
        flag = true;
        this._content.splice(i, 1);
        break;
      }
    }
    if (!flag) return "book not found to be removed";
    this._numOfBooks = this._content.length;
    return "book removed.";
  };

  Box.prototype.displayBooks = function () {
    if (this._content.length === 0) {
      console.log("No books in this box.");
    } else {
      for (let i = 0; i < this._content.length; i++) {
        console.log(
          `  ${i + 1}. ${this._content[i]._title} by ${
            this._content[i]._author
          }, Pages: ${this._content[i]._numOfPages}, Publisher: ${
            this._content[i]._publisher
          }`
        );
      }
    }
  };
}

/**************************** */
// d. use toString() to tell its dimensions and how books are stored in it.

Box.prototype.toString = function () {
  return `
Box Dimensions:
  - Height: ${this._height}
  - Width: ${this._width}
  - Length: ${this._length}
  - Volume: ${this._volume}

Books Stored:
  - Number of books: ${this._numOfBooks}
  - Stored as an Array
  
  `;
};

// override valueof to calc the number of books 
Box.prototype.valueOf = function () {
  return this._numOfBooks;
};



var book1 = new Book("JS", 10, "Mohamed", 200, "nasserGroup", 5);
var book2 = new Book("Angular", 15, "Nasser", 300, "nasserGroup", 3);
var book3 = new Book("MVC", 12, "ahmed", 250, "nasserGroup", 4);

var myBox = new Box(50, 40, 30, "wood", []);
var myBox2 = new Box(50, 40, 30, "wood", []);

myBox.addBook(book2);
myBox.addBook(book3);
myBox2.addBook(book3);

console.log(myBox.toString());
console.log(myBox + myBox2); //3
