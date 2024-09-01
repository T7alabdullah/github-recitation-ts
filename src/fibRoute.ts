// Endpoint for querying the fibonacci numbers

// src/fibRoute.ts

import { Request, Response } from 'express';
import { fibonacci } from './fib';  // Use ES6 import syntax

export default (req: Request, res: Response): void => {
  const numString = req.params.num; // req.params is correctly typed by Express
  const num = parseInt(numString, 10);  // Explicitly convert string to number

  // Validate num after parsing
  if (isNaN(num)) {
    res.status(400).send('Invalid input. Please provide a valid number.');
    return;
  }

  const fibN: number = fibonacci(num);  // Ensure the result of fibonacci is a number
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};


// source CHATGPT