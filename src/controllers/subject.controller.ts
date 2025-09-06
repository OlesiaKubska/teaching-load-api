import { Request, Response } from "express";
import {Subject} from "../models/subject.model.js";

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createSubject = async (req: Request, res: Response) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.json(subject);
  } catch (error) {
    res.status(400).json({ message: "Invalid update data" });
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.json({ message: "Subject deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};