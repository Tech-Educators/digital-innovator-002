console.log("Helloooooooooooo");

// Global Scope
// This is any variable which is declared outside of a code 'block':
let myName = "Frankie";
const myWorkingLocation = "Nottingham";
const myBuildingNumber = 5;

// These console.logs are also in the global scope, and have access to variables in the global scope:
console.log(myName);
console.log(myWorkingLocation);
console.log(myBuildingNumber);

// This function is in the global scope, BUT, it has code in the curly braces which is 'scoped locally' to it:
function displayName() {
  // Inside these curly braces, are the actions we want the function to take
  // or, "the code you wish to execute"

  // The code in here is 'locally scoped' to the function:
  console.log("Hello, I'm inside the function code block");

  // Our local scope can access global variables:
  console.log("inside the function scope:", myName);
  console.log("inside the function scope:", myBuildingNumber);
  // BUT, we can also create 'locally scoped' variables:
  const myBicycleMake = "Specialized";
  console.log("inside the function scope:", myBicycleMake);
}

// Remember, this is how we invoke/call the function:
displayName();

// We're in the global scope again:
// console.log("In the Global scope:", myBicycleMake); // Output = ERROR! (because it cannot 'see' inside the functions local scope)

// This is another function, defined in the local scope
function displayBikeDetails() {
  // because the variable on line 26 was declared 'locally', it means we avoided 'polluting the global namespace'
  // meaning we can "reuse" that variable name!
  const myBicycleMake = "Trek";
  console.log("this is in my second function:", myBicycleMake);
}
displayBikeDetails();
