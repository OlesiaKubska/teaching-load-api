import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import healthRoute from "./routes/health.route.js";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", healthRoute);

// ---- Swagger endpoints ----
app.get('/api/docs-json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Port
const PORT = Number(process.env.PORT) || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start();
