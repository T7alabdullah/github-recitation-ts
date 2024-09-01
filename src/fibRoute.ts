import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response): void => {
  const numString = req.params.num;  // Type inference is sufficient
  const num = parseInt(numString, 10);

  if (isNaN(num)) {
    res.status(400).send('Invalid input. Please provide a valid number.');
    return;
  }

  const fibN = fibonacci(num);  // Type inference is sufficient
  let result = `fibonacci(${num}) is ${fibN}`;  // Removed explicit type annotation

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

//chatgpt source
