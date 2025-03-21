console.log("Hey, I'm IFFING here!");

// let's look at the structure of a conditional, AKA an 'if statement'

// if (a condition){
//  do some kind of action
// }

if (5 < 10) {
  console.log("True! 5 is less than ten! (I hope)"); // this console.log appears, because it is TRUE that 5 is less than ten
}

// How about this one?
if (3 > 1) {
  console.log("Will we see this console.log?"); // We do see it! 3 is greater than 1! Woop, maths still works
}

// OK, OK, what about this one?

if (30 < 10) {
  // Thirty is never less than Ten
  // so the condition equates to FALSE!
  // This code never runs
  console.log("Thirty has become less than ten"); //
}
// We can use variables in our conditions

let myAge = 18; // number
let myBoolean = true; // boolean
let myString = "Hello team!"; // string

// We can use a variable, but, the if statement isn't true, so the log doesn't show.
if (myAge == "18") {
  console.log(
    "My age is 18. This console log displays because we've used the '==' operator"
  );
}

if (myAge === "18") {
  console.log("We have used the '===' operator. Does this appear?");
}

// Hold on, what's the difference between '==' and '==='?
// They are 'equality operators'
// They compare values
//
// == means 'Loose equality'
// Converts values to the same data type before comparing
//
// === means ' Strict equality'
// Compares BOTH value AND data type, without conversion

let usersAge = prompt("What is your age?");
console.log("The user entered:", usersAge);
console.log("The type of the userAge variable:", typeof usersAge); // We can use an in-built javascript thing called 'typeof' to check the data-type of a variable

// We can use 'else' and 'else if's to give extra conditions to our statement
// Just be careful of writing a million 'if' checks!
if (usersAge == 32) {
  console.log(
    "You are 32, you can now get your super-advanced-special driving license"
  );
} else if (usersAge > 17) {
  console.log("Congrats, you are able to drive!");
} else if (usersAge == 17) {
  console.log("You have JUST turned 17. Go and get your license!");
} else {
  console.log("Uh oh, you're not older than 17. You must age!");
}

// Doing these extra 'if' statements is fine, and works, but we can use 'else', and another thing...
// if (usersAge < 17) {
//   console.log("You are not able to drive, do some ageing");
// }

// if (usersAge == 17) {
//   console.log("Congrats! You've only just been able to drive");
// }
