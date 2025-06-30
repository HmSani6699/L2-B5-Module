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
exports.app.use(express_1.default.json());
// Note Schema
const noteSchema = new mongoose_1.Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: "" },
}, {
    versionKey: false,
    timestamps: true,
});
// Note Schema Model
const Note = (0, mongoose_1.model)("Note", noteSchema);
// Create a new Note
exports.app.post("/notes/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = req.body;
    yield Note.create(note);
    res.status(201).json({
        succcess: true,
        message: "Note created sucessfully ...!",
        note,
    });
}));
// Get all Notes
exports.app.get("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield Note.find();
        res.status(200).json({
            succcess: true,
            message: "Get all notes sucessfully ...!",
            notes,
        });
    }
    catch (error) {
        res.status(400).json({
            succcess: false,
            message: "No data found ...!",
            error,
        });
    }
}));
// Get a single Notes
exports.app.get("/notes/:nodeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.nodeID;
    const note = yield Note.findById(id);
    res.status(201).json({
        succcess: true,
        message: " Get a single Note sucessfully ...!",
        note,
    });
}));
// Update Notes
exports.app.put("/notes/:nodeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.nodeID;
    const updateBody = req.body;
    const note = yield Note.findByIdAndUpdate(id, updateBody, { new: true });
    res.status(201).json({
        succcess: true,
        message: "Note Update sucessfully ...!",
        note,
    });
}));
// Delete a single Notes
exports.app.delete("/notes/:nodeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.nodeID;
    const note = yield Note.findByIdAndDelete(id);
    res.status(201).json({
        succcess: true,
        message: "Note Delete sucessfully ...!",
        note,
    });
}));
exports.app.get("/", (req, res) => {
    res.send("Hallo world");
});
