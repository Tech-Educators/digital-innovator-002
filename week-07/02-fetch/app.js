console.log("Fetching cool things");

// fetch() is another inbuilt thing in Javascript
// It lets us make a request to a resource which is somewhere else (IE not in this project)

// We'll make a function which makes a fetch request, and then do something with the response.
async function getFox() {
  // <- async/await are inbuilt commands/instructions which let our code wait for a response from an API. (A bit like waiting for our meal to be served at the restaurant)
  // Structure of a fetch request:
  const response = await fetch("https://randomfox.ca/floof/"); // <- Line 9 is requesting something from the API. The link to the API is inside the fetch() brackets.

  console.log("response is: ", response);

  // After I have got my response, I need to 'parse' the data:
  const data = await response.json(); // <- We use the .json() method so that we can get some usable data out of our response!
  console.log("the data is: ", data);

  // Now that I have useful data, I can do something with it
  // like putting it onto my page!

  console.log(data.image); // <- Because our data variable is an object, we can access its properties with dot.notation

  // First, i need to CREATE an img ELEMENT:
  const newImg = document.createElement("img");
  // Then I need to set the src on that element to be the image inside the data:
  newImg.src = data.image;
  newImg.width = 300;
  // Then I need to append the image to my page
  document.getElementById("responseContainer").appendChild(newImg);
}

getFox(); // <- Here I am running the function
