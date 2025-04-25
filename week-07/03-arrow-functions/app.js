console.log("Arrow functions!");

// The regular way to write a function:
function greet(username) {
  console.log("Hello " + username);
}
// The arrow way to declare a function:
const secondGreet = (username) => {
  console.log(`Hello ${username}`);
};

secondGreet("Varinder");
// An arrow function essentially looks like this:
// () => {}
// Compared to a regular function:
// function (){}

//-------------
// Lets look at event listeners:
// This is the way we're used to:
let count = 0;
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  console.log("I have been clicked!");
  count = count + 1;
});

// This is the Arrow Function way:
myButton.addEventListener("click", () => {
  console.log("I have been clicked");
  count = count + 1;
});

//-------------
// One more example, this time with a loop:
const myBooks = [
  "Atomic Habits",
  "The Hobbit",
  "Rich Dad, Poor Dad",
  "Diary of a Wimpy Kid",
  "Harry Potter and the Goblet of Fire",
];
// Regular function
myBooks.forEach(function (individualBook) {
  console.log(individualBook);
});
// Arrow function
myBooks.forEach((individualBook) => {
  const newH2 = document.createElement("h2");
  newH2.textContent = individualBook;
  document.body.appendChild(newH2);
});
