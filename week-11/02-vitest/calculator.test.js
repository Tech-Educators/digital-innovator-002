// in this file is where I will write my tests, which will test my functions
import { add, multiply } from "calculator.js";
import { describe, expect, test } from "vitest";

// I'm ready to write some tests
// The way I will do this:
// 1: I need to describe a suite of tests
// 2: I need to define tests individually
// 3: Within each test, I need to tell it what to expect

// 'describe' is a function which takes two parameters:
// 1st is the name of the test suite
// 2nd is a callback function to be run
describe("Add Tests", function () {
  // 'test' is a function which also takes two parameters
  // a name which YOU decide, and a CBF
  test("adds 1 + 2 to equal 3", function () {
    expect(add(1, 2)).toBe(3);
  });

  // I want to write a test which checks that 10 and 20 returns 30
  test("adds 10 to 20 to equal 30", function () {
    expect(add(10, 20)).toBe(30);
  });

  test("adds 50 to 100 to equal 150", function () {
    const result = 150;
    expect(add(50, 100)).toBe(result);
  });
});

// Adding more 'describe' suites allows you to compartmentalise your tests, and in the results in the terminal you can more easily see the separation:
describe("Multiply Tests", function () {
  test("multiplies 5 and 10 to equal 50", function () {
    const result = 50;
    expect(multiply(5, 10)).toBe(result);
  });
});
