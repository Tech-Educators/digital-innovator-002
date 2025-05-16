console.log("Fetching happenning");

const responsesDiv = document.getElementById("responses");
const promptForm = document.querySelector("form");

promptForm.addEventListener("submit", sendChatRequest);

async function sendChatRequest(event) {
  event.preventDefault();
  const prompt = event.target.clientPrompt.value;
  console.log(prompt);

  const response = await fetch("http://localhost:8080/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  console.log("server response is:", data);

  responsesDiv.innerHTML = "";

  const responseP = document.createElement("p");
  responseP.textContent = data;
  responsesDiv.appendChild(responseP);
}
