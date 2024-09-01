// util function that computes the fibonacci numbers
function fibonacci(n: number): number {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError('Input must be a valid number');
  }

  if (n < 0) {
    throw new RangeError('Input must be a non-negative integer');
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // Removed redundant type annotations
  let a = 0;
  let b = 1;
  let temp: number;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
export default fibonacci;
