var modal = document.getElementById("newBookModal");
var btn = document.getElementById("addBookBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  // create new div for each newly created book?
}
