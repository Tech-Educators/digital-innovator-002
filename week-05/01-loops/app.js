//arrays
//we are storing data
//we have a list of items with two properties, index number and total length

const films = [
  "Muriel's Wedding", // index 0
  "The Substance", // index 1
  "The Lord of the Rings: Two Towers", //index 2
  "Lord of the Flies",
];

//TODO I want to write in the console the first item in my array
//to access one item in the array, we are going to use the index number
//the index number starts at zero 0
//in the array we have a total length of 3 items
console.log(films[1]); // "The Substance"
console.log(films.length); // 3
console.log(films[3]); // undefined, there is no index 3

//TODO I want to log each item in my array onto the console.
// console.log(films[0]);
// console.log(films[1]);
// console.log(films[2]);
// console.log(films[3]);
// console.log(films[4]);
// console.log(films[5]);
// console.log(films[100]);

//loops --> a task that we repeat for a number of times
//I only write the task once, but the task is repeated as many times as I need
//we can use loops to play audio or video repeatedly (in a loop)
//we can use a loop to create elements on our website with similar structure, for example, a section

//types of loops
// for loop --> a task we will repeat for a specific amount of times.
//In this loop, we know the amount of times we want to repeat this task.

//structure
//keyword --> for
// for ("loop instructions"){
//task
// }

//example
// ++ increment operator
//You can change the initial value (i) and the condition (the second instruction) to change the settings of the loop.
for (let i = 1; i <= 5; i++) {
  //task
  console.log("I am loooooooping", i);
}

//the initial value is zero 0 to match the index number 0 in my array
for (let i = 0; i <= films.length; i++) {
  //TODO I want to log in the console the items in my array one by one
  console.log(films[i]);
}

//==================================================================
//while loop --> a task we will repeat an indefinite amount of times

//structure
//keyword --> while
// while (loop instructions){
//task
// }

//example
let counter = 0;

//this is an infinite loop because the condition (the instructions) is always true
while (counter <= 5) {
  //TODO I want to log a counter on the console
  console.log(counter);
  counter++; //while loop will run forever, so make sure you have a break to stop them
}

//===================================================================
// for ... of --> simplifies the syntax of a for loop, in the (instructions)
for (let i = 0; i <= films.length; i++) {
  //TODO I want to log in the console the items in my array one by one
  console.log(films[i]);
}

for (let film of films) {
  console.log(film);
}

//=====================================================================
//loop method --> forEach()
//this is an array method --> it only works with arrays
for (let i = 0; i <= films.length; i++) {
  //TODO I want to log in the console the items in my array one by one
  console.log(films[i]);
}

// forEach(function () {
//task
// });

films.forEach(function (film) {
  console.log(film);
});
