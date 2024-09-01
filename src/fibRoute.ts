// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';  // Import types for Express
import fibonacci from './fib';  // Use ES6 import syntax for importing modules

export default (req: Request, res: Response): void => {  // Add explicit types for req and res
  const numString: string = req.params.num;  // Ensure req.params.num is treated as a string
  const num = parseInt(numString, 10);  // Safely parse num as an integer

  // Check if num is a valid number after parsing
  if (isNaN(num)) {
    res.status(400).send('Invalid input. Please provide a valid number.');
    return;
  }

  const fibN: number = fibonacci(num);  // Ensure the result of fibonacci is a number
  let result: string = `fibonacci(${num}) is ${fibN}`;  // Result is explicitly typed as a string

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);  // Send result as a response
};
