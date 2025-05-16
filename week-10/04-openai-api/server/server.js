import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL:
    "https://webapp.v2.vortex.upscale.tech/proxy/techeducators/ee155667/di-openai/v1/",
  defaultHeaders: {
    apiKey: process.env.OPENAI_API_KEY,
  },
});

app.get("/", function (request, response) {
  response.json("This is just the root endpoint. Move along, please");
});

app.post("/chat", async function (request, response) {
  const userPrompt = request.body.prompt;
  console.log(userPrompt);

  if (!userPrompt) {
    response.json("no prompt given");
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini", // choose what version to use
    messages: [
      { role: "system", content: "You are a helpful assistant." }, // this is extra information for openai to have about itself
      { role: "user", content: userPrompt }, // this is the information the user gives
    ],
    store: true, // This does NOT mean it will remember the previous requests and responses
  });

  console.log("The completions variable is:, ", completion);
  console.log("Completions choices is:", completion.choices);

  response.json(completion.choices[0].message.content);
});

app.listen(8080, function () {
  console.log("Server is speedwalking on port 8080");
});
