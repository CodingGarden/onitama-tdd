/* eslint-disable */
const assert = (value) => {
  if (!value) {
    throw new Error('FAIL');
  }
}

function add(a, b) {
  if (typeof a !== 'number') {
    throw new Error('Arguments must be numbers.');
  }

  if (typeof b !== 'number') {
    throw new Error('Arguments must be numbers.');
  }

  return a + b;
}

assert(add(2, 2) === 4);
assert(add(-2, 2) === 0);
assert(add(10000, 10000) === 20000);

let caughtError;
try {
  add('2', '2');
} catch (error) {
  caughtError = error;
}
assert(caughtError && caughtError.message === 'Arguments must be numbers.');

caughtError = {};
try {
  add(2, '2');
} catch (error) {
  caughtError = error;
}
assert(caughtError && caughtError.message === 'Arguments must be numbers.');