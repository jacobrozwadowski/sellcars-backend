// src/controllers/authController.ts
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/user";
import hashPassword from "../utils/hash-password";
import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET;

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      // Generate a JWT token
      const token = jwt.sign({ email }, String(secret), {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      res.json({ token });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
