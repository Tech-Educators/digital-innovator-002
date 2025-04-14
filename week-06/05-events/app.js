console.log("Contaminents!");

// How do we get our Javascript to allow user interaction? Events!

// ----- Counter Example -----
// First lets get our elements:
const myCounterButton = document.getElementById("counterButton");
const clicksCounter = document.getElementById("clicksCounter");
console.log(clicksCounter);
// console.log(myCounterButton);

// We need a variable to store the current state of a counter:
let currentCount = 0;

// an event listener is a method which takes two parameters.
// 1. The first parameter is a thing (event) to listen for,
// 2. The second parameter, is a function to run when that thing (event) happens.
myCounterButton.addEventListener("click", function () {
  console.log("I've been clicked");
  // when this button gets clicked, I want the currentCount to increase by one:
  currentCount = currentCount + 1;
  // I also need to update what's shown on the page!
  clicksCounter.textContent = currentCount;
  console.log(currentCount);
});

// STRETCH KNOWLEDGE AHEAD:
// ----- Backgrounds Example -----
const tomatoBGButton = document.getElementById("tomatoBG");
const limeBGButton = document.getElementById("limeBG");
const aliceblueBGButton = document.getElementById("aliceblueBG");

// --- The following event listeners work, but are repetitive:
// tomatoBGButton.addEventListener("click", function () {
//   document.body.style.backgroundColor = "tomato";
// });

// limeBGButton.addEventListener("click", function () {
//   document.body.style.backgroundColor = "lime";
// });

// aliceblueBGButton.addEventListener("click", function () {
//   document.body.style.backgroundColor = "aliceblue";
// });

// --- These are better, as they call a separate dynamic function
// tomatoBGButton.addEventListener("click", function () {
//   backgroundChanger("tomato"); // <-- so inside the code block, we call a function and pass it a parameter
// });

// limeBGButton.addEventListener("click", function () {
//   backgroundChanger("lime");
// });

// aliceblueBGButton.addEventListener("click", backgroundChanger("aliceblue")); // this code line would just execute on page load, instantly changing our background to aliceblue. Oh no! Use an anonymous function!

// --- Here I have a separate colour changer function
function backgroundChanger(colour) {
  document.body.style.backgroundColor = colour;
}

// --- But here is one way I would do it, which makes use of classes on the buttons, gets them as an array, and uses their textContent as the parameter passed to the function.
const backgroundChangerButtons = document.querySelectorAll(
  ".background-changer-button"
); // <- get all my buttons
console.log(backgroundChangerButtons);

// Loop through the list:
backgroundChangerButtons.forEach(function (button) {
  // Add an event listener to each one:
  button.addEventListener("click", function () {
    // and in each ones listener, call the function with the current "text content" as a colour
    backgroundChanger(button.textContent);
  });
});
