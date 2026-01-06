// ====== INIT ELEMENTS ======
const numOfBooksInput = document.querySelector("#NumberOfBook");
const numOfBookBtn = document.querySelector("#num-of-book-btn");

const bodyContent = document.getElementById("tableBody");

const bookNameInput = document.getElementById("bookName");
const priceInput = document.getElementById("price");
const authorNameInput = document.getElementById("authorName");
const authorEmailInput = document.getElementById("authorEmail");

const submitBtn = document.getElementById("submitBook");

const initBookSection = document.getElementById("initBook");
const bookFormSection = document.getElementById("bookForm");
const bookCrudSection = document.getElementById("bookCrud");

// ====== GLOBAL DATA ======
const books = [];
let bookId = 1;
let maxBooks = 0;

// ====== FUNCTIONS ======
function getNumOfBooks() {
  return Number(numOfBooksInput.value);
}

function createBook(bookName, price, authorName, authorEmail) {
  return {
    bookId: bookId++,
    bookName,
    price,
    authorName,
    authorEmail,
  };
}

function displayBooks() {
  bodyContent.innerHTML = "";

  books.forEach((book) => {
    bodyContent.innerHTML += `
      <tr class="hover:bg-[#23225a] transition">
        <td class="p-2 border">${book.bookName}</td>
        <td class="p-2 border">${book.price}</td>
        <td class="p-2 border">${book.authorName}</td>
        <td class="p-2 border">${book.authorEmail}</td>
        <td class="p-2 border">${book.authorEmail}</td>
        <td class="p-2 border flex justify-center gap-3">
          <button 
            class="delete-btn text-red-400 hover:text-red-600"
            data-id="${book.bookId}">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="text-blue-400 hover:text-blue-600"> <i class="fa-solid fa-file-pen"></i> </button>
          
        </td>
      </tr>
    `;
  });
}

function deleteBook(id) {
  const index = books.findIndex((book) => book.bookId === id);
  if (index === -1) return;

  books.splice(index, 1);
  displayBooks();
}

// ====== EVENTS ======

// Step 1: set number of books
numOfBookBtn.addEventListener("click", () => {
  if (!numOfBooksInput.value) return;

  maxBooks = getNumOfBooks();
  initBookSection.classList.add("hidden");
  bookFormSection.classList.remove("hidden");
});

// Step 2: submit book
submitBtn.addEventListener("click", () => {
  const bookName = bookNameInput.value.trim();
  const price = Number(priceInput.value);
  const authorName = authorNameInput.value.trim();
  const authorEmail = authorEmailInput.value.trim();

  if (!bookName || !price || !authorName || !authorEmail) {
    alert("Fill all fields");
    return;
  }

  if (books.length >= maxBooks) {
    alert("Max books reached");
    return;
  }

  const book = createBook(bookName, price, authorName, authorEmail);
  books.push(book);

  // clear inputs
  bookNameInput.value = "";
  priceInput.value = "";
  authorNameInput.value = "";
  authorEmailInput.value = "";

  if (books.length === maxBooks) {
    bookFormSection.classList.add("hidden");
    bookCrudSection.classList.remove("hidden");
    displayBooks();
  }
});

// Step 3: delete (event delegation)
bodyContent.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const id = Number(deleteBtn.dataset.id);
  deleteBook(id);
});
