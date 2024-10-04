import express, { Request, Response } from 'express';

import morgan from 'morgan';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

// -----> Correction Test of Morgam
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'IC com API' });
});

app.use((req: Request, res: Response) => {
  return res.status(404).send({
    message: 'Not Found',
  });
});

app.listen(port, () => {
  console.log(`Server is running on at http://localhost:${port}`);
});
