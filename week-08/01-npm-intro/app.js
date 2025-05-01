import dayjs from "dayjs";

// we can access the methods of dayjs()
console.log("Get the hour: " + dayjs().hour());
console.log("Get the minute: " + dayjs().minute());
console.log("Get the second: " + dayjs().second());

// we can assign the results of those methods to variables
let hour = dayjs().hour();
let minute = dayjs().minute();
let second = dayjs().second();

console.log(`The time is: ${hour}:${minute}:${second}`);

// it does more...
console.log("a day.js day: " + dayjs().day());

// why are days displayed as numbers?!?!
let dayV1 = 0;
let dayV2 = "Sunday";
let dayV3 = "Dimanche";

if (dayV1 === 0) {
  //success
}

if (dayV2 === "Sunday") {
  // success
}

if (dayV2 === "sunday") {
  // epic fail
}

if (dayV3 === "Sunday") {
  // epic fail
}
