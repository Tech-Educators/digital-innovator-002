// First off we need to import the express package
import express from "express";

// Next up, we need to setup a variable which references the express package:
const app = express();

// We also want to import CORS to allow other clients to see our stuff:
import cors from "cors";
// We next need to tell our express app to use CORS:
app.use(cors());

// I'm going to define the data my server will return:
const books = [
  {
    title: "Steal Like An Artist",
    body: "This cool book is for creative folks so that they dont feel guilty about taking inspiration",
  },
  {
    title: "Flat Stanley",
    body: "A childrens classic about a boy who can go 2D and slip under doors!",
  },
  {
    title: "The Stormlight Archive: The Way of Kings",
    body: "A gripping fantasy novel set in Brandon Sanderson immersive cosmere",
  },
  {
    title: "Dictionary",
    body: "Definitions for every word",
  },
  {
    title: "The Very Hungry Caterpillar",
    body: "A caterpillar eats a bunch of things",
  },
  {
    title: "Kane and Abel",
    body: "A gripping story of two men—one born into wealth, the other into poverty—whose lives intertwine in a lifelong rivalry fueled by ambition, revenge, and fate.",
  },
  {
    title: "Steering the Craft",
    body: "Le Guin lays out ten chapters that address the most fundamental components of narrative, from the sound of language to sentence construction to point of view. Each chapter combines illustrative examples from the global canon with Le Guin's own witty commentary and an exercise that the writer can do solo or in a group.She also offers a comprehensive guide to working in writing groups, both actual and online.",
  },
];

// I need 3 things minumum:
// a root GET route
// a GET route for my data (so, my books)
// a LISTEN method so that my server can listen for requests

app.get("/", function (req, res) {
  res.json("Who invited you here! Show your ticket please!");
});

app.get("/books", (request, response) => {
  response.json(books);
});

const PORT = 8080;

app.listen(PORT, function (req, res) {
  console.log(
    `Server is running running, and running running on Port: ${PORT}`
  );
});
