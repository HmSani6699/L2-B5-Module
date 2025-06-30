import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

export const app: Application = express();

// Note Schema
const noteSchema = new Schema({
  title: { type: String, require: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["Note js", "MongoDB", "Express", "Mongoose"],
    default: "Mongoose",
  },
  comment: [{ body: String, date: String }],
  tags: {
    lavel: { type: String, require: true },
    color: { type: String, default: "Red" },
  },
});

// Note Schema Model
const Note = model("Note", noteSchema);

// Create a new Note
app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Note Number 1",
    content: "My frist note in mongoose",
    comment: [{ body: "Eibar sob thik ache", date: "23/23/2006" }],
    tags: {
      lavel: "Daron",
    },
  });

  // Save data in mongodb database
  await myNote.save();

  res.status(201).json({
    succcess: true,
    message: "Note created sucessfully ...!",
    myNote: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hallo world");
});
