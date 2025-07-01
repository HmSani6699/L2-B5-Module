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
exports.noteRoutes = void 0;
const note_models_1 = require("../models/note.models");
const express_1 = __importDefault(require("express"));
exports.noteRoutes = express_1.default.Router();
// Create a new Note
exports.noteRoutes.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = req.body;
    yield note_models_1.Note.create(note);
    res.status(201).json({
        succcess: true,
        message: "Note created sucessfully ...!",
        note,
    });
}));
// Get all Notes
exports.noteRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_models_1.Note.find();
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
exports.noteRoutes.get("/:nodeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.nodeID;
    const note = yield note_models_1.Note.findById(id);
    res.status(201).json({
        succcess: true,
        message: " Get a single Note sucessfully ...!",
        note,
    });
}));
// Update Notes
exports.noteRoutes.put("/:nodeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.nodeID;
    const updateBody = req.body;
    const note = yield note_models_1.Note.findByIdAndUpdate(id, updateBody, { new: true });
    res.status(201).json({
        succcess: true,
        message: "Note Update sucessfully ...!",
        note,
    });
}));
// Delete a single Notes
exports.noteRoutes.delete("/:nodeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.nodeID;
    const note = yield note_models_1.Note.findByIdAndDelete(id);
    res.status(201).json({
        succcess: true,
        message: "Note Delete sucessfully ...!",
        note,
    });
}));
