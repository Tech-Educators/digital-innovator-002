console.log("My vite project");

// https://jsonplaceholder.typicode.com/posts/1
async function getPosts() {
  console.log("I am getPosts, and I am about to fetch some data");
  // We'll change the fetch URL below to our deployed server URL on Render!
  // https://di002-monorepo-project-server.onrender.com/books
  const response = await fetch("http://localhost:8080/books");
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(
    "I am getPosts, and I'm about to give the data to renderDataOntoPage()"
  );
  renderDataOntoPage(data);
}

function renderDataOntoPage(apiResults) {
  // this function is going to receive the results from the API
  // Loop through the array it is given
  // and render each result to the page
  console.log(
    "I am renderDataOntoPage, and I am about to loop through the array"
  );
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for (let index = 0; index < apiResults.length; index++) {
    const element = apiResults[index];
    console.log(element);
    // In this loop, is where I would do some DOM stuff to get the results on the page
    const newTitle = document.createElement("h2");
    const newBody = document.createElement("p");

    newTitle.textContent = element.title;
    newBody.textContent = element.body;

    // resultsDiv.appendChild(newTitle);
    // resultsDiv.appendChild(newBody);
    resultsDiv.append(newTitle, newBody); // this append() method lets us do the same as the above two lines.
  }
}

const postsBtn = document.getElementById("get-posts-button");
postsBtn.addEventListener("click", function () {
  console.log("I am about to call getPosts()");
  getPosts();
});
