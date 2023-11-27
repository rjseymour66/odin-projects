class Book {
    title;
    author;
    numPages;
    read;
    constructor(title, author, numPages, read = false) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }

    // getters for title, author, numPages, read
    get title() {
        return this.title;
    }

    get author() {
        return this.author;
    }

    get numPages() {
        return this.numPages;
    }

    get read() {
        return this.read;
    }

    // switch 
    toggleRead() {
        this.read === true ? false : true;
    }
}

class Library {
    books;
    constructor(books = []) {
        this.books = books;
    }

    get books() {
        return this.books;
    }

    // set the library
    set books(newLibrary) {
        this.books = newLibrary;
    }

    // add a book
    addBook = (Book) => {
        let lib = this.books;
        lib.push(Book);
        this.books = lib;
    };

    // remove a book
    removeBook(index) {
        let lib = this.books;
        lib.splice(index, 1);
        this.books = lib;
    }

    // get books
    get books() {
        return this.books;
    }
}

class UIController {
    constructor() {
        // get root
        this.root = this.getElement('#root');

        // get tBody
        this.table = this.getTable();
        this.root.appendChild(this.table);
        this.tableBody = this.getElement(`tbody`);

        // modal
        this.modal = this.getElement('.modal');
        this.closeModal = this.getElement('.modal-close');
        this.submitModal = this.getElement(".submit-modal-form");

        // book
        this.addBook = this.getElement(".add-book");
        this.newTitle = this.getElement("#title");
        this.newAuthor = this.getElement("#author");
        this.newPages = this.getElement("#pages");
        this.checkbox = this.getElement("#read");

        // mark as read
        this.readBtn = this.getElement(".read-btn");

        // styles
        this.colorPrimary = "#2563eb";
        this.colorBg = "#eff6ff";
    }

    // create element helper
    createElement(tag, ...classNames) {
        const element = document.createElement(tag);
        for (const c of classNames) {
            element.classList.add(c);
        }
        return element;
    }
    // get element helper
    getElement(tag) {
        return document.querySelector(tag);
    }

    // create table helper
    getTable() {
        // create table element
        const table = this.createElement('table');
        // create thead
        const thead = this.createElement('thead');
        // create tr
        const tr = this.createElement('tr');
        // th for title
        const titleHeader = this.createElement('th');
        titleHeader.textContent = 'Title';
        // th for author
        const authorHeader = this.createElement('th');
        authorHeader.textContent = 'Author';
        // th for pages centered
        const pagesHeader = this.createElement('th', 'centered');
        pagesHeader.textContent = 'Pages';
        // th for read cent
        const readHeader = this.createElement('th', 'centered');
        readHeader.textContent = 'Read?';

        // append headers to tr
        const headers = [titleHeader, authorHeader, pagesHeader, readHeader];

        for (const h of headers) {
            tr.appendChild(h);
        }

        thead.appendChild(tr);
        table.appendChild(thead);

        // create tbody
        const tbody = this.createElement('tbody');
        table.appendChild(tbody);

        return table;
    }

    // renderLibrary
    renderBooks(library) {
        this._resetUI();

        library.forEach((book, index) => {

            // create a table row
            const tr = this.createElement('tr');

            for (const value of Object.values(book)) {
                // create a td for each prop in the book
                const td = this.createElement('td');

                let readButton = this._createReadButton();

                if (value === true) {
                    readButton.textContent = 'Read';
                    readButton.style.backgroundColor = this.colorPrimary;
                    td.appendChild(readButton);
                    td.classList.add('centered');
                } else if (value === false) {
                    readButton.textContent = 'Unread';
                    readButton.style.backgroundColor = 'red';
                    td.appendChild(readButton);
                    td.classList.add('centered');
                } else if (typeof value === 'number') {
                    td.textContent = `${value}`;
                    td.classList.add('centered');
                } else {
                    td.textContent = `${value}`;
                }
                tr.appendChild(td);
            }

            // create delete icon
            let deleteIcon = this.createElement('img');
            deleteIcon.src = '/assets/delete.svg';
            let deleteCell = this.createElement('td');
            deleteCell.classList.add('read-cell', 'centered');
            deleteCell.setAttribute('data-row', index);
            deleteCell.addEventListener('click', (e) => {
                const tableCell = e.target.parentNode;
                const tableRow = tableCell.parentNode;

                this.tableBody.removeChild(tableRow);
            });
            deleteCell.appendChild(deleteIcon);
            tr.appendChild(deleteCell);

            // append the tds to the table body
            this.tableBody.appendChild(tr);
        });
    }

    _resetUI() {
        while (this.tableBody.firstChild) {
            this.tableBody.removeChild(this.tableBody.firstChild);
        }
    }

    // createReadButton
    _createReadButton() {
        let readButton = this.getElement("button", "read-btn");
        // readButton.classList.add("read-btn");
        readButton.setAttribute("type", "button");
        readButton.setAttribute("id", "read-btn");
        readButton.addEventListener("click", () => {
            if (readButton.textContent === "Read") {
                readButton.textContent = "Unread";
                readButton.style.backgroundColor = "red";
            } else if (readButton.textContent === "Unread") {
                readButton.textContent = "Read";
                readButton.style.backgroundColor = this.colorPrimary;
            }
        });
        return readButton;
    };

    // resetModalInputs
    resetModalInputs() {
        this.newTitle.value = "";
        this.newAuthor.value = "";
        this.newPages.value = "";
        this.checkbox.checked = false;
    }

    // addBook EventListener
    bindAddBook(handler) {
        this.addBook.addEventListener('click', function (e) {
            e.preventDefault();
            // e.stopPropagation();

            handler();
        });
    }

    // submitModal EventListener
    bindSubmitModal(handler) {
        this.submitModal.addEventListener('click', function (e) {
            e.preventDefault();
            // e.stopPropagation();

            handler(this.library);
        });

    }

    // closeModal EventListener
    bindCloseModal(handler) {
        this.closeModal.addEventListener('click', function (e) {
            e.preventDefault();
            // e.stopPropagation();
            handler();
        });
    }
}

class LibraryController {
    constructor(Library, UIController) {
        this.library = Library;
        this.uiController = UIController;

        this.uiController.bindAddBook(this.handleAddBook);
        this.uiController.bindCloseModal(this.handleCloseModal);
        this.uiController.bindSubmitModal(this.handleSubmitModal);
    }

    // addBook EventListener
    handleAddBook = () => {
        this.uiController.modal.showModal();
        this.uiController.resetModalInputs();
    };

    // submitModal EventListener
    handleSubmitModal = () => {
        let title = this.uiController.newTitle.value;
        let author = this.uiController.newAuthor.value;
        let pagesStr = this.uiController.newPages.value;
        let pages = parseInt(pagesStr);

        let read;
        this.uiController.checkbox.checked ? (read = true) : (read = false);

        if (title === "" || author === "" || isNaN(pages)) {
            return;
        }

        let book = new Book(title, author, pages, read);
        this.library.addBook(book);
        this.uiController.renderBooks(this.library.books);

        // this.logLibrary();
        this.uiController.modal.close();
    };

    // closeModal EventListener
    handleCloseModal = () => {
        this.uiController.modal.close();
    };

    logLibrary() {
        console.log(this.library);
    }
}

const app = new LibraryController(new Library(), new UIController());