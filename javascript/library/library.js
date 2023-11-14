const tableBody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const addBook = document.querySelector(".add-book");
const submitModal = document.querySelector(".submit-modal-form");

const newTitle = document.querySelector("#title");
const newAuthor = document.querySelector("#author");
const newPages = document.querySelector("#pages");
const checkbox = document.querySelector("#read");

const readBtn = document.querySelector(".read-btn");
const colorPrimary = "#2563eb";
const colorBg = "#eff6ff";

const myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

// take users input and store new book objects in myLibrary
function addBookToLibrary(book) {
    // add book
    myLibrary.push(book);
}

// loops through array and displays book on screen
let renderBooks = () => {
    resetUI();

    // for each item in myLibrary
    myLibrary.forEach((book, index) => {
        // create a table row
        const tr = document.createElement("tr");

        // create a td for each property in the book
        for (const value of Object.values(book)) {
            const td = document.createElement("td");

            let readButton = createReadButton();

            if (value === true) {
                readButton.textContent = "Read";
                readButton.style.backgroundColor = colorPrimary;
                td.appendChild(readButton);
                td.classList.add("centered");
            } else if (value === false) {
                readButton.textContent = "Unread";
                readButton.style.backgroundColor = "red";
                td.appendChild(readButton);
                td.classList.add("centered");
            } else if (typeof value === "number") {
                td.textContent = `${value}`;
                td.classList.add("centered");
            } else {
                td.textContent = `${value}`;
            }
            tr.appendChild(td);
        }
        // create delete icon
        let deleteIcon = document.createElement("img");
        deleteIcon.src = "/assets/delete.svg";
        let deleteCell = document.createElement("td");
        deleteCell.classList.add("read-cell", "centered");
        deleteCell.setAttribute("data-row", index);
        deleteCell.addEventListener("click", (e) => {
            tableCell = e.target.parentNode;
            tableRow = tableCell.parentNode;
            console.log(tableRow);

            tableBody.removeChild(tableRow);
        });
        deleteCell.appendChild(deleteIcon);
        tr.appendChild(deleteCell);

        // append the tds to the table body
        tableBody.appendChild(tr);
    });
};

let createReadButton = () => {
    let readButton = document.createElement("button");
    readButton.classList.add("read-btn");
    readButton.setAttribute("type", "button");
    readButton.setAttribute("id", "read-btn");
    readButton.addEventListener("click", () => {
        if (readButton.textContent === "Read") {
            readButton.textContent = "Unread";
            readButton.style.backgroundColor = "red";
        } else if (readButton.textContent === "Unread") {
            readButton.textContent = "Read";
            readButton.style.backgroundColor = colorPrimary;
        }
    });
    return readButton;
};

// deletes all books from the screen before rendering again
let resetUI = () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
};

addBook.addEventListener("click", () => {
    modal.showModal();
    resetModalInputs();
});

submitModal.addEventListener("click", (e) => {
    let title = newTitle.value;
    let author = newAuthor.value;
    let pagesStr = newPages.value;
    pages = parseInt(pagesStr);

    console.log(pages);

    let read;
    checkbox.checked ? (read = true) : (read = false);

    if (title === "" || author === "" || isNaN(pages)) {
        return;
    }

    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    renderBooks();

    e.preventDefault();
    console.log(modal.returnValue);

    modal.close();
});

let resetModalInputs = () => {
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    checkbox.checked = false;
};

closeModal.addEventListener("click", () => {
    modal.close();
});