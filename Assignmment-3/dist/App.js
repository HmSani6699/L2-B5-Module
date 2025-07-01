"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const note_controllers_1 = require("./App/controllers/note.controllers");
const user_controllers_1 = require("./App/controllers/user.controllers");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/notes", note_controllers_1.noteRoutes);
exports.app.use("/users", user_controllers_1.userRoutes);
exports.app.get("/", (req, res) => {
    res.send("Hallo world");
});
