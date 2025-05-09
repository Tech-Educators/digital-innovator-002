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

app.post("/books", function (request, response) {
  console.log("POST route of /books has been hit");
  // The server should access the body of the request
  console.log("The request body is: ", request.body);

  const formValues = request.body;

  db.query(
    `
    INSERT INTO books_002 
    (title, author, synopsis, publish_date) 
    VALUES ($1, $2, $3, $4)`,
    [
      formValues.bookTitle,
      formValues.bookAuthor,
      formValues.bookSynopsis,
      formValues.bookYear,
    ]
  );
});

app.get("/booksyearquery", async function (request, response) {
  const yearQuery = request.query.year;
  const queriedBooks = await db.query(
    `SELECT * FROM books_002 WHERE publish_date = $1`,
    [queriedBooks]
  );
  response.json(queriedBooks);
});

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});
