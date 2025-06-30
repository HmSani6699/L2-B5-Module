"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
exports.app = (0, express_1.default)();
// Note Schema
const noteSchema = new mongoose_1.Schema({
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
const Note = (0, mongoose_1.model)("Note", noteSchema);
// Create a new Note
exports.app.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myNote = new Note({
        title: "Note Number 1",
        content: "My frist note in mongoose",
        comment: [{ body: "Eibar sob thik ache", date: "23/23/2006" }],
        tags: {
            lavel: "Daron",
        },
    });
    // Save data in mongodb database
    yield myNote.save();
    res.status(201).json({
        succcess: true,
        message: "Note created sucessfully ...!",
        myNote: myNote,
    });
}));
exports.app.get("/", (req, res) => {
    res.send("Hallo world");
});
