function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Here we've made an object with methods on it, allowing us to use 'calculator.add()' in another file.
const calculator = {
  add: add,
  subtract: subtract,
};

// and exported it as the default!
export default calculator;
