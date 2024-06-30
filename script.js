const addBookButton = document.querySelector(".add-book");
const modal = document.querySelector(".book-modal");
const opacity =document.querySelector(".opacity");

addBookButton.addEventListener("click", () => {
    modal.classList.add("active");
    opacity.classList.add("active")
})

opacity.addEventListener("click", () => {
    modal.classList.remove("active");
    opacity.classList.remove("active");
})
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}