// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "./my_model/";

let model, webcam, labelContainer, maxPredictions;

const initialiseButton = document.getElementById("initialise-button");
initialiseButton.addEventListener("click", init);

// Load the image model and setup the webcam
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  console.log(model);

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append elements to the DOM
  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
}

async function loop() {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);
  // 'prediction' is an array of objects, and each object has got the properties: prediction, classname

  for (let i = 0; i < maxPredictions; i++) {
    let classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);

    // We can use those properties to check if:
    // 1- is the probability above a certain threshold
    // 2- if the threshold is met, do something if the classname matches

    // Here in these nested if statements we're just simply changing the text displayed on screen:
    if (prediction[i].probability > 0.5) {
      if (prediction[i].className == "Thumbs Up") {
        classPrediction = "👍";
      }
      if (prediction[i].className == "Thumbs Down") {
        classPrediction = "BOO!";
      }
      if (prediction[i].className == "No thumb") {
        classPrediction = "❌ ";
      }
      if (prediction[i].className == "Halfway thumb") {
        classPrediction = "CAESAR";
      }
    }

    labelContainer.childNodes[i].innerHTML = classPrediction;
  }
}
