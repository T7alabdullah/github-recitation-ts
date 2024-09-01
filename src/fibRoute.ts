// Endpoint for querying the fibonacci numbers

const fibonacci = require("./fib");

export default (req, res) => {
  // Safely parse the number and handle cases where num is not a valid number
  const num = parseInt(req.params.num, 10);

  // Check if num is a valid number after parsing
  if (isNaN(num)) {
    return res.status(400).send("Invalid input. Please provide a valid number.");
  }

  const fibN = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

// source CHATGPT