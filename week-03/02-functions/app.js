console.log("It's functions time!");

// We can use a function to perform a task in our app.
// Here is the basic structure of a function:
function functionName(optionalParameter) {
  // inside here, we do some code which performs an action
  return someKindOfValue;
}
// it has:
// the keyword 'function' which declares one is being written
// a made up name. In this case 'functionName'
// an optional parameter, or many parameters, which receive a value and can be used inside the function.
// some code which does stuff
// a return at the end.

// ------- -------
// Here's a function called 'greeting':
function greeting() {
  return "Hello there (General Kenobi).";
}
// We invoke/trigger/call/run it like this:
greeting();
// But to see the thing it returns, we should console.log it for now:
console.log(greeting());

// ------- -------
// Here's another one; this time it takes a parameter called 'person'.
// a parameter is like a temporary variable, that only the function can see:
function makeAConsoleLogWhichSaysGoodMorning(person) {
  return console.log(`Good Morning ${person} !`); // template literals!
}
// This piece of code simply says the function exists. It 'declares it'.
// It's like having the car on the driveway.

// we need to put the key IN the car and TURN it to make it run!
// We give this function a value as a parameter, to be used as the 'person':
makeAConsoleLogWhichSaysGoodMorning("Frankie"); // this piece of code has triggered the function!

// We can 'call' the function multiple times to make it run many times.
// the function is reusable, remember!
makeAConsoleLogWhichSaysGoodMorning("Varinder");
makeAConsoleLogWhichSaysGoodMorning("MD");
makeAConsoleLogWhichSaysGoodMorning("Anisa");
makeAConsoleLogWhichSaysGoodMorning("Nana");
makeAConsoleLogWhichSaysGoodMorning("Rawa");
makeAConsoleLogWhichSaysGoodMorning("Ricky");
makeAConsoleLogWhichSaysGoodMorning("Bertie");
makeAConsoleLogWhichSaysGoodMorning(5064); // this will still say "Good Morning 5064", even though we've said the 'parameter' is 'person'. It's up to us to put the right data in.

// A real example.
// A simple calculator:
// add!
function add(numberA, numberB) {
  // Make a new variable which stores the result of numberA plus numberB:
  let newNumber = numberA + numberB;
  // Return the value in the newNumber variable:
  return newNumber;
}

console.log(add(10, 20)); // Again, we console.log the function to see what it returns
console.log(add(32, 6)); // This calls the add function and mathematically adds numbers together.
console.log(add("32", "6")); // This calls the add function, recognises it has been given strings, and 'concatenates' them together
console.log(add("Hello", "World")); // Same here, "Oh! Look! Strings! I'll put them next to each other!"
