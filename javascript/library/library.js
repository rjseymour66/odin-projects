const tableBody = document.querySelector('tbody');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const addBook = document.querySelector('.add-book');
const submitModal = document.querySelector('.submit-modal-form');

const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPages = document.querySelector('#pages');
const checkbox = document.querySelector('#read');



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
    myLibrary.forEach((book, index) => {
        // create a table row
        const tr = document.createElement('tr');

        // create a td for each property in the book
        for (const value of Object.values(book)) {
            const td = document.createElement('td');

            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "read";
            checkbox.id = "read";

            if (value === true) {
                checkbox.checked = true;
                td.appendChild(checkbox);
                td.classList.add('centered');
            } else if (value === false) {
                td.appendChild(checkbox);
                td.classList.add('centered');
            } else if (typeof value === "number") {
                td.textContent = `${value}`;
                td.classList.add('centered');
            } else {
                td.textContent = `${value}`;
            }
            tr.appendChild(td);
        }
        // create delete icon
        let deleteIcon = document.createElement('img');
        deleteIcon.src = "/assets/delete.svg";
        let deleteCell = document.createElement('td');
        deleteCell.classList.add('read-cell', 'centered');
        deleteCell.setAttribute('data-row', index);
        deleteCell.addEventListener('click', e => {

            console.log(e.target);
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

// renderBooks();

// deletes all books from the screen before rendering again
let resetUI = () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
};

addBook.addEventListener('click', () => {
    modal.showModal();
    resetModalInputs();
});

submitModal.addEventListener('click', e => {

    let title = newTitle.value;
    let author = newAuthor.value;
    let pagesStr = newPages.value;
    pages = parseInt(pagesStr);

    let read;
    checkbox.checked ? read = true : read = false;

    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    renderBooks();

    e.preventDefault();
    modal.close();
});

let resetModalInputs = () => {
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
};

closeModal.addEventListener('click', () => {
    modal.close();
});



// modal.addEventListener("click", e => {
//     const dialogDimensions = modal.getBoundingClientRect();
//     if (
//         e.clientX < dialogDimensions.left ||
//         e.clientX > dialogDimensions.right ||
//         e.clientY < dialogDimensions.top ||
//         e.clientY > dialogDimensions.bottom
//     ) {
//         modal.close();
//     }
// });

// modal.showModal();