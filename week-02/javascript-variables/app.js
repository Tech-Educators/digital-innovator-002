let myName = "Tim";

// when using a variable, we don't put quotes around it
console.log(myName); // "Tim"
console.log("myName"); // "myName"

// Datatypes
// string is anything between ""
let myString = "This is my string. How nice.";
let myConfusingString = "10";
let stringWithQuote = "This string as a ' in it";

// number is anything that is a number
let myAge = 700;
let score = 0;
let year = 2025;
let decimal = 0.1;
let negativeNumber = -10;

// boolean is true or false
let timIsVeryHandsome = true;
let timHasLotsOfHaird = false; // :(

// variables can used to give a value to other variables
let a = 11;
let b = 21;
// ARITHMATIC
let sum = a + b; // 32
let product = a * b; // 231
let quotient = a / b; // 0.52380952381
let difference = a - b; // -10

// we can also combine stringer together to make longer strings
let str1 = "Hello";
let str2 = "world";
// concatenation (fancy way of saying jam these strings togeher)
let concatStr = str1 + str2;
let concatStrWithSpace = str1 + " " + str2;

// template literals
// instead of using quotes we use the backtick - `
let templateLiteral = `${str1} ${str2}`;

// so we can use3 template literals for any string that we want to put JavaScript-y things inside
// a string with some maths inside
let coolestNumber = `My favourite number is ${a + b}`; // "My favourite number is 32"

// IMPORTANT: a variable can be called anything with the folling exceptions
// it cannot be a JavaScript reserved word (function, prompt, let etc)
// it cannot include special characters except for _ and numbers
// it cannot start with a number

// there are some conventions that people like to follow and get upset about when others don't follow them
// camelCase <-- use this one
// PascalCase
// kebab-case (you can't do this in JS)
// snake_case
// NuTCaSE
