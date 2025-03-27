console.log("Hello, where are the arrays please?!");

// Remember let vs const is as simple as:
// use const as a default
// use let when the value of the variable needs to change

// Data types we've looked at so far:
const myFirstName = "Frankie"; // this data type is text, technically it is a string
const theDrivingAge = 17; // this data type is a number
const theSunIsShining = true; // this data type is a boolean (true or false)

// Arrays!
// Arrays are defined with square brackets: [ ]
let colours = ["orange", "red", "green", "blue", "khaki green", "purple"];
let myNewArray = [4, 8, 12, 16, 24, 32];

// We are avoiding this:
// const blue = "blue"
// const orange = "orange"
// const green = "green"

console.log(myFirstName); // Output: Frankie
console.log(colours); // Output: (6) - which is the number of items in our array
// Also: ['orange', 'red', 'green', 'blue', 'khaki green', 'purple']
// Also get a dropdown arrow. We get to look inside the array.
// The array 'index' goes from 0 to the last item number, because computers start counting from 0!

// So, to 'access' the first item, we need to use the number 0:
console.log("Accessing position 0:", colours[0]); // colours[0] accesses the first item in the array at index 0
console.log("Accessing khaki green:", colours[4]); // colours[4] gets us index 4, which is khaki green
console.log("Accessing red:", colours[1]); // we get red!

// Now lets have a look at built in javascript methods to change arrays:

// add an item to the end of an array
colours.push("magenta");
console.log("After push:", colours);

// remove an item from the end of an array
colours.pop();
console.log("After pop:", colours);

// add an item to the start of an array
colours.unshift("burlywood");
console.log("After unshift:", colours);

// remove an item from the start of an array
colours.shift();
console.log("After shift:", colours);

// add an item at a specific 'index'
colours.splice(5, 0, "mustard yellow");
console.log("After splice:", colours);

// do a thing called 'splice' which can do fancy stuff
// splice does three things: (indexStartPoint, numberOfItemsToDelete, theItemToAdd)
colours.splice(2, 3, "forest green");
console.log("After splice, with deleted items:", colours);

// Before splice with deletion:
// 0: 'orange',
// 1: 'red',
// 2: 'green',
// 3: 'blue',
// 4: 'khaki green',
// 5: 'mustard yellow',
// 6: 'purple'

// After deletion splice:
// 0: "orange"
// 1: "red"
// 2: "forest green"
// 3: "mustard yellow"
// 4: "purple"
