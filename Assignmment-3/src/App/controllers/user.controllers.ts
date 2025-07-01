import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRoutes = express.Router();

// Create a new user
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  const userBody = req.body;

  const createUser = new User(userBody);
  await createUser.save();

  try {
    res.status(201).json({
      success: true,
      Message: "User created succcessfully ... !",
      userBody,
    });
  } catch (error) {
    console.log(error);
  }
});

// GET all users
userRoutes.get("/", async (req: Request, res: Response) => {
  const getAllUsers = await User.find();

  try {
    res.status(201).json({
      success: true,
      Message: "User GET succcessfully ... !",
      getAllUsers,
    });
  } catch (error) {
    console.log(error);
  }
});

// GET a single user
userRoutes.get("/:userID", async (req: Request, res: Response) => {
  const id = req.params.userID;

  const getUser = await User.findById(id);

  try {
    res.status(201).json({
      success: true,
      Message: "GET  a single user succcessfully ... !",
      getUser,
    });
  } catch (error) {
    console.log(error);
  }
});

// Update a single user
userRoutes.put("/:userID", async (req: Request, res: Response) => {
  const id = req.params.userID;
  const updateBoday = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, updateBoday, {
    now: true,
  });

  try {
    res.status(201).json({
      success: true,
      Message: "UPDATE  a single user succcessfully ... !",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
});

// DELETED a single user
userRoutes.delete("/:userID", async (req: Request, res: Response) => {
  const id = req.params.userID;

  const deletedUser = await User.findByIdAndDelete(id);

  try {
    res.status(201).json({
      success: true,
      Message: "DELETED  a single user succcessfully ... !",
      deletedUser,
    });
  } catch (error) {
    console.log(error);
  }
});
