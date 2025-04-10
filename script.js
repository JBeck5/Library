var modal = document.getElementById("newBookModal");
var btn = document.getElementById("addBookBtn");
var span = document.getElementsByClassName("close")[0];
var addBookForm = document.getElementById("newBookForm");



btn.addEventListener("click", function() {
    modal.style.display = "block";
})

span.addEventListener("click", function() {
    modal.style.display = "none";
})

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("newBookForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
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
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let isRead = document.getElementById("isRead");
  let newBook = new Book(title, author, pages, isRead);
  console.log(newBook);
}
