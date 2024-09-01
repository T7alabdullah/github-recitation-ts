import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response): void => {
  const numString = req.params.num as unknown as string;  // Ensure it's treated as a string without explicit type
  const num = parseInt(numString, 10);  // Safely parse num as an integer

  // Check if num is a valid number after parsing
  if (isNaN(num)) {
    res.status(400).send('Invalid input. Please provide a valid number.');
    return;
  }

  const fibN = fibonacci(num);  // Type inference is sufficient
  let result = `fibonacci(${num}) is ${fibN}`;  // Remove explicit type annotation

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);

};