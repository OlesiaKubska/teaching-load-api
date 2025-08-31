import { Schema, model, Types } from "mongoose";
import { ILoad } from "../types/entities.js";

const loadSchema = new Schema<ILoad>({
  teacher: { type: Types.ObjectId, ref: "Teacher", required: true },
  subject: { type: Types.ObjectId, ref: "Subject", required: true },
  group: { type: String, required: true },
  type: { type: String, enum: ["lecture", "practice"], required: true },
});

export const Load = model<ILoad>("Load", loadSchema);