// get our dom nodes
const form = document.querySelector("form");
const responses = document.getElementById("responses");

// write our function that runs when we submit the form
async function handleSubmit(event) {
  event.preventDefault();

  // get the usuers prompt they typed
  const prompt = event.target.prompt.value;

  // make a POST request to our server
  const response = await fetch("http://localhost:8080/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // don't try to memorise this, it will just make you sad!
    },
    body: JSON.stringify({ prompt: prompt }),
  });

  // get the response from the server (which is the AI response), and put it on the page
  const data = await response.json();

  const p = document.createElement("p");
  p.textContent = data;
  responses.appendChild(p);

  console.log(data);
}

// profit?

form.addEventListener("submit", handleSubmit);
