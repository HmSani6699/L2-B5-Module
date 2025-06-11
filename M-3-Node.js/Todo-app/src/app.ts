import express, { Application, Request, Response } from 'express';
import { todosRouter } from './App/Todo/todo.router';
const app:Application = express();
app.use(express.json())



app.use('/todos', todosRouter)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!333345')
})

export default app;