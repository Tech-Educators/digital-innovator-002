console.log("Let the queries begin!");
// I want to fetch the To Do items which are associated with userId number 6 AND are not yet completed (so are false)

// --- --- ---
// These variables are declared so that our form can change them, and so that our fetch() requst can use them:
let completed = false;
let userId = 0;

// --- --- ---

// This gets our results section on the page:
const apiResultsSection = document.getElementById("apiResults");

// --- --- ---
// This function fetches data from our API:
async function getToDos() {
  // We need to use backticks so that we can insert javascript into our string:
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}&completed=${completed}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);

  // Before my new results go onto the page, I need to get rid of my old results:
  apiResultsSection.innerHTML = "";

  // Lets render results to the page with a loop!!
  data.forEach((individualResult) => {
    // A wrapper:
    const resultDiv = document.createElement("div");
    resultDiv.classList = "result-div";

    const newH2 = document.createElement("h2");
    newH2.textContent = individualResult.title;
    newH2.classList = "result-title";

    const newP = document.createElement("p");
    newP.textContent = individualResult.completed;

    resultDiv.appendChild(newH2);
    resultDiv.appendChild(newP);
    apiResultsSection.appendChild(resultDiv);
  });
}

// getToDos(); // <-- Remember to invoke a function to run it!

// --- --- ---
// I need to allow my JS to get my form.
const myApiForm = document.getElementById("apiForm");
// --- --- ---
// I need to attach an event listener to my form.
myApiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted!");

  // I need to get the user submitted 'userId' and 'completed' values:
  const formData = new FormData(myApiForm);
  const formDataObject = Object.fromEntries(formData);
  console.log(formDataObject);

  userId = formDataObject.userIdNumber; // <- What we do here is we reassign the variable 'userId' to be the value of the data in our formDataObject.userIdNumber
  completed = formDataObject.completedBoolean;

  // This next if statement would be useful if you were using the 'checkbox' method. It checks to see if a value exists from the checkbox, then only reassigns the variable in that case:
  //   if (formDataObject.completedBoolean == "true") {
  //     // here, we're saying "if a thing exists called 'formDataObject.completedBoolean', then and ONLY then reassign the variable 'completed' to be that value"
  //     completed = formDataObject.completedBoolean;
  //   }

  // Run the fetch function after you have got the users values!
  getToDos();
});
