import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

dotenv.config();

// Establishing a connection to our database, using the new 'pg' package:
const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
});

//Root route!
app.get("/", (request, response) => {
  response.json("You have reached the root. Don't trip!");
});

app.get("/books", async function (req, res) {
  const books = await db.query(`SELECT * FROM books_002`);
  console.log(books.rows);
  res.json(books.rows);
});

// Query strings!
// Here we have a route dedicated to searching our books by year
app.get("/booksyearquery", async function (request, response) {
  // http://localhost:8080/booksyearquery?year=1964  <- this is the URL we went to in our browser

  console.log("current query: ", request.query); // <- To see the what is in the request.query object we can console.log like this

  console.log(request.query.year);
  const yearQuery = request.query.year; // <- This is how we assign a specific part of the query to a variable

  const queriedBooks = await db.query(
    `SELECT * FROM books_002 WHERE publish_date = ${yearQuery}`
  ); // <- Here is how we can use that variable as part of our database query

  console.log(queriedBooks.rows);

  response.json(queriedBooks.rows); // <- Finally, we send that back to the client
});

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});
