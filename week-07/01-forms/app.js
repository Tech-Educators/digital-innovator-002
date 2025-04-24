console.log("Form stuff");

// firstly we need to get our form:
const myForm = document.querySelector("form");
// console.log(myForm); // this shows me that I have selected my form correctly

// second, we have attached an event listener to the form:
myForm.addEventListener("submit", handleSubmitWithEventTarget);

// third, we've got an event handler function, which takes the event as a parameter by default, and before anything else prevents the default behaviour
function handleSubmit(event) {
  event.preventDefault(); // <-- woo hoo!

  console.log("handleSubmit has run");
  //   console.log(event); // we can access the event if needed

  // Here's how we can get our user inputs:
  const data = new FormData(myForm);
  const formValues = Object.fromEntries(data);

  console.log("data", data);
  console.log("form values are", formValues);

  console.log(`Hello ${formValues.firstName}`);
  console.log("Hello " + formValues.firstName);

  // After this point when we have the user data
  // this is where we would do something with it, like asking an API for 'lord of the rings' books and getting those results

  const newPTag = document.createElement("p");
  newPTag.textContent = `Thank you for submitting your secret details ${formValues.firstName}`;
  document.body.appendChild(newPTag);
}

// Note: By default, any function which is used as an event hendler gets passed a thing called 'event' as a parameter by default

// An alternative way to getting our form data, with the 'event.target' method.
// This method is quite useful if you only have one or two form fields, but any more than that you should use the FormData and Object.fromEntries magical spell.
function handleSubmitWithEventTarget(event) {
  event.preventDefault();
  // We have access to the event object.
  console.log(event);
  // we can assign the results to a variable:
  const userFirstName = event.target.firstName.value; // <- we have assigned the user written value, from the firstName input, from the event.target (which is the form) to a variable here! Whew!
  const userPassword = event.target.userPassword.value;
}
