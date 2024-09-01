import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response): void => {
  const numString = req.params.num as unknown as string;  // Ensure it's treated as a string
  const num = parseInt(numString, 10);  // Safely parse num as an integer

  // Check if num is a valid number after parsing
  if (isNaN(num)) {
    res.status(400).send('Invalid input. Please provide a valid number.');
    return;
  }

  // Check if the number is negative
  if (num < 0) {
    res.send(`fibonacci(${num}) is undefined`);
    return;
  }

  const fibN = fibonacci(num);  // Compute the Fibonacci number safely
  let result = `fibonacci(${num}) is ${fibN}`;  // Prepare the response

  res.send(result);
};
