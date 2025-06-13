"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.todosRouter = express_1.default.Router();
// GET all todos
exports.todosRouter.get('/', (req, res) => {
    res.json({ "name": "HTML5" });
});
// CREATE a new todo
exports.todosRouter.post('/create-todo', (req, res) => {
    res.json({ "name": "HTML5" });
});
// UPDATE  an existing todo
exports.todosRouter.put('/update-todo', (req, res) => {
    res.json({ "name": "HTML5" });
});
