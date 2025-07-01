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
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user.model");
exports.userRoutes = express_1.default.Router();
// Create a new user
exports.userRoutes.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userBody = req.body;
    const createUser = new user_model_1.User(userBody);
    yield createUser.save();
    try {
        res.status(201).json({
            success: true,
            Message: "User created succcessfully ... !",
            userBody,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
// GET all users
exports.userRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllUsers = yield user_model_1.User.find();
    try {
        res.status(201).json({
            success: true,
            Message: "User GET succcessfully ... !",
            getAllUsers,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
// GET a single user
exports.userRoutes.get("/:userID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userID;
    const getUser = yield user_model_1.User.findById(id);
    try {
        res.status(201).json({
            success: true,
            Message: "GET  a single user succcessfully ... !",
            getUser,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
// Update a single user
exports.userRoutes.put("/:userID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userID;
    const updateBoday = req.body;
    const updatedUser = yield user_model_1.User.findByIdAndUpdate(id, updateBoday, {
        now: true,
    });
    try {
        res.status(201).json({
            success: true,
            Message: "UPDATE  a single user succcessfully ... !",
            updatedUser,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
// DELETED a single user
exports.userRoutes.delete("/:userID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userID;
    const deletedUser = yield user_model_1.User.findByIdAndDelete(id);
    try {
        res.status(201).json({
            success: true,
            Message: "DELETED  a single user succcessfully ... !",
            deletedUser,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
