// ====== INIT ELEMENTS ======
const bodyContent = document.getElementById("tableBody");

const bookNameInput = document.getElementById("bookName");
const priceInput = document.getElementById("price");
const authorNameInput = document.getElementById("authorName");
const authorEmailInput = document.getElementById("authorEmail");
const submitBtn = document.getElementById("submitBook");

// New elements for the multi-step flow
const initBookDiv = document.getElementById("initBook");
const bookFormDiv = document.getElementById("bookForm");
const bookCrudDiv = document.getElementById("bookCrud");
const numberOfBookInput = document.getElementById("NumberOfBook");
const numOfBookBtn = document.getElementById("num-of-book-btn");
const book1Img = document.getElementById("book1");
const book2Img = document.getElementById("book2");

// ====== GLOBAL DATA ======
const books = [];
let bookId = 1;
let editingId = null;
let totalBooksToAdd = 0;
let booksAdded = 0;

// ====== REGEX ======
const regex = {
  bookName: /^[A-Za-z0-9\s]{3,50}$/,
  price: /^\d+(\.\d{1,2})?$/,
  authorName: /^[A-Za-z\s]{3,40}$/,
  authorEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// ====== FUNCTIONS ======
function validate(value, pattern) {
  return pattern.test(value);
}

function createBook(bookName, price, authorName, authorEmail) {
  return {
    bookId: bookId++,
    bookName,
    publishDate: new Date().toISOString().split("T")[0],
    price,
    authorName,
    authorEmail,
  };
}

function displayBooks() {
  bodyContent.innerHTML = "";

  books.forEach((book) => {
    bodyContent.innerHTML += `
      <tr data-id="${book.bookId}">
        <td class="border border-[#2f2e5f] p-2">${book.bookName}</td>
        <td class="border border-[#2f2e5f] p-2">${book.publishDate}</td>
        <td class="border border-[#2f2e5f] p-2">${book.price}</td>
        <td class="border border-[#2f2e5f] p-2">${book.authorName}</td>
        <td class="border border-[#2f2e5f] p-2">${book.authorEmail}</td>
        <td class="border border-[#2f2e5f] p-2">
          <button class="edit-btn text-blue-500 mr-2">Edit</button>
          <button class="delete-btn text-red-500">Delete</button>
        </td>
      </tr>
    `;
  });
}

function enterEditMode(tr, book) {
  editingId = book.bookId;

  tr.innerHTML = `
    <td class="border border-[#2f2e5f] p-2"><input value="${book.bookName}" class="w-full bg-[#23225a] text-[#E7F2EF] p-1 rounded" /></td>
    <td class="border border-[#2f2e5f] p-2"><input type="date" value="${book.publishDate}" class="w-full bg-[#23225a] text-[#E7F2EF] p-1 rounded" /></td>
    <td class="border border-[#2f2e5f] p-2"><input type="number" value="${book.price}" class="w-full bg-[#23225a] text-[#E7F2EF] p-1 rounded" /></td>
    <td class="border border-[#2f2e5f] p-2"><input value="${book.authorName}" class="w-full bg-[#23225a] text-[#E7F2EF] p-1 rounded" /></td>
    <td class="border border-[#2f2e5f] p-2"><input value="${book.authorEmail}" class="w-full bg-[#23225a] text-[#E7F2EF] p-1 rounded" /></td>
    <td class="border border-[#2f2e5f] p-2">
      <button class="save-btn text-green-500 mr-2">Save</button>
      <button class="cancel-btn text-gray-500">Cancel</button>
    </td>
  `;
}

// ====== STEP 1: NUMBER OF BOOKS ======
numOfBookBtn.addEventListener("click", () => {
  const numBooks = parseInt(numberOfBookInput.value);

  if (isNaN(numBooks) || numBooks <= 0) {
    alert("Please enter a valid number of books");
    return;
  }

  totalBooksToAdd = numBooks;
  booksAdded = 0;

  // Hide initial screen and show book form
  initBookDiv.classList.add("hidden");
  book1Img.classList.add("hidden");
  book2Img.classList.add("hidden");
  bookFormDiv.classList.remove("hidden");
});

// ====== ADD BOOK ======
submitBtn.addEventListener("click", () => {
  const bookName = bookNameInput.value.trim();
  const price = priceInput.value.trim();
  const authorName = authorNameInput.value.trim();
  const authorEmail = authorEmailInput.value.trim();

  if (
    !validate(bookName, regex.bookName) ||
    !validate(price, regex.price) ||
    !validate(authorName, regex.authorName) ||
    !validate(authorEmail, regex.authorEmail)
  ) {
    alert(
      "Invalid input data. Please check:\n- Book Name: 3-50 characters (letters, numbers, spaces)\n- Price: Valid number (e.g., 10 or 10.99)\n- Author Name: 3-40 characters (letters and spaces)\n- Author Email: Valid email format"
    );
    return;
  }

  books.push(createBook(bookName, price, authorName, authorEmail));
  booksAdded++;

  bookNameInput.value = "";
  priceInput.value = "";
  authorNameInput.value = "";
  authorEmailInput.value = "";

  // Check if all books have been added
  if (booksAdded >= totalBooksToAdd) {
    bookFormDiv.classList.add("hidden");
    bookCrudDiv.classList.remove("hidden");
    displayBooks();
  } else {
    alert(
      `Book added successfully! ${totalBooksToAdd - booksAdded} more to go.`
    );
  }
});

// ====== TABLE ACTIONS ======
bodyContent.addEventListener("click", (e) => {
  const tr = e.target.closest("tr");
  if (!tr) return;

  const id = Number(tr.dataset.id);
  const book = books.find((b) => b.bookId === id);

  // DELETE
  if (e.target.closest(".delete-btn")) {
    books.splice(books.indexOf(book), 1);
    displayBooks();
  }

  // EDIT
  if (e.target.closest(".edit-btn")) {
    if (editingId !== null) return;
    enterEditMode(tr, book);
  }

  // SAVE
  if (e.target.closest(".save-btn")) {
    const inputs = tr.querySelectorAll("input");

    const updated = {
      bookName: inputs[0].value.trim(),
      publishDate: inputs[1].value,
      price: inputs[2].value.trim(),
      authorName: inputs[3].value.trim(),
      authorEmail: inputs[4].value.trim(),
    };

    if (
      !validate(updated.bookName, regex.bookName) ||
      !validate(updated.price, regex.price) ||
      !validate(updated.authorName, regex.authorName) ||
      !validate(updated.authorEmail, regex.authorEmail)
    ) {
      alert("Invalid edited data");
      return;
    }

    Object.assign(book, updated);
    editingId = null;
    displayBooks();
  }

  // CANCEL
  if (e.target.closest(".cancel-btn")) {
    editingId = null;
    displayBooks();
  }
});
