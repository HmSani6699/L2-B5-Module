import  express, { Application, Request, Response }  from "express";
import { model, Schema } from "mongoose";

export const app: Application = express();

// Note Schema
const noteSchema = new Schema({
    title: String,
    content: String
});


// Note Schema Model
const Note = model('Note', noteSchema);


// Create a new Note
app.post('/create-note',async (req: Request, res: Response) => {
    const myNote = new Note({
        title: "Note Number 1",
        content: "My frist note in mongoose"
    });

    // Save data in mongodb database
    await myNote.save();

    res.status(201).json({
        succcess: true,
        message: "Note created sucessfully ...!",
        myNote:myNote
    })

})


app.get('/', (req: Request, res: Response) => {
    res.send('Hallo world')
})