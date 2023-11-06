const root = document.querySelector('#root');
const tableBody = document.querySelector('tbody');



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
function addBookToLibrary() {
    // add book
}

// loops through array and displays book on screen
let renderBooks = () => {

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

renderBooks();

// deletes all books from the screen before rendering again
let resetUI = () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
};