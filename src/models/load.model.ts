import { Schema, model } from "mongoose";
import { ILoad } from "../types/entities.js";

const loadSchema = new Schema<ILoad>({
  teacher: { type: Object, required: true },
  subject: { type: Object, required: true },
  group: { type: String, required: true },
});

export const Load = model<ILoad>("Load", loadSchema);