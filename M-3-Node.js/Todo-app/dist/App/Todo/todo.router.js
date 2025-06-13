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
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../../db/config");
const mongodb_1 = require("mongodb");
exports.todosRouter = express_1.default.Router();
// GET all todos
exports.todosRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = config_1.client.db("todoDB");
    const collection = database.collection("todos");
    const result = yield collection.find().toArray();
    // console.log(result);
    res.json(result);
}));
// CREATE a new todo
exports.todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, email, age } = req.body;
    const database = config_1.client.db("todoDB");
    const collection = database.collection("todos");
    const user = {
        name: title,
        email: email,
        age: age
    };
    yield collection.insertOne(user);
    res.send({ message: "ToDo created successfully" });
}));
// UPDATE  an existing todo
exports.todosRouter.put('/update-todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, email, age } = req.body;
    const id = req.params.id;
    const database = config_1.client.db("todoDB");
    const collection = database.collection("todos");
    yield collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: {
            name: title,
            email: email,
            age: age
        } });
    res.json({ message: "UPDATE todo successfully" });
}));
// DELETE a todo
exports.todosRouter.delete('/delete-todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const database = config_1.client.db("todoDB");
    const collection = database.collection("todos");
    yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json({ message: "DELETE a todo successfully" });
}));
