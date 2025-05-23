import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const META_PROMPT =
  "In here, you will put all the information the AI needs to know hwo to respond. Check the assignemnt for an example format of this.";

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how roude.");
});

// THIS IS THE MAIN BIT
app.post("/chat", async function (request, response) {
  // get my prompt from the client (in the form that we will make), for now I am faking it
  const prompt = request.body.prompt; // this is the value passed in the body of our fetch

  // make the API request to OpenAI
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: META_PROMPT }, // here is where you call your engineered prompt
      { role: "user", content: prompt }, // this is the information the user gives
    ],
    store: true, // This does NOT mean it will remember the previous requests and responses
  });

  // send the response back to the client
  response.json(completion.choices[0].message.content);
});

app.listen(8080, function () {
  console.log("Running on PORT 8080");
});
