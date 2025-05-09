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

// --- --- --- ---
// Funky database posting and return stuff in here:
app.post("/books", async function (request, response) {
  console.log("POST route of /books has been hit");
  // The server should access the body of the request
  console.log("The request body is: ", request.body);

  const formValues = request.body;

  // We can assign the response from ther database to a variable, and use a property called rowCount to decide if it was successful or not:
  const dbResponse = await db.query(
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
  // this allowed us to see a 'rowCount' in our response from the server:
  console.log("Response from the database is:", dbResponse);

  // and we can use that rowCount to send back a success message:
  if (dbResponse.rowCount == 1) {
    response.json({ success: true });
  } else {
    response.json({ success: false });
  }
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
