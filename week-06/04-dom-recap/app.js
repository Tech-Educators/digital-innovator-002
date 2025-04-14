console.log("Funky stuff");

console.log(document); // the document is my index.html, basically.

// everything is an object
// there are some built-in object methods available on the 'document'

// Lets add something to the document
const myBrandNewH2 = document.createElement("h2"); // if we console log this, we just get: <h2></h2>
console.log(myBrandNewH2); // this log behaves strangely...
myBrandNewH2.textContent = "I am a second heading, added via javascript"; // because everything is an object, I can access the new <h2>, and change its attributes with Dot Notation.
// Finally, I want to add this new element to my page. Or, 'append' it as a 'child' element.
document.body.appendChild(myBrandNewH2); // appendChild will add this element to the end of the body, after all other elements

// We might want to be more surgical in where we put our elements. Let's get some elements by their id!
const myImagesContainer = document.getElementById("imageContainer");
console.log(myImagesContainer);
// Lets add an image:
const newImg = document.createElement("img");
console.log(newImg);
newImg.src =
  "https://www.almanac.com/sites/default/files/image_nodes/spider-plant_t50-ss.jpg";
newImg.width = "200";
myImagesContainer.appendChild(newImg);
