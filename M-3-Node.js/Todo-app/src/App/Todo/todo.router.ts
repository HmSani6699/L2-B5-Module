import express, {  Request, Response } from 'express';
import { client } from '../../db/config';
import { ObjectId } from 'mongodb';
export let todosRouter = express.Router();
 
// GET all todos
todosRouter.get('/',async (req: Request, res: Response) => {
  const database =  client.db("todoDB");
  const collection = database.collection("todos");
  const result = await collection.find().toArray();
  // console.log(result);
  
  res.json(result)
})

// CREATE a new todo
todosRouter.post('/create-todo', async (req: Request, res: Response) => {
  const { title, email,age } = req.body
  const database =  client.db("todoDB");
  const collection =  database.collection("todos");
  
  const user = {
    name: title,
    email: email,
    age: age
  };

   await collection.insertOne(user);
  
  res.send({message: "ToDo created successfully"})
})

// UPDATE  an existing todo
todosRouter.put('/update-todo/:id',async (req: Request, res: Response) => {
  const { title, email, age } = req.body;
  const id = req.params.id;
  const database = client.db("todoDB");
  const collection = database.collection("todos");
  
  await collection.updateOne({_id:new ObjectId(id)},{$set:{
    name: title,
    email: email,
    age: age
  }})

  res.json({message: "UPDATE todo successfully"})
})


// DELETE a todo
todosRouter.delete('/delete-todo/:id',async (req: Request, res: Response) => {

  const id = req.params.id;
  const database = client.db("todoDB");
  const collection = database.collection("todos");
  
  await collection.deleteOne({_id:new ObjectId(id)})

  res.json({message: "DELETE a todo successfully"})
})