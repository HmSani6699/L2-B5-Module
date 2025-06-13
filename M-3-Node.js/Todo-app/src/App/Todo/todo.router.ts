import express, {  Request, Response } from 'express';
export let todosRouter = express.Router();
 
// GET all todos
todosRouter.get('/', (req:Request, res:Response) => {
  res.json({"name": "HTML5"})
})

// CREATE a new todo
todosRouter.post('/create-todo', (req:Request, res:Response) => {
  res.json({"name": "HTML5"})
})

// UPDATE  an existing todo
todosRouter.put('/update-todo', (req:Request, res:Response) => {
  res.json({"name": "HTML5"})
})