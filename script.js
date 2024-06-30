const addBookButton = document.querySelector(".add-book");
const modal = document.querySelector(".book-modal");
const opacity =document.querySelector(".opacity");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const descriptionInput= document.querySelector("#description");
const submitButton = document.querySelector("#submit");

addBookButton.addEventListener("click", () => {
    modal.classList.add("active");
    opacity.classList.add("active")
})

opacity.addEventListener("click", () => {
    modal.classList.remove("active");
    opacity.classList.remove("active");
})

const myLibrary = [];

function Book(title, author, pages, description, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, descriptionInput.value, "reading");
    addBookToLibrary(book);
})