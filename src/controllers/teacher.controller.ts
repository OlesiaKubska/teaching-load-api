import { Request, Response } from "express";
import {Teacher} from "../models/teacher.model.js";

// Get all teachers
export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get teacher by ID
export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create new teacher
export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Update teacher
export const updateTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json(teacher);
  } catch (error) {
    res.status(400).json({ message: "Invalid update data" });
  }
};

// Delete teacher
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json({ message: "Teacher deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};