console.log("Play it!");

// First off, let's target our HTML elements and assign each to a variable
// --- This is the audio:
const hipHopAudio = document.getElementById("hipHopAudio");
// --- These are the buttons:
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.getElementById("pauseBtn");
// --- Our Skip buttons:
const skipForBtn = document.getElementById("skipForBtn");
const skipBackButton = document.getElementById("skipBackBtn");

// Now our buttons need an Event Listener:
playBtn.addEventListener("click", function () {
  hipHopAudio.play();
});

pauseBtn.addEventListener("click", function () {
  hipHopAudio.pause();
});

skipForBtn.addEventListener("click", function () {
  hipHopAudio.currentTime = hipHopAudio.currentTime + 10;
  // hipHopAudio.currentTime =+ 10 // <-- exactly the same result
});

skipBackButton.addEventListener("click", function () {
  //   hipHopAudio.currentTime = hipHopAudio.currentTime - 10;
  hipHopAudio.currentTime -= 10;
});

// STRETCH KNOWLEDGE:
// .querySelector() gets the first element which matches the query.
// .querySelectorAll() gets ALL the elements which match the query. Cool!
const allMyButtons = document.querySelectorAll("button");
console.log("allMyButtons:", allMyButtons);
