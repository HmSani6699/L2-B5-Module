import express, { Application, Request, Response } from "express";
import { noteRoutes } from "./App/controllers/note.controllers";
import { userRoutes } from "./App/controllers/user.controllers";

export const app: Application = express();

app.use(express.json());

app.use("/notes", noteRoutes);
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hallo world");
});
