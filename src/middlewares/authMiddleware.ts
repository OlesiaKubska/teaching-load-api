import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

interface JwtPayload {
  id: string;
  email: string;
  iat?: number;
  exp?: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // console.warn("[AuthMiddleware] Missing Authorization header");
    return res.status(401).json({ success: false, message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    // console.warn("[AuthMiddleware] Token missing");
    return res.status(401).json({ success: false, message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    // console.log("[AuthMiddleware] Token verified");
    // console.log("[AuthMiddleware] Decoded payload:", decoded);

    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      // console.warn("[AuthMiddleware] Token expired at:", new Date(decoded.exp * 1000).toISOString());
      return res.status(403).json({ success: false, message: "Token expired" });
    }

    (req as any).user = decoded;
    next();
  } catch (error: any) {
    // console.error("[AuthMiddleware] Invalid token:", error.message);
    return res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};
