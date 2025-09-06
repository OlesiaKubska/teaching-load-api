import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { JWT_SECRET } from "../config/env.js";


const TOKEN_TTL = "1h";

const badRequest = (res: Response, message: string) =>
  res.status(400).json({ success: false, message });

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body ?? {};

    if (!username || !email || !password) {
      return badRequest(res, "username, email and password are required");
    }

    const existing = await User.findOne({ email: String(email).toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username: username.trim(),
      email: String(email).toLowerCase().trim(),
      password: hashedPassword });
    await user.save();

    return res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body ?? {};
    if (!email || !password) {
      return badRequest(res, "email and password are required");
    }

    const user = await User.findOne({ email: String(email).toLowerCase().trim() });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(String(password), user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: TOKEN_TTL }
    );

    // console.log("[AuthController] Generated token:", token);
    // console.log("[AuthController] Using secret:", JWT_SECRET);
    // console.log("[AuthController] Token expires in:", TOKEN_TTL);

    return res.json({ success: true,
      message: "Login successful", token, user: { id: user._id, email: user.email, username: user.username } });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};