console.log("It's time to manipulate the page");

// We are going to look at:

// How to select elements from our HTML, so that we can manipulate them

console.log("The Document", document); // Output: one single line with a 'toggle', and when we expand that toggle, we can see LOADS of things associated with the document.

// to select a thing from that document, we use a thing called a 'method', and this method is called '.getElementByID()
const myColour = document.getElementById("yourFaveColour");
console.log("The my Colour variable", myColour);

// How to change the content of:
// something with text:
myColour.textContent = "Orange";

// Lets also have a look at how to select elements themselves, or, elements via their class:

const myH1 = document.querySelector("h1");
console.log("The H1 querySelector", myH1);

const fancyText = document.querySelector(".fancyText");
console.log("The .fancyText querySelector", fancyText);
// .querySelector() goes and gets the FIRST element which matches what you tell it to look for
// If, for some reason, you wanted ALL of the matches
// you'd need to use .querySelectorAll()

const allFancyTexts = document.querySelectorAll(".fancyText");
console.log("allFancyTexts results as:", allFancyTexts);

// an image:
// Firstly, I need to let my javascript 'see' or 'select' that div:
const myImagesDiv = document.getElementById("myImages");
// We're going to create a new image
// give it a src and an alt
// append ('attach') it to the div
const newImg = document.createElement("img");
newImg.src =
  "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_628,q_65,w_580,x_2169,y_1622/v1/clients/orlandofl-redesign/GCMGolfShoot_2024_09bccaa1-95b0-4f25-9e35-b14b7d3a93dd.jpg";

myImagesDiv.appendChild(newImg);

// How to remove an element:
const removeThisElement = document.getElementById("removeMe");
removeThisElement.remove();

// How to change the style of something (IE the background colour of the body):
document.body.style.backgroundColor = "tomato";
