## Data types

- Number
- BigInt
- String
- Boolean
- null
- undefined
- Object: An Object is a collection of data, as opposed to a primitive type that stores only one thing.
- Symbols: A Symbol creates unique idenitifiers for objects.
  
## Strings

[W3C String method reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)
[MDN complete String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Equality checks

- `==`: equality test.
  
  This cannot distinguish `0` from `false` because the equality operator converts operands of different types to numbers. So an empty string (`''`) and `false` both become `0`.

- `===`: strict equality. This checks equality without type conversion.
- `!==`: strict non-equality operator. Use this bc it leaves less room for errors.

## Conditionals

The following values are called `falsy` because they become `false` during conditional operations:
- `0`
- empty string (`""`)
- `null`
- `undefined`
- `NaN`

Other values are called `truthy`.

### switch

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent = "Choice 1";
      break;
    case "rainy":
      para.textContent = "Choice 2";
      break;
    case "snowing":
      para.textContent = "Choice 3";
      break;
    case "overcast":
      para.textContent = "Choice 4";
      break;
    default:
      para.textContent = "";
  }
}
```

### ternary

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
```

## Regex

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
[When NOT to use regex](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions)
[Video: Regex in 20 mins](https://www.youtube.com/watch?v=rhzKDrUiJVk)

## DevTools

[CSS features reference](https://developer.chrome.com/docs/devtools/css/reference/)
[Debug JS](https://developer.chrome.com/docs/devtools/javascript/)
[Pause your code with breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)

## Functions

Start function names with a verbal prefix that describes its action:
- "get…" – return a value
- "calc…" – calculate something
- "create…" – create something
- "check…" – check something and return a boolean, etc.


### Function declaration

```js
function sayHi() {
  alert('hello')
}
```

### Function expression

```js
let sayHi = function() {
  alert( "Hello" );
};
```

### Anonymous function

```js
(function () {
  alert("Hello")
})
```

### Arrow function

```js

// format
let func = function(arg1, arg2, ..., argN) {
  return expression;
};

// no args
let sayHi = () => alert("Hello!");

// multi-line w braces and required return
let sum = (a, b) => {
  let result = a + b;
  return result;
};
```

### IIFE

Immediately Invoked Function Expression:

```js
(function () {
  // do something
})();
```


## Errors

- `ReferenceError`: When one refers to a variable that is not declared and/or initialized within the current scope.

## Arrays

[Array methods](https://www.w3schools.com/js/js_array_methods.asp)

## Loops

### for...of loop

```js
for (const cat of cats) {
  console.log(cat);
}
```