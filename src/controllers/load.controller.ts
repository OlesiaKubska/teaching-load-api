import { Request, Response } from "express";
import {Load} from "../models/load.model.js";

export const getAllLoads = async (req: Request, res: Response) => {
  try {
    const {year} = req.query;

    const filter: any = {};
    if (year) {
      filter.year = Number(year);
    }

    const loads = await Load.find(filter).populate("teacher").populate("subject");
    res.json(loads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getLoadById = async (req: Request, res: Response) => {
  try {
    const load = await Load.findById(req.params.id).populate("teacher").populate("subject");
    if (!load) return res.status(404).json({ message: "Load not found" });
    res.json(load);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createLoad = async (req: Request, res: Response) => {
  try {
    const load = new Load(req.body);
    await load.save();
    res.status(201).json(load);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

export const updateLoad = async (req: Request, res: Response) => {
  try {
    const load = await Load.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!load) return res.status(404).json({ message: "Load not found" });
    res.json(load);
  } catch (error) {
    res.status(400).json({ message: "Invalid update data" });
  }
};

export const patchLoad = async (req: Request, res: Response) => {
  try {
    const load = await Load.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!load) return res.status(404).json({ message: "Load not found" });

    res.json(load);
  } catch (error) {
    res.status(400).json({ message: "Invalid patch data" });
  }
};

export const deleteLoad = async (req: Request, res: Response) => {
  try {
    const load = await Load.findByIdAndDelete(req.params.id);
    if (!load) return res.status(404).json({ message: "Load not found" });
    res.json({ message: "Load deleted  successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};