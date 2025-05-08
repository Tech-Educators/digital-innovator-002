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

app.get("/testroute", (request, response) => {
  response.json("You have reached the test route!");
});

app.get("/books", async function (req, res) {
  const books = await db.query(`SELECT * FROM books_002`);
  console.log(books.rows);
  res.json(books.rows);
});

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});
