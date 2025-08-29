import { Schema, model } from "mongoose";
import { ITeacher } from "../types/entities.js";

const teacherSchema = new Schema<ITeacher>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String },
  degree: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: Number, required: true },
});

export const Teacher = model<ITeacher>("Teacher", teacherSchema);