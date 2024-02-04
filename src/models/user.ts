// src/models/user.ts
import mongoose, { Document, Schema } from "mongoose";

interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  passwordHash: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    firstName: {
      type: String,
      maxlength: 50,
      required: true,
    },
    lastName: {
      type: String,
      maxlength: 50,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      maxlength: 75,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
