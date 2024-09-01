// util function that computes the fibonacci numbers
module.exports = function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError('Input must be a valid number');
  }

  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};
