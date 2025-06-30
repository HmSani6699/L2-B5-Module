import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

export const app: Application = express();

app.use(express.json());

// Note Schema
const noteSchema = new Schema({
  title: { type: String, require: true, trim: true },
  content: { type: String, default: "" },
});

// Note Schema Model
const Note = model("Note", noteSchema);

// Create a new Note
app.post("/notes/create-note", async (req: Request, res: Response) => {
  const note = req.body;
  await Note.create(note);

  res.status(201).json({
    succcess: true,
    message: "Note created sucessfully ...!",
    note,
  });
});

// Get all Notes
app.get("/notes", async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      succcess: true,
      message: "Get all notes sucessfully ...!",
      notes,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: "No data found ...!",
      error,
    });
  }
});

// Get a single Notes
app.get("/notes/:nodeID", async (req: Request, res: Response) => {
  const id = req.params.nodeID;
  const note = await Note.findById(id);

  res.status(201).json({
    succcess: true,
    message: " Get a single Note sucessfully ...!",
    note,
  });
});

// Update Notes
app.put("/notes/:nodeID", async (req: Request, res: Response) => {
  const id = req.params.nodeID;
  const updateBody = req.body;

  const note = await Note.findByIdAndUpdate(id, updateBody);

  res.status(201).json({
    succcess: true,
    message: "Note Update sucessfully ...!",
    note,
  });
});

// Delete a single Notes
app.delete("/notes/:nodeID", async (req: Request, res: Response) => {
  const id = req.params.nodeID;
  const note = await Note.findByIdAndDelete(id);

  res.status(201).json({
    succcess: true,
    message: "Note Delete sucessfully ...!",
    note,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hallo world");
});
