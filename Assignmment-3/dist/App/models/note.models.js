"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
// Note Schema
const noteSchema = new mongoose_1.Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: "" },
}, {
    versionKey: false,
    timestamps: true,
});
// Note Schema Model
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
