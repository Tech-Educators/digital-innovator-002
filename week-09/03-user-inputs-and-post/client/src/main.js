console.log("Hello books!");

// I need to target the form DONE
// I need to add an event listener to my form - submit DONE
// I need to get my form data using those two cool bits of code DONE
// I need to make a fetch() request to my server, POSTing the information

const myBookForm = document.getElementById("book-form");
// console.log(myBookForm);

myBookForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Here I am getting my formData and putting it into an object
  const data = new FormData(myBookForm);
  const formValues = Object.fromEntries(data);

  console.log(formValues);

  // Here I make a fetch() request to my server and I POST the form data
  fetch("http://localhost:8080/books", {
    method: "POST", // we need to tell the fetch request which method we are using
    body: JSON.stringify(formValues), // we need to attach a 'body' of information. We use a thing called JSON.stringify to format the data. Inside the brackets, we attach our formValues object
    headers: {
      "Content-Type": "application/json",
    }, // json stands for: JavaScript Object Notation. We need to send a header which explains the format of what were sending.
  });
}
