console.log("My gallery is awesome");

// I need an array of my images
// Each image should have a 'src' and an 'alt'
let images = [
  {
    src: "./images/surly1.jpg",
    alt: "an orange fat bike",
  }, // first item. position 0
  {
    src: "./images/surly2.jpg",
    alt: "a bike-packing bike",
  }, // second item, position 1
  {
    src: "./images/surly3.jpg",
    alt: "green bike in a forest",
  },
  {
    src: "./images/surly4.jpg",
    alt: "green bike in a forest",
  },
  {
    src: "./images/surly5.jpg",
    alt: "green bike in a forest",
  },
];

// My JS needs to 'see' my elements:
const thumbnailContainer = document.getElementById("thumbnailsContainer");
const mainBackgroundContainer = document.getElementById(
  "backgroundImageContainer"
);

// This loop is going to look at our images array, and put each one onto the page.
images.forEach(function (individualImage) {
  //   console.log("this individual image is:", individualImage);
  //   console.log("this individual image src is:", individualImage.src);

  // first we need to put the images on the page
  // we need to create a new element
  const myNewImg = document.createElement("img");
  // we need to assign the 'src' of that element
  //   console.log(myNewImg);
  myNewImg.src = individualImage.src;
  // we also need to give the 'alt' to the new img tag:

  // when clicked, the main background image should be this individual image.
  myNewImg.addEventListener("click", function () {
    // Before our event listener does anything else, we need it to remove the old image:
    mainBackgroundContainer.innerHTML = "";

    console.log("ive been clicked");
    // inside of this function, I want the main background image to be changed to THIS individualImage
    console.log("we have access to this:", individualImage);
    const backgroundImage = document.createElement("img");
    backgroundImage.src = individualImage.src;
    mainBackgroundContainer.appendChild(backgroundImage);
  });

  // we need add (append!) our new element to the page
  thumbnailContainer.appendChild(myNewImg);
});

// ALTERNATIVE to forEach. Pick which you prefer!
// For loop, for looping through the images array:
const thumbnailContainerForLoop = document.getElementById(
  "thumbnailsContainerForLoop"
);

for (let index = 0; index < images.length; index++) {
  const myNewImg = document.createElement("img");
  console.log("looping");

  myNewImg.src = images[index].src;
  // we also need to give the 'alt' to the new img tag:

  myNewImg.addEventListener("click", function () {
    mainBackgroundContainer.innerHTML = "";
    const backgroundImage = document.createElement("img");
    backgroundImage.src = images[index].src;
    mainBackgroundContainer.appendChild(backgroundImage);
  });
  thumbnailContainerForLoop.appendChild(myNewImg);
}

// STRETCH:
// Your code would be cleaner and easier to read if you made separate functions...
// One for displayThumbnails()
// and one for changeMainBackgroundImage()
// Have a think about how you could make that happen, where the loop would go, how you would invoke/call/trigger those functions when the Javascript loads.
