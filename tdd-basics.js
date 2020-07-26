/* eslint-disable */
const assert = (value) => {
  if (!value) {
    throw new Error('FAIL');
  }
}

function add(a, b) {
  return a + b;
}

assert(add(2, 2) === 4);
assert(add(10, 5) === 15);