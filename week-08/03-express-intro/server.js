// --- --- --- --- --
// To start off with, I want to import the entirety of the express package into this server.js file:
import express from "express";

// --- --- --- --- --
// Next, I have a few "boilerplate" lines which help my express server to get set up:
const app = express(); // this assigns a variables called 'app' to use the express functionality.
const port = 4040; // We'll come back to this at the bottom of the code file.

// Some more boilerplate next!
// Here, I am telling my app what functionality to use:
app.use(express.json()); // This is telling our app to use 'express.json()', which allows it to accept JSON formatted information in the body of a request.

// That's all we are going to set up for now, but in future lessons we will add to this boilerplate.

// --- --- --- --- --
// Routes!
// The first thing we set up is a root route. We start at the "root".
// this route is equivalent to 'http://localhost:8080/'
// a '.get()' method takes two pareameters: a route name and a function to run when it's hit:
app.get("/", function (request, response) {
  // The console.log happens on the server
  console.log("The root route has been accessed");

  // The response gets sent back to the client (the browser)
  response.json("Woah! Who invited you? You have hit the root route");
});

// --- ---
// We are going to write some data here and pretend that it lives on a database.
// Then, we're going to allow our server to return that data, just like it would in an API:
const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self help",
  },
  {
    title: "Skills with people",
    author: "Les Giblin",
    genre: "Self help",
  },
  {
    title: "An Artists Way",
    author: "Julia Cameron",
    genre: "Self help",
  },
  {
    title: "Flat Stanely",
    author: "Jeff Brown",
    genre: "Children",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Dystopian Fiction",
  },
  {
    title: "The Sign of the Four",
    author: "Arthur Conan Doyle",
    genre: "Detective Fiction",
  },
];

app.get("/books", function (request, response) {
  console.log("Someone is trying to see all of our bookie wookie cookies!");
  console.log("Wait a sec, it's ok, let's give them books");
  response.json(books);
});

// --- ---
// So we have set up some routes.
// Now we need our server to
// 1) Run! and
// 2) Listen for requests from those who want our data
// The '.listen()' method takes two parameters: It takes a port to listen on, and it takes a function which we don't do much with.
app.listen(port, function () {
  console.log(`Server is running (away, catch it!) on port: ${port}`);
});

// --- --- --- --- --
// we used this command: node --watch server.js
// to run our server
