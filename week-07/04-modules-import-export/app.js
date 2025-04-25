// Making use of Import and Export allows us to slim down our app.js file, and keep our code more maintainable.
// Learning about it here paves the ground for when we start using packages!

// --------------
// Here we are using a named export with the curly brackets:
import { add, subtract } from "./calculator.js";

// Here we are using the default export syntax, so we are getting the thing which is exported by default
import greetUser from "./userGreeting.js";

// This extra bit of stretch knowledge courtesy of Nana!
import calculator from "./calculatorObject.js";

console.log("Check out my modularity!");

// What? This function is written elsewhere but we can use it here? Amazing!
console.log(greetUser("Bertie"));

console.log(add(5, 10));

// Here we have imported the default export from calculatorObject.js, and are accessing the Methods on that object. Check the file out!
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
