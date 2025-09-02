import { Schema, model, Document } from "mongoose";
import { IUser } from "../types/entities.js";

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);
