class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this);
    };
}

let button = new Button('hello');

// button.click();
// console.log(`test: ${button.click()}`);


class Tester {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logName() {
        console.log(this.name);
    }

    logThis() {
        console.log(this);
    }
}

const a = new Tester('Hello', 1);
const b = new Tester('World', 2);

// a.logName();
a.logThis();

// b.logName();
b.logThis();

console.log(a instanceof Tester);