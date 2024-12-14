import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/hello', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

app.listen(3001, () =>
    console.log('Backend is running on http://localhost:3001'),
);
