import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import healthRoute from "./routes/health.route.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", healthRoute);

// Port
const PORT = Number(process.env.PORT) || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start();
