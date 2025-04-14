console.log("Object methodsssssssss");

// this variable is about my phone. It is an object data type:
const frankiesPhone = {
  make: "Samsung",
  model: "S23",
  colour: "white",
};

console.log(frankiesPhone.colour); // we use dot notation to access a property on an object.
// First we access the variable: frankiesPhone
// Next we access the property: .colour
// Layers of an onion!

const bertiesPhone = {
  make: "Samsung",
  model: "S22 Ultra",
  colour: "burgandy",
  ringtone: function () {
    console.log("Berties phone is ringing, BRRRRRRINGGGG BRINGGGGGGGGGGGG!!!");
  },
};

bertiesPhone.ringtone();

const varindersPhone = {
  make: "iPhone",
  model: "14 or 15, who knows!",
  colour: "black",
  ringtone: function () {
    console.log("zzzzzzzzt, zzzzzzzzzzt!");
  },
  getModel: function () {
    return this.model;
  },
};

varindersPhone.ringtone();
console.log("the result of getModel:", varindersPhone.getModel());

// -------------------------
// Stretch Knowledge:
// Everything is an object remember.

console.log(); // <-- OH MAN! Dot notation, to access a method, on the console object!!!

const myArrayOfColours = ["blue", "orange", "green"];

//myArrayOfColours.forEach(); // <-- A loop, which is a method on the array object.

console.log(myArrayOfColours.length); // <-- .legnth is a property on the array object. Cool!

// DOM Manipulation
document.getElementById("myParagraphTag"); //<-- The Document is an object, and getElementById() is a method!
