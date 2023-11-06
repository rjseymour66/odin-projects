// ///// Object constructors /////

// function Book(title, author, pageNum, read) {
//     this.title = title;
//     this.author = author;
//     this.pageNum = pageNum;
//     this.read = false;
//     this.info = function () {
//         readStr = read ? "I have read it." : "not read yet";
//         return `${title} by ${author}, ${pageNum} pages, ${readStr}`;
//     };
// }

// const ulysses = new Book('Ulysses', 'James Joyce', 657, false);



// // console.log(ulysses.info());


// ///// prototype /////

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function () {
//         console.log(name);
//     };
// }

// Player.prototype.newFunc = function () {
//     console.log('This function is not in the Player constructor!');
// };

// const player = new Player('jack', 'O');
// // player.newFunc();

// // console.log(Object.getPrototypeOf(player));
// // console.log(player.__proto__ === Player.prototype);


// Object.getPrototypeOf(player) === Player.prototype;

// console.log(Object.getPrototypeOf(player) === Player.prototype);
// console.log(player.valueOf());

// console.log(Object.prototype.hasOwnProperty('toString'));
// console.log(player.hasOwnProperty('toString'));
// console.log(player.hasOwnProperty('sayName'));


// console.log(Object.prototype);

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayName = function () {
//     console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// Player.prototype.getMarker = function () {
//     console.log(`My marker is '${this.marker}'`);
// };

// // console.log(Object.getPrototypeOf(Player.prototype));


// // Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// // Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// // Object.getPrototypeOf(Player.prototype); // returns Person.prototype

// // console.log(Object.getPrototypeOf(Player.prototype));

// const person = new Person('Ryan');

// console.log(person.toString());


// function Person(name) {
//     this.name = name;
// }

// let me = new Person('jack');
// console.log(me);
// // Person {name: 'jack'}

// Person.prototype.greet = function () {
//     return `Hello, my name is ${this.name}`;
// };

// console.log(me.greet());
// // Hello, my name is jack

// // create a teacher
// function Teacher(name, subject) {
//     Person.call(this, name);
//     this.subject = subject;
// }

// // declare method unique to Teacher
// Teacher.prototype.dismiss = function () {
//     return `${this.name} dismisses ${this.subject} class at 2pm.`;
// };


// // create a cop
// function Cop(name, rank) {
//     Person.call(this, name);
//     this.rank = rank;
// }

// // declare method unique to Cop
// Cop.prototype.introduction = function () {
//     return `I am ${this.name}, a ${this.rank} in the police force.`;
// };

// const teacher = new Teacher('Ms. Smith', 'Math');
// console.log(teacher);
// // Teacher {name: 'Ms. Smith', subject: 'Math'}
// console.log(teacher.dismiss());
// // Ms. Smith dismisses Math class at 2pm.

// const cop = new Cop('Barney', 'Sergeant');
// console.log(cop);
// // Cop {name: 'Barney', rank: 'Sergeant'}
// console.log(cop.introduction());
// // I am Barney, a Sergeant in the police force.

// // console.log(teacher.greet());
// // TypeError: teacher.greet is not a function at <line>

// // set the prototype of Teacher to Person
// Object.setPrototypeOf(Teacher.prototype, Person.prototype);
// console.log(teacher.greet());
// Hello, my name is Ms. Smith

// function Person(name) {
//     this.name = name;
// }

// function Teacher(name, subject, age) {
//     Person.call(this, name);
//     this.subject = subject;
//     this.age = age;
// }

// const person = new Person('steve');
// console.log(Object.keys(person));

// const teacher = new Teacher('rick', 'Math', 35);
// console.log(Object.keys(teacher));

// for (let prop in teacher) console.log(prop);

// console.log(teacher.hasOwnProperty('name'));

// pockets → bed → table → head



// function myName(name) {
//     // 'use strict';
//     console.log(this === window);   // true
//     this.name = name; // assigns a name to the window
// }

// myName('Willie the window object'); // function invocation
// console.log(window.name);   // Willie the window object


// const calc = {
//     num: 0,
//     increment() {
//         console.log(this === calc); // => true
//         this.num += 1;
//         return this.num;
//     }
// };

// calc.increment();
// console.log(calc.increment());


// function Pet(type, legs) {
//     this.type = type;
//     this.legs = legs;

//     this.logInfo = function () {
//         console.log(this === myCat); // => false
//         console.log(`The ${this.type} has ${this.legs} legs`);
//     };
// }

// const myCat = new Pet('Cat', 4);
// // logs "The undefined has undefined legs"
// // or throws a TypeError in strict mode
// setTimeout(myCat.logInfo, 1000);

// const dog = { name: 'fido' };

// function sayHi(greeting) {
//     console.log(this === dog);  // => true
//     return greeting + this.name;
// }

// sayHi.call(dog, 'Howdy, ');     // => Howdy, fido
// sayHi.apply(dog, ['Howdy, ']);  // => Howdy, fido


// function concat(word) {
//     'use strict';
//     return `${this} ${word}`;   // => undefined
// }

// concat('World!');    // => undefined World!

// const hello = concat.bind('Hello,');
// hello('World');     // => Hello, World!

// function Period(hours, minutes) {
//     this.hours = hours;
//     this.minutes = minutes;
// }

// // INCORRECT! Uses global context
// Period.prototype.format = () => {
//     return this.hours + ' hours and ' + this.minutes + ' minutes';
// };

// // CORRECT! Uses caller's context
// Period.prototype.format = function () {
//     return this.hours + ' hours and ' + this.minutes + ' minutes';
// };

// const walkPeriod = new Period(2, 30);


// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayName = function () {
//     console.log(`Hello, I'm ${this.name}!`);
// };

// const steve = Object.create(Person);
// console.log(steve.sayName)();

// const person = {
//     init: function (phrase) {
//         this.phrase = phrase;
//         return this;
//     },
//     speak: function () {
//         console.log(this.phrase);
//     }
// };

// const jack = Object.create(person).init('My name is Jack');
// jack.speak();   // => My name is Jack
// person.isPrototypeOf(jack); // => true



function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`);
};


const jack = Object.create(Person.prototype);
console.log(jack);