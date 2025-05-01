import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello DI002!</h1>
    <h2>Look at this funky Vite Stuff</h2>
    <div class="card">
      <p>Click this button to see what happens</p>
      <button id="counter" type="button"></button>
    </div>

    <div class="card">
      <p>Click this second button to see what happens</p>
      <button id="secondCounter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
setupCounter(document.querySelector("#secondCounter"));
