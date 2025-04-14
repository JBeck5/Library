const modal = document.getElementById("newBookModal");
const btn = document.getElementById("addBookBtn");
const span = document.getElementsByClassName("close")[0];
const addBookForm = document.getElementById("newBookForm");
const bookShelf = document.querySelector(".shelf");

btn.addEventListener("click", function() {
    modal.style.display = "block";
})

span.addEventListener("click", function() {
    modal.style.display = "none";
    addBookForm.reset();
})

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    addBookForm.reset();
    modal.style.display = "none";
})

const myLibrary = [];

function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  // create new div for each newly created book?
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").value;
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayLibrary();
}

function createCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement("div");
    const titleText = document.createTextNode(`Title: ${book.title}.`);
    title.appendChild(titleText);
    bookCard.appendChild(title);

    const author = document.createElement("div");
    const authorText = document.createTextNode(`Title: ${book.author}.`);
    author.appendChild(authorText);
    bookCard.appendChild(author);

    const pages = document.createElement("div");
    const pagesText = document.createTextNode(`Title: ${book.pages}.`);
    pages.appendChild(pagesText);
    bookCard.appendChild(pages);

    const isRead = document.createElement("div");
    const isReadText = document.createTextNode(`${book.isRead ? 'Read.' : 'Not Read'}`);
    isRead.appendChild(isReadText);
    bookCard.appendChild(isRead);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    const removeBtnText = document.createTextNode(`Remove`);
    removeBtn.appendChild(removeBtnText);
    removeBtn.setAttribute('data-id', book.id);

    bookCard.appendChild(removeBtn);

    bookShelf.appendChild(bookCard);
}

function displayLibrary() {
    bookShelf.innerHTML = " ";

    myLibrary.forEach(book => {
        createCard(book)
    })

    addRemoveListener();
}

function addRemoveListener() {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const id = button.getAttribute("data-id");
            removeBookFromLibrary(id);
            displayLibrary(myLibrary);
        })
    })
}

function removeBookFromLibrary(bookId) {
    //Finds location of selected book to remove
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);

    //book check and removes from location
    if (bookIndex != -1) {
        myLibrary.splice(bookIndex, 1);
    }
}