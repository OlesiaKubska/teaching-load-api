import { Schema, model } from "mongoose";
import { ISubject } from "../types/entities.js";

const subjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  hours: { type: Number, required: true },
});

export const Subject = model<ISubject>("Subject", subjectSchema);