const addBookButton = document.querySelector(".add-book");
const modal = document.querySelector(".book-modal");
const opacity =document.querySelector(".opacity");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const descriptionInput= document.querySelector("#description");
const readStatus = document.querySelector("#read_status")
const submitButton = document.querySelector("#submit");
const container = document.querySelector(".container");

addBookButton.addEventListener("click", () => {
    modal.classList.add("active");
    opacity.classList.add("active")
})

opacity.addEventListener("click", () => {
    modal.classList.remove("active");
    opacity.classList.remove("active");
})

const myLibrary = [];

function Book(title, author, pages, description, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    const card = document.createElement("div");
    card.classList.add("book-card");

    const bookTitle = document.createElement("h1");
    bookTitle.textContent = book.title;
    card.appendChild(bookTitle);

    const bookAuthor = document.createElement("h2");
    bookAuthor.textContent = `by ${book.author}`;
    card.appendChild(bookAuthor)

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    card.appendChild(pages);

    const description = document.createElement("p");
    description.textContent = book.description;
    card.appendChild(description);

    const button = document.createElement("button");
    button.textContent = book.readStatus;
    card.appendChild(button);

    card.setAttribute("data-number", myLibrary.length);
    container.appendChild(card);

}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, descriptionInput.value, readStatus.value);
    addBookToLibrary(book);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    descriptionInput.value = "";
    readStatus.value = "";
})