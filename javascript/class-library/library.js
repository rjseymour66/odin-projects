class Book {
    #title;
    #author;
    #numPages;
    #read;
    constructor(title, author, numPages, read = false) {
        this.#title = title;
        this.#author = author;
        this.#numPages = numPages;
        this.#read = read;
    }

    // getters for title, author, numPages, read
    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get numPages() {
        return this.#numPages;
    }

    get read() {
        return this.#read;
    }

    // setter for read only
    set read(val) {
        this.#read = val;
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
    addBook(Book) {
        let lib = this.books;
        lib.push(Book);
        this.books = lib;
        // this.books.push(Book);
    }

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


let a = new Book('title1', 'auth1', 100, true);
let b = new Book('title2', 'auth2', 200, true);
let c = new Book('title3', 'auth3', 300, true);
let d = new Book('title4', 'auth4', 400, true);

let bookArray = [a, b, c, d];

let lib = new Library(bookArray);
console.log(lib.books);

let e = new Book('title5', 'auth5', 500, true);
lib.addBook(e);
console.log(lib.books);

lib.removeBook(2);
console.log(lib.books);



class LibraryController {
    library;
    constructor(Library) {
        this.libary = Library;
    }
}

class UIController {
    libary;
    constructor(Library) {
        this.libary = Library;
    }
    // renderLibrary

    // resetUI

    // createDeleteIcon

    // createReadButton

    // resetModalInputs

    // addBook EventListener

    // submitModal EventListener

    // closeModal EventListener
}