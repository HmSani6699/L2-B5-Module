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
