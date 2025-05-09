console.log("Hello books!");

// --- --- --- ---
// This gets my HTML form:
const myBookForm = document.getElementById("book-form");
myBookForm.addEventListener("submit", handleSubmit);

// --- --- --- ---
// This handles the submit on my form:
async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(myBookForm);
  const formValues = Object.fromEntries(data);

  console.log(formValues);

  // We can assign the response of the fetch request to a variable.
  // This response is coming from our server
  const serverResponse = await fetch("http://localhost:8080/books", {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const parsedResponse = await serverResponse.json();

  console.log("The parsed servers response is: ", parsedResponse);

  // The response from our server is useful, because it lets us determine if it was successful or not.
  // We can use our own servers response, success:true/false, to do some extra stuff:
  if (parsedResponse.success == true) {
    // we just simply use .reset() on our form if it was a successful entry:
    myBookForm.reset();
    // and then invoke this function to refresh the books on our page after a new entry:
    getAndRenderBooks();
  }
}

// --- --- --- ---
// Here is the function where we are getting the data from our database, and rendering it to our page:
const booksContainer = document.getElementById("books-container");

async function getAndRenderBooks() {
  // First make a fetch request to your GET route:
  const response = await fetch("http://localhost:8080/books");
  const data = await response.json();
  // console.log(data.reverse());

  booksContainer.innerHTML = "";

  // I need to loop through the array of books, so that I can render each individual one onto the page.
  // .reverse() lets me put the most recent additions first:
  data.reverse().forEach(function (individualBook) {
    const bookDiv = document.createElement("div");
    const author = document.createElement("p");
    const publishDate = document.createElement("p");
    const synopsis = document.createElement("p");
    const title = document.createElement("h2");

    author.textContent = individualBook.author;
    publishDate.textContent = individualBook.publish_date;
    synopsis.textContent = individualBook.synopsis;
    title.textContent = individualBook.title;

    bookDiv.append(title, publishDate, author, synopsis);
    booksContainer.appendChild(bookDiv);
  });
}

// --- --- --- ---
// My books appear on page load because I have invoked the function in the global scope.
getAndRenderBooks();
