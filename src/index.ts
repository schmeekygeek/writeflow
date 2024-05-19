import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv'
import userroutes from './routes/userroutes'
import blogroutes from './routes/blogroutes'

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/user', userroutes)
app.use('/blog', blogroutes)

app.listen(
  port,
  () => console.log(`Server started at http://localhost:${port}`)
);
