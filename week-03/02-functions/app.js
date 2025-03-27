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

function greeting() {
  return "Hello there (General Kenobi).";
}

console.log(greeting());

function makeAConsoleLogWhichSaysGoodMorning(person) {
  return console.log(`Good Morning ${person} !`); // template literals
} // This piece of code simply says the function exists

makeAConsoleLogWhichSaysGoodMorning("Frankie"); // this piece of code 'calls' the function. So it triggers it to run. It's like putting the key in the car and turning it.
// We can 'call' the function multiple times to make it run maky times:
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

// add
function add(numberA, numberB) {
  let newNumber = numberA + numberB;
  return newNumber;
}

console.log(add(10, 20));

console.log(add(32, 6)); // This calls the add function and mathematically adds numbers together.
console.log(add("32", "6")); // This calls the add function, recognises it has been given strings, and 'concatenates' them together
console.log(add("Hello", "World")); // Same here, "Oh! Look! Strings! I'll put them next to each other!"
