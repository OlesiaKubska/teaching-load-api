import { Request, Response } from "express";
import {Load} from "../models/load.model.js";

// Get all loads
export const getAllLoads = async (req: Request, res: Response) => {
  try {
    const loads = await Load.find().populate("teacher").populate("subject");
    res.json(loads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get load by ID
export const getLoadById = async (req: Request, res: Response) => {
  try {
    const load = await Load.findById(req.params.id).populate("teacher").populate("subject");
    if (!load) return res.status(404).json({ message: "Load not found" });
    res.json(load);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create new load
export const createLoad = async (req: Request, res: Response) => {
  try {
    const load = new Load(req.body);
    await load.save();
    res.status(201).json(load);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Update load
export const updateLoad = async (req: Request, res: Response) => {
  try {
    const load = await Load.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!load) return res.status(404).json({ message: "Load not found" });
    res.json(load);
  } catch (error) {
    res.status(400).json({ message: "Invalid update data" });
  }
};

// Delete load
export const deleteLoad = async (req: Request, res: Response) => {
  try {
    const load = await Load.findByIdAndDelete(req.params.id);
    if (!load) return res.status(404).json({ message: "Load not found" });
    res.json({ message: "Load deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};