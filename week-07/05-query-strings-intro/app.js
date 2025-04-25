console.log("Let the queries begin!");
// I want to fetch the To Do items which are associated with userId number 6 AND are not yet completed (so are false)

// Here we could use a form, with a submission event and then take that data and put it into our URL

let completed = false;
let userId = 10;

async function getToDos() {
  // We need to use backticks so that we can insert javascript into our string:
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}&completed=${completed}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
}

getToDos();
