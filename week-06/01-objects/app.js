console.log("Check my objects out!");

// We have used arrays to store a list of information:
const frankieThings = [
  "Orange", // string
  25, // number
  32,
  ["red", "silver", "green"], // array
  "Nottingham",
];
// Arrays are declared with square brackets
// Items are separated with commas
// Arrays are nice, but they have limited information.

// OBJECTS TO THE RESCUE!
// Objects allow us to define 'key: value' pairs, within the data structure
const frankieObject = {
  favouriteColour: "Orange", // string
  favouriteNumber: 25, //number
  currentAge: 32,
  bikeColours: ["red", "silver", "green"], //array
  currentWorkingLocation: "Nottingham",
};
// Objects are delcared with curly brackets/curly braces

// we can console log our variables and see the difference
console.log("The array", frankieThings);
console.log("The object", frankieObject);
// we can access individual properties on an object too!
console.log(
  "Only the currentLocation from the object:",
  frankieObject.currentWorkingLocation
);
// This is called 'Dot Notation'

// -----------------------------------
// Practical example
// Here's an array of blog posts. The problem is, they only have titles:
const myBlogPosts = [
  "The rabbit who went to sea",
  "The turle who couldn't swim",
  "The bike which was full of glitter",
];
// This is better, as the blog post has more information. But it's not ideal:
const blog = {
  title: "The rabbit who went to sea",
  author: "Cranky Brieves",
  writtenOn: "April 14th 2025",
  content:
    "This is the best story in the world, buckle up, you're in for a ride. ",
};

console.log("The title from the blog variable,", blog.title);
console.log("first:", blog.category);
// We can add properties to an object:
blog.category = "Story";
console.log("second:", blog.category);
// We can also update properties:
blog.category = "Childrens Story";
console.log("third:", blog.category);

// -----------------------------------
// -----------------------------------
// ATTENTION: Stretch Goals be lurkin' ahead!
// -----------------------------------
// -----------------------------------

// what we really want, is a LIST of individual blog posts, and each individual post (or item) has got lots of information attached:

const allBlogPosts = [
  {
    title: "The rabbit who went to sea",
    author: "Cranky Brieves",
    writtenOn: "April 14th 2025",
    content:
      "This is the best story in the world, buckle up, you're in for a ride. ",
  }, // this object is item 1, at position 0
  {
    title: "The turtle who couldn't swim",
    author: "Grertie Maffles",
    writtenOn: "April 14th 2025",
    content:
      "This is actually the best story in the world, buckle up, it's so much better than rabbits. ",
  }, // this object is item 2 at position 1
  {
    title: "The bike which was full of glitter",
    author: "Jim Criff",
    writtenOn: "January 7th 1990",
    content: "The mysterious hidden story you'll never forget!",
  }, // this object is item 3 at position 2
];

// Ways to access objects within an array
console.log(allBlogPosts);
console.log(allBlogPosts[0]);
console.log(allBlogPosts[2].title);

// It would be WAY too much work to write code for 100 individual items
// This is where we use a loop!
allBlogPosts.forEach(function (individualPost) {
  console.log("the individual post within the forEach loop:", individualPost);
  console.log("Getting each individual title:", individualPost.title);

  const newH2 = document.createElement("h2");
  newH2.textContent = individualPost.title;
  document.body.appendChild(newH2);
});
