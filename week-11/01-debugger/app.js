debugger; // this will stop the code running here, and open the debugger in the browsers dev tools
console.log("I am in the console!");

const frankiesNumber = 70;

function countToTen() {
  for (let i = 0; i < 10; i++) {
    console.log("The value of i is currently:", i);
    // debugger;
  }
}

countToTen();

function add(a, b) {
  let sum = a + b;
  console.log(sum);
  debugger;
}

add(5, 10);
