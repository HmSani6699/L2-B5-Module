import { Note } from "../models/note.models";
import express, { Request, Response } from "express";

export const noteRoutes = express.Router();

// Create a new Note
noteRoutes.post("/create-note", async (req: Request, res: Response) => {
  const note = req.body;
  await Note.create(note);

  res.status(201).json({
    succcess: true,
    message: "Note created sucessfully ...!",
    note,
  });
});

// Get all Notes
noteRoutes.get("/", async (req: Request, res: Response) => {
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
noteRoutes.get("/:nodeID", async (req: Request, res: Response) => {
  const id = req.params.nodeID;
  const note = await Note.findById(id);

  res.status(201).json({
    succcess: true,
    message: " Get a single Note sucessfully ...!",
    note,
  });
});

// Update Notes
noteRoutes.put("/:nodeID", async (req: Request, res: Response) => {
  const id = req.params.nodeID;
  const updateBody = req.body;

  const note = await Note.findByIdAndUpdate(id, updateBody, { new: true });

  res.status(201).json({
    succcess: true,
    message: "Note Update sucessfully ...!",
    note,
  });
});

// Delete a single Notes
noteRoutes.delete("/:nodeID", async (req: Request, res: Response) => {
  const id = req.params.nodeID;
  const note = await Note.findByIdAndDelete(id);

  res.status(201).json({
    succcess: true,
    message: "Note Delete sucessfully ...!",
    note,
  });
});
