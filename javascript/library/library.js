const tableBody = document.querySelector('tbody');
const modal = document.querySelector('.modal');
const addBook = document.querySelector('.add-book');
const closeModal = document.querySelector('.close-modal');

const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPages = document.querySelector('#pages');



const myLibrary = [
    {
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "numberOfPages": 250,
        "read": false,
    },
    {
        "title": "Grapes of Wrath",
        "author": "John Steinbeck",
        "numberOfPages": 400,
        "read": true,
    },

];

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
    myLibrary.forEach(book => {
        // create a table row
        const tr = document.createElement('tr');

        // create a td for each property in the book
        for (const value of Object.values(book)) {
            const td = document.createElement('td');
            td.textContent = `${value}`;
            tr.appendChild(td);
        }
        // append the tds to the table body
        tableBody.appendChild(tr);
    });
};

// renderBooks();

// deletes all books from the screen before rendering again
let resetUI = () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
};

addBook.addEventListener('click', () => {
    modal.showModal();


    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";

});



modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});

closeModal.addEventListener('click', e => {

    let title = newTitle.value;
    let author = newAuthor.value;
    let pagesStr = newPages.value;
    pages = parseInt(pagesStr);

    let read = false;

    // check if any are empty in form

    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    renderBooks();

    e.preventDefault();
    modal.close();
});

// modal.showModal();