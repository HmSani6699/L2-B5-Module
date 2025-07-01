import { model, Schema } from "mongoose";
import { Inote } from "../interfaces/note.interface";

// Note Schema
const noteSchema = new Schema<Inote>(
  {
    title: { type: String, require: true, trim: true },
    content: { type: String, default: "" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Note Schema Model
export const Note = model("Note", noteSchema);
