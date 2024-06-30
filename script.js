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
   
    const card = document.createElement("div");
    card.classList.add("book-card");

    const header = document.createElement("div");
    const bookTitle = document.createElement("h1");
    bookTitle.textContent = book.title;
    header.appendChild(bookTitle);

    const deleteButton = document.createElement("button");
    const image = document.createElement("img");
    image.src="img/trash-can-outline.svg";
    image.classList.add("trash");
    deleteButton.appendChild(image);
    header.appendChild(deleteButton)

    deleteButton.addEventListener("click", (e) => {
        deleteBook(e);
    })

    card.appendChild(header);

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
    myLibrary.push(book);

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

    modal.classList.remove("active");
    opacity.classList.remove("active");
})

function deleteBook(e) {
    const book = e.target.closest(".book-card");
    console.log(book);
    const number = +book.dataset.number;
    console.log("BEFORE"+ myLibrary.length);
    myLibrary.splice(number, 1);
    console.log("AFTER" + myLibrary.length);
    container.removeChild(book);

    const allBooks = document.querySelectorAll(".book-card");
    console.log(allBooks);
    for (i = 0; i < allBooks.length; i++) {
        allBooks[i].dataset.number = i;
    }
}