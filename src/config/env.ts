import dotenv from "dotenv";
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI || "";