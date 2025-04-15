// We have seen functions quite a bit
// Functions allow our code to do 'stuff'
// They take an input, they do a process, they give an output
// Functions act like 'lego blocks' for our code/app/website

// This function is called add
// The inputs are "a" and "b"
// The process is adding them together
// The output is "a plus b"
function add(a, b) {
  return a + b;
}
// This function only fires up/becomes used/activates/triggers when we call it
add(5, 10);

// You have been using callback functions all along!
// const myButton = document.getElementById("playBtn");

// myButton.addEventListener("click", function () {
//   console.log("I have been clicked");
// }); // this right here is a callback function

// Call back functions are weird
// You mainly need to know that they exist
// However, here is an example of how you can define your own:

function childOne() {
  console.log("I am child one");
}
// childOne();

function childTwo() {
  console.log("I am child two");
}
// childTwo();

function parent(IAmTheCallBackFunction) {
  console.log("I am the parent");
  IAmTheCallBackFunction();
}
parent(function () {
  console.log("I am the callback function which has been passed in");
});
