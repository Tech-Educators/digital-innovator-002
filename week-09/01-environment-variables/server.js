// Our server boilerplate setup:
import express from "express";
import cors from "cors";
// Here we import the dotenv package for use
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

// Here, we configure dotenv ready for use:
dotenv.config();

// Next up, we need a root route
app.get("/", function (request, response) {
  response.json("You are looking at my root route. Do you have a ticket?");
});

const apiKey = process.env.UNSPLASH_ACCESS_KEY;

app.get("/secret-route", async function (req, res) {
  const API = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=puppy`;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});

// My server has to listten for requests on a certain port:
app.listen(8080, function () {
  console.log(
    "The server is running and they've forgotten their shoes! It's on 8080 (mph)"
  );
});
