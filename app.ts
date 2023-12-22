import 'source-map-support/register';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { useRoutes } from './src/Content/_Routes/@Routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World!');
});

useRoutes(app);

app.use('*', (req: Request, res: Response) => {
  return res.status(404).send('Not Found');
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  // Handle the error
  return res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  return console.log(`Listening at: http://localhost:${port}`);
});
